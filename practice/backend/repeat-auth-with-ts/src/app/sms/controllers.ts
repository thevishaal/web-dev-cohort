import type { Request, Response } from "express";
import { db } from "../../common/db/index.js";
import { studentsTable } from "../../common/db/schema.js";

export class studentsController {
  public async handleAllStudents(req: Request, res: Response) {
    const students = await db.select().from(studentsTable);

    return res.status(200).json({ data: students });
  }
}
