import axios from 'axios'

export const sendFastOTPSMS = async (phoneNumber: string, verificationCode: string) => {
  const apiKey = process.env.FAST_SMS_API_KEY

  const params = {
    authorization: apiKey,
    sender_id: 'Nara',
    message: 182637,
    variables_values: `${verificationCode}|`,
    route: 'dlt',
    numbers: phoneNumber,
  }

  const url = `https://www.fast2sms.com/dev/bulkV2`
  try {
    const response = await axios.get(url, { params })
    console.log(response.data)
    return true
  } catch (err: any) {
    console.log(err?.response?.data, 'error while sending otp via fast sms')
    return false
  }
}
