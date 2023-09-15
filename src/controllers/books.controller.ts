import { Request, Response, NextFunction } from "express";
import booksService from "../services/books.service";

const getBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const query = request.query.query as string;

    const books = booksService.getBooks(query);

    return response.status(200).send(books);
  } catch (error: any) {
    next(error);
  }
};

export default {
  getBooks,
};
