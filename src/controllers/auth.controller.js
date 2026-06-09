import authService from "../services/auth.service.js";

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    const token = createJWT(data);
    res.cookie("authToken", token, { maxAge: 86400 * 1000 });
    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    const token = createJWT(data);
    res.cookie("authToken", token, { maxAge: 86400 * 1000 });
    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

const forgetPassword = async (req, res) => {
  try {
    const data = await authService.forgetPassword(req.body.email);
    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

const resetPassword = async (req, res) => {
  const query = req.body;

  if (!query.token || !query.useId) {
    return res.status(400).send("Token & user Id are required");
  }
  try {
    const data = await authService.resetPassword(
      query.userId,
      query.token,
      req.body.password,
    );
    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

export default { login, register, forgetPassword, resetPassword };
