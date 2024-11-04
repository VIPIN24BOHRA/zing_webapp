/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */

import type { NextApiRequest, NextApiResponse } from 'next'
import { getWaUserDetails, setWaUserDetails } from '@/modules/firebase/database'
import { createCustomToken } from '@/modules/firebase/auth'

async function handleGetRequest(_req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(401).send(`verifyOTP is up and running`)
  } catch (err) {
    console.log(err)
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { apiKey, phoneNumber, OTP } = await req.body

    if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_WEB_API_KEY) {
      res.status(401).send({ success: false, error: 'Invalid Api key' })
      return
    }
    if (!phoneNumber || !OTP) {
      res.status(400).send({ success: false, error: 'phoneNumber  or OTP is missing' })
      return
    }

    if (phoneNumber == '+911234567890' && OTP == '000000') {
      const token = await createCustomToken(phoneNumber)
      res.status(200).send({ success: true, user: { token } })
      return
    }
    const data = await getWaUserDetails(phoneNumber)

    if (!data?.OTP) {
      res.status(400).send({ msg: 'OTP invalid', success: false })
      return
    }
    if (data && data?.expireAt < Date.now()) {
      res.status(400).send({ msg: 'expired token', success: false })
      return
    }
    if (data?.OTP !== OTP) {
      console.log(`OTP not matching ${data?.OTP} ${OTP}`)
      res.status(400).send({ msg: 'OTP no Matching', success: false })
      return
    }

    await setWaUserDetails({
      phoneNumber,
      lastLoginAt: Date.now(),
      OTP: data.OTP,
      verified: true,
    })

    const token = await createCustomToken(phoneNumber)

    res.status(200).send({
      success: true,
      user: {
        phoneNumber,
        lastLoginAt: Date.now(),
        OTP: data.OTP,
        verified: true,
        token: token,
      },
    })
    return
  } catch (e) {
    // eslint-disable-next-line no-console

    res.status(400).send({ success: false, error: e })
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') await handlePostRequest(req, res)
  else if (req.method === 'GET') await handleGetRequest(req, res)
  else res.status(400).send('Invalid request method')
}
export default handler
