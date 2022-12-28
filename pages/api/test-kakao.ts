// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = fs.readFileSync('kakao-test-data-2.txt', 'utf8')
    let jsonData = JSON.parse(data.replace(/\\n/g, ''))
    res.status(200).json({ data: jsonData})
}
