import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'marguerite72@ethereal.email',
      pass: 'PZapm3r4MHvu8C6BGm'
    },
  });


  const sendEmail = async (req, res) => {
    const info = await transporter.sendMail({
      from: '"	Marguerite Little 👻" <marguerite72@ethereal.email>',
      to: "mohammadasadiam64@gmail.com",
      subject: "Congratulation! Benizar income support (SINDH BANK)✔",
      text: "Mubarak ho appka benazir income support ma 10 lac cash or 20 tola sona nikla haa. Abhi 2000rs 03221767616 ma bhejain or inaam hasil krain", 
      html: "<b>Hello world?</b>",
    });
  
    console.log("Message sent: %s", info.messageId);
    res.send(info);
  };
  
export default sendEmail;