/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */

import type { NextApiRequest, NextApiResponse } from 'next'

import { generateOTP } from '@/utils/helper'
import { sendFastOTPSMS } from '@/modules/otpSMS/fast2sms'
import { createUserForOTPSMS } from '@/modules/firebase/database'
import rateLimitMiddleware from '@/middleware/rateLimiter'

async function handleGetRequest(_req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(`sendOTP is up and running`)
  } catch (err) {
    console.log(err)
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const { apiKey, phoneNumber } = req.body

    // if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_WEB_API_KEY) {
    //   res.status(401).send({ success: false, error: 'Invalid Api key' })
    //   return
    // }
    // if (!phoneNumber) {
    //   // check for the contactId regex is correct or not.
    //   res.status(400).send({ success: false, error: 'phoneNumber or OTP is missing' })
    //   return
    // }

    // if (phoneNumber == '+911234567890') {
    //   res.status(200).send({ success: true })
    //   return
    // }

    // const OTP = generateOTP(6)
    // const data = {
    //   phoneNumber,
    //   OTP,
    //   lastLoginAt: Date.now(),
    //   expireAt: Date.now() + 15 * 60 * 1000,
    // }

    // const phoneNumberIn = phoneNumber?.replace('+', '')?.replace('91', '')

    // const isSent = await sendFastOTPSMS(phoneNumberIn, OTP)
    // if (isSent) {
    //   await createUserForOTPSMS(data)
    // }

    // console.log(`otp ${isSent ? 'Sent' : 'not Sent'} for ${phoneNumber} : ${OTP}`)
    // res.status(200).send({ success: true })
    // return
    return res.status(403).send({ msg: 'bye bye' })
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    res.status(400).send({ success: false, error: e.message })
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') await handlePostRequest(req, res)
  else if (req.method === 'GET') await handleGetRequest(req, res)
  else res.status(400).send('Invalid request method')
}
export default rateLimitMiddleware(handler)
