const { check } = require("express-validator");

exports.registrationValidity=[
check("name").trim().notEmpty().withMessage("name is missing"),
check("email").trim().notEmpty().withMessage("email is empty").isEmail().withMessage("email is not valid"),
check("password").trim().notEmpty().withMessage("password is empty").isLength({min:6}).withMessage("password must have at least 5 character"),
check("dob").trim().notEmpty().withMessage("dob is missing").isISO8601().toDate().withMessage("not a valid date")
];