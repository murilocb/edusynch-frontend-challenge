import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const baseUrl = process.env.COIN_API_URL;
  const apiKey = process.env.COIN_API_KEY;

  try {
    const response = await axios.get(`${baseUrl}/assets`, {
      headers: {
        'X-CoinAPI-Key': apiKey,
      },
    });

    const markets = response.data;
    res.status(200).json(markets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch witch coinApi' });
  }
}
