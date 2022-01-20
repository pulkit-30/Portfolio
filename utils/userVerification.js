const userVerification = (req, res, next) => {
  if (req.params.Password === "Pulkit@30") {
    return next();
  } else {
    res.status(400).redirect("/failure");
  }
};

module.exports = userVerification;
