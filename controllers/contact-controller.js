const mailConfig = require("../models/email-transporter");
const { validationResult } = require("express-validator");

const emailContactForm = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors?.errors });
  }

  mailConfig.options.params = { ...req.body };

  mailConfig.api.sendTransacEmail(mailConfig.options).catch((err) => {
    return res.status(400).json({
      errors:
       [{
        msg: 'There was an error processing the form. Please try again!'
       }],
      err: err,
    });
  });

  res.status(201).json({ message: "Message sent successfully! We appreciate your submission. If you have any other feedback on how we can improve our podcast, please reach out to 3idiotssw@gmail.com.", data: mailConfig.options.params });
};

exports.emailContactForm = emailContactForm;
