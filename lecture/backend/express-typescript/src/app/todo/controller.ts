import type { Request, Response } from "express";
import {
  todoUpdateValidaionSchema,
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";

class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public handleGetAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public async handleInsertTodo(req: Request, res: Response) {
    try {
      const unvalidated = req.body;
      const validationResult =
        await todoValidationSchema.parseAsync(unvalidated);
      this._db.push(validationResult);
      return res.status(201).json({ todo: validationResult });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async handleGetTodoById(req: Request, res: Response) {
    const id = req.params.id;
    const todo = this._db.find((todo) => todo.id === id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    return res.status(200).json({ todo });
  }

  public async handleUpdateTodo(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const unvalidated = req.body;
      const validationResult =
        await todoUpdateValidaionSchema.parseAsync(unvalidated);

      const existingTodo = this._db.find((todo) => todo.id === id);

      if (!existingTodo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }

      Object.assign(existingTodo, validationResult);

      return res.status(200).json({
        message: "Todo updated successfully",
        todo: existingTodo,
      });
    } catch (error) {
      return res.json({ error });
    }
  }

  public async handleDeleteTodoById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const index = this._db.findIndex((todo) => todo.id === id);

      if (index === -1) {
        return res.status(404).json({ message: "Todo Not Found" });
      }

      const deletedTodo = this._db.splice(index, 1)[0];

      return res.status(200).json({
        message: "Todo deleted successfully",
        todo: deletedTodo,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default TodoController;
