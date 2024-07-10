import { NextResponse,NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req) {
   console.log("........................>>>")
   const data  =await req.json()
   console.log(data)
 
 try {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASS
    }
  });
  
  var mailOptions = {
    from: data?.email ,
    to:  process.env.NEXT_PUBLIC_EMAIL,
    subject: data?.subject,
    text: data?.message_text
  };
  
  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent: ' + info.response);
    return NextResponse.json({ message: 'Success: email was sent' });
 } catch (error) {
  console.log(error.message)
  return NextResponse.json({ message: 'COULD NOT SEND MESSAGE',error:error.message }, { status: 500 });
 }
 return NextResponse.json({ message: 'COULD NOT SEND MESSAGE',error:error.message }, { status: 500 });
}


//   const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     auth: {
  //         user: 'maximillian.cormier43@ethereal.email',
  //         pass: 'bXqSWcGep9mc965ZWG'
  //     }
  // });
  // console.log(".................................>")
  //   try {
  //     const mail = await transporter.sendMail({
  //       from: '"abdulmalek","abdulmalek.swe.585@gmail.com"', // Replace with your email address
  //       to: 'abdulmalek.swe.585@gmail.com',
  //       subject: "Hello ✔", // Subject line
  //       text: "Hello world?", // plain text body
  //       html: "<b>Hello world?</b>", 
  //     });
  
  //     return NextResponse.json({ message: 'Success: email was sent' });
  //   } catch (error) {
  //     console.error(error.message);
  //     return NextResponse.json({ message: 'COULD NOT SEND MESSAGE',error:error.message }, { status: 500 });
  //   }