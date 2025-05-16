const rateLimitMap = new Map()

export default function rateLimitMiddleware(handler: any) {
  return (req: any, res: any) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const limit = 5 // Limiting requests to 5 per minute per IP
    const windowMs = 60 * 60 * 1000 // 1 hour

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      })
    }

    const ipData = rateLimitMap.get(ip)

    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0
      ipData.lastReset = Date.now()
    }

    console.log(ipData)

    if (ipData.count >= limit) {
      console.log(ip, ipData, ipData.count)
      return res.status(429).send('Too Many Requests')
    }

    ipData.count += 1

    return handler(req, res)
  }
}
