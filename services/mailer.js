const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xolmirzayevfoziljon8@gmail.com", // Gmail username
    pass: "fozil4444", // Gmail password or App-Specific Password
  },
});

// Define email options
let mailOptions = {
  from: "xolmirzayevfoziljon8@gmail.com",
  to: "abduboriymirzayev@gmail.com",
  subject: "Test Email from Node.js",
  text: "Hello from Node.js!",
};

// Send email
exports.sendMail = async () => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error occurred:", error);
    }
    console.log("Email sent successfully!");
  });
};

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "xolmirzayevfoziljon8@gmail.com",
//     pass: "fozil4444",
//   },
// });

// exports.sendMail = async () => {
//   await transporter.sendMail(
//     {
//       from: '"Maddison Foo Koch 👻" <xolmirzayevfoziljon8@gmail.com>', // sender address
//       to: "abduboriymirzayev@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     },
//     console.log
//   );
// };
