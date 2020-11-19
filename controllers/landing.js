exports.get_landing = function (req, res, next) {
  res.render("landing", { title: "Express" });
};

exports.lead_email = function (req, res, next) {
  console.log("lead email: ", req.body.lead_email);
  res.redirect("/");
};
