// handle all global error in this file

// not found error handler
const notFoundError = (_req, _res, next) => {
  const err = new Error("Resource not found");
  err.status = 404;
  next(err);
};


// all error handler middleware
const errorHandler = (err, _req, res, _next) => {
  if (err.status || err.message) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: "Internal server error",
  });
};

module.exports = { notFoundError, errorHandler };
