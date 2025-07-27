import { z } from 'zod';

export const priorityEnum = z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']);

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
  priority: priorityEnum,
  dueDate: z.date().optional(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be less than 100 characters'),
  description: z
    .string()
    .max(500, 'Description must be less than 500 characters')
    .optional(),
  priority: priorityEnum.default('MEDIUM'),
  dueDate: z.string().datetime().optional().or(z.date().optional()),
});

export const updateTaskSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be less than 100 characters')
    .optional(),
  description: z
    .string()
    .max(500, 'Description must be less than 500 characters')
    .optional(),
  completed: z.boolean().optional(),
  priority: priorityEnum.optional(),
  dueDate: z.string().datetime().optional().or(z.date().optional()),
});

export type Task = z.infer<typeof taskSchema>;
export type CreateTask = z.infer<typeof createTaskSchema>;
export type UpdateTask = z.infer<typeof updateTaskSchema>;
export type Priority = z.infer<typeof priorityEnum>;
