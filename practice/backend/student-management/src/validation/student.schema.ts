import { z } from "zod";

export const studentValidationSchema = z.object({
  id: z.string().describe("student id"),
  fname: z.string().describe("first name of student"),
  lname: z.string().optional().describe("last name of student"),
  age: z.number().describe("Age of student"),
  course: z.string().describe("course of student"),
});

export type Student = z.infer<typeof studentValidationSchema>;

export const studentUpdateValidationSchema = studentValidationSchema.omit({
  id: true,
});
