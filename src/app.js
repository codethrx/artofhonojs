import { Hono } from "hono";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "./utils/apiError";
import { ApiResponse } from "./utils/apiResponse";

const app = new Hono();
//
const notes = [];
//
app.get("/api/v1/notes/:id/:abc", async (c) => {
  const id = c.req.param();
  if (id?.id === "2") {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something weird happened",
      ["hi", "bye"]
    );
  }
  return c.json(
    new ApiResponse(
      StatusCodes.OK,
      { notes, id },
      "Notes fetched successfully",
      StatusCodes.OK
    )
  );
});

app.notFound((c) => {
  return c.text(`Route not found.`, 404);
});
app.onError((err, c) => {
  console.log(err);
  return c.json(
    new ApiResponse(err?.statusCode, err?.errors || [], err?.message || ""),
    err?.statusCode || 500
  );
});

export { app };
