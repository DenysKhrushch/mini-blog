import cors from 'cors';
import { Application } from 'express';

export function corsHandler(app: Application) {
  const allowedOrigins = [
    'https://mini-blog-4gv68jcy1-denyskhrushch.vercel.app/',
    'https://mini-blog-git-main-denyskhrushch.vercel.app/',
    'https://mini-blog-teal-rho.vercel.app',
    'http://localhost:4200'
  ];

  app.use(cors(allowedOrigins));
}
