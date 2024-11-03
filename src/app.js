import { Hono } from "hono";
import { notesRoutes } from "./modules/notes/notes.route.js";
import { ApiResponse } from "./utils/apiResponse";

const URL_PREFIX = `/api/v1`;
const app = new Hono();

app.route(URL_PREFIX, notesRoutes);

app.notFound((c) => {
  return c.text(`Route not found.`, 404);
});
app.onError((err, c) => {
  console.log(err);
  return c.json(
    new ApiResponse(
      err?.statusCode || 500,
      err?.errors || [],
      err?.message || ""
    ),
    err?.statusCode || 500
  );
});

export { app };
