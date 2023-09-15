import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.status(500).json({ error: "Internal server error" });
};
