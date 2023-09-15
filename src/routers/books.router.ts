import express from "express";
import booksController from "../controllers/books.controller";

const router = express.Router();

router.get("/books", booksController.getBooks);

export default router;
