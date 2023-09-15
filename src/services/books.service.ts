import path from "path";
import { readFileSync } from "fs";
import { Book } from "../types";

const getBooks = (query: string) => {
  const filePath = path.join(__dirname, "../../books.json");
  const booksData: Book[] = JSON.parse(readFileSync(filePath, "utf-8"));

  if (!query) {
    return booksData;
  }

  const filteredBooks = booksData.filter((book) =>
    book.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredBooks.length == 0) {
    return JSON.stringify({ result: "No search results" });
  }

  return filteredBooks;
};

export default {
  getBooks,
};
