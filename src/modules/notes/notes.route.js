import { Hono } from "hono";
import { notesControllers } from "./notes.controller.js";

const app = new Hono().basePath("/notes");

app.get("/:id/:abc", notesControllers.getAllNotes);

export { app as notesRoutes };
