export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const MESSAGES = {
  SUCCESS: {
    DELETE_SUCCESS: "Restaurant deleted successfully!",
  },
  ERROR: {
    CREATE_ERROR: "Error creating restaurant",
    UPDATE_ERROR: "Error updating restaurant",
    DELETE_ERROR: "Error deleting restaurant",
    LISTING_ERROR: "Error Listing restaurant",
    CREATE_FAILED: "Add Restaurant failed",
    UPDATE_FAILED: "Update Restaurant failed",
    DELETE_FAILED: "Delete Restaurant failed",
    LISTING_FAILED: "Restaurant Listing failed",
  },
};
