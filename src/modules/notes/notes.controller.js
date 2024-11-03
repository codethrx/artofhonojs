import { StatusCodes } from "http-status-codes";
import { ApiError } from "../../utils/apiError.js";
import { ApiResponse } from "../../utils/apiResponse.js";
const notes = [];
class NotesControllers {
  async getAllNotes(c) {
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
  }
}

export const notesControllers = new NotesControllers();
