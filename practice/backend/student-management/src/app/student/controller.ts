import type { Request, Response } from "express";

import {
  studentUpdateValidationSchema,
  studentValidationSchema,
  type Student,
} from "../../validation/student.schema.js";
import { th } from "zod/locales";

export class StudentController {
  private _db: Student[];
  constructor() {
    this._db = [];
  }

  public async handleGetAllStudents(req: Request, res: Response) {
    return res.status(200).json({
      status: "success",
      students: this._db,
    });
  }

  public async handleGetStudentById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const student = this._db.find((student) => student.id === id);

      if (!student) {
        return res.status(404).json({
          status: "failed",
          message: "Student not found",
        });
      }

      return res.status(200).json({
        status: "success",
        student,
      });
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        error,
      });
    }
  }

  public async handleInsertStudent(req: Request, res: Response) {
    try {
      const validatedData = await studentValidationSchema.parseAsync(req.body);

      this._db.push(validatedData);
      return res.status(201).json({
        status: "success",
        message: "Student created successfully",
        student: validatedData,
      });
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        error,
      });
    }
  }

  public async handleUpdateStudentById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const validatedData = await studentUpdateValidationSchema.parseAsync(
        req.body,
      );

      const existingStudent = this._db.find((student) => student.id === id);

      if (!existingStudent) {
        return res.status(404).json({
          status: "failed",
          message: "Student not found",
        });
      }

      Object.assign(existingStudent, validatedData);

      return res.status(200).json({
        status: "success",
        message: "Student updated successfully",
        student: existingStudent,
      });
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        error,
      });
    }
  }

  public async handleDeleteStudentById(req: Request, res: Response) {
    const id = req.params.id;

    const index = this._db.findIndex((student) => student.id === id);

    if (index === -1) {
      return res.status(404).json({
        status: "failed",
        message: "Student not found",
      });
    }

    this._db.splice(index, 1);

    return res.status(204).send();
  }
}
