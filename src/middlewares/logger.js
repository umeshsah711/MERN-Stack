const logger = (req, res, next) => {
  const url = req.originlaUrl;
  const method = req.method;

  console.log(`Method: ${method} & Url: ${url}`);
  next();
};

export default logger;
