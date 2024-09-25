import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
  const imageFiles = fs.readdirSync(imagesDirectory);
  const images = imageFiles.map((fileName) => `/images/gallery/${fileName}`);
  res.status(200).json(images);
}