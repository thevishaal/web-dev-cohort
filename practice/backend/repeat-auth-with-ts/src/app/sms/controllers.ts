import type { Request, Response } from "express";
import { db } from "../../common/db/index.js";
import { studentsTable } from "../../common/db/schema.js";
import { studentsPayload } from "./models.js";
import { eq } from "drizzle-orm";
import { json } from "zod";

export class studentsController {
  public async handleAllStudents(req: Request, res: Response) {
    const students = await db.select().from(studentsTable);

    return res.status(200).json({ data: students });
  }

  public async handleStudents(req: Request, res: Response) {
    const validationResult = await studentsPayload.safeParseAsync(req.body);

    if (validationResult.error) {
      return res.status(400).json({
        message: "Body validation failed",
        error: validationResult.error.issues,
      });
    }

    const { name, email, age, std } = validationResult.data;

    const [existingStudent] = await db
      .select()
      .from(studentsTable)
      .where(eq(studentsTable.email, email));

    if (existingStudent) {
      return res.status(409).json({
        message: `Already exist student with this email ${email}`,
        error: "conflict",
      });
    }

    const [student] = await db
      .insert(studentsTable)
      .values({
        name,
        email,
        age,
        class: std,
      })
      .returning({
        id: studentsTable.id,
        name: studentsTable.name,
        email: studentsTable.email,
        age: studentsTable.age,
        std: studentsTable.class,
      });

    return res
      .status(201)
      .json({ message: "Student created successfully.", data: student });
  }

  public async handleStudentById(req: Request<{ id: string }>, res: Response) {
    try {
      const id = req.params.id;

      if (!id) {
        return res
          .status(400)
          .json({ message: "Id is required!", error: "Id is missing." });
      }

      const [student] = await db
        .select()
        .from(studentsTable)
        .where(eq(studentsTable.id, id));

      if (!student) {
        return res
          .status(404)
          .json({ message: "Student not found", data: null });
      }

      return res.status(200).json({
        message: null,
        data: student,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
