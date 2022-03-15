import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport'

const email = process.env.MAILADRESS;
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
)

export default async ( req: NextApiRequest, res: NextApiResponse) => {
  
}