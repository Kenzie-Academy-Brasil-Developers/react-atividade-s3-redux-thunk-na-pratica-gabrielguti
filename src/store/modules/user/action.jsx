import { ADD_COMMENT } from "./action.Types";

export const addComment = (updatedUser) => ({
    type: ADD_COMMENT,
    updatedUser,
});

