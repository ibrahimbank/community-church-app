// here we set our error handler so that it will be dynamic and making use we send it in json format

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, //making sure the error does not show in production
  });
};

module.exports = { errorHandler };
