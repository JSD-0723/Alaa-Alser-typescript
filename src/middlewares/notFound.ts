import { Request, Response, NextFunction } from "express";

export const notFoundMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (response.status(404)) {
    return response.status(404).json({ error: "Endpoint not found" });
  } else {
    next();
  }
};
