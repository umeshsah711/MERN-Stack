const roleBasedAuth = (role) => {
  return (req, res, next) => {
    if (req.user.roles.includes(role)) next();
    res.status(403).send("Access Denied");
    next();
  };
};

export default roleBasedAuth;
