import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // This is a simplified version - in production you'd use @remotion/renderer
      res.status(200).json({ 
        message: 'Video rendering started',
        props: req.body 
      });
    } catch (error) {
      res.status(500).json({ error: 'Rendering failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
