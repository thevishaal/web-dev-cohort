import { Todo } from "../models/todo.model.js";

/**
 * TODO: Create a new todo
 * - Extract data from req.body
 * - Create todo in database
 * - Return 201 with created todo
 */
export async function createTodo(req, res, next) {
  try {
    // Your code here
    const { title, completed, priority, dueDate, tags } = req.body;

    const todo = await Todo.create({
      title,
      completed,
      priority,
      tags,
      dueDate,
    });

    return res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: List todos with pagination and filters
 * - Support query params: page, limit, completed, priority, search
 * - Default: page=1, limit=10
 * - Return: { data: [...], meta: { total, page, limit, pages } }
 */
export async function listTodos(req, res, next) {
  try {
    // Your code here
    const { page = 1, limit = 10, completed, priority, search } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const filter = {};

    if (completed !== undefined) {
      filter.completed = completed === "true";
    }

    if (priority) {
      filter.priority = priority;
    }

    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const skip = (pageNumber - 1) * limitNumber;

    const [data, total] = await Promise.all([
      Todo.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limitNumber),

      Todo.countDocuments(filter),
    ]);

    const pages = Math.ceil(total / limitNumber);

    return res.status(200).json({
      data,
      meta: {
        total,
        page: pageNumber,
        limit: limitNumber,
        pages,
      },
    });
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Get single todo by ID
 * - Return 404 if not found
 */
export async function getTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: { message: "not found" } });
    }

    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Update todo by ID
 * - Use findByIdAndUpdate with { new: true, runValidators: true }
 * - Return 404 if not found
 */
export async function updateTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;

    const todo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({ error: { message: "Todo not found" } });
    }

    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Toggle completed status
 * - Find todo, flip completed, save
 * - Return 404 if not found
 */
export async function toggleTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: { message: "not found" } });
    }

    todo.completed = !todo.completed;
    await todo.save();

    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Delete todo by ID
 * - Return 204 (no content) on success
 * - Return 404 if not found
 */
export async function deleteTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ error: { message: "Todo not found" } });
    }

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
}
