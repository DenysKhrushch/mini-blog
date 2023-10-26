import cors from 'cors';
import { Application } from 'express';

export function corsHandler(app: Application) {
  const allowedOrigins = [
    'https://mini-blog-4gv68jcy1-denyskhrushch.vercel.app/',
    'https://mini-blog-git-main-denyskhrushch.vercel.app/',
    'https://mini-blog-teal-rho.vercel.app',
    'http://localhost:4200'
  ];

  const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  app.use(cors(corsOptions));
}
