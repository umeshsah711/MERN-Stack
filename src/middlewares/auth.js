const auth = async (req, res, next) => {
  const cookie = req.headers.cookie;
  if (!cookie) return res.status(401).send("User not authenticated.");

  const token = cookie.split("=")[1];
  if (!token) return res.status(401).send("User not authenticated.");

  try {
    const result = await verifyJWT(token);
    req.user = result;
    next();
  } catch (error) {
    res.status(401).send("Invalid Token");
  }
};

export default auth;
