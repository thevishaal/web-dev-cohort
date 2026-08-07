import { z } from "zod";

export const studentsPayload = z.object({
  name: z.string().min(2).max(79).nonempty(),
  email: z.email(),
  age: z.string().nonempty().describe("age of student"),
  std: z.string().nonempty().describe("class of student"),
});
