import express, { Application } from "express";
import router from "./src/routers/books.router";
import { errorMiddleware } from "./src/middlewares/error";
import { notFoundMiddleware } from "./src/middlewares/notFound";

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
