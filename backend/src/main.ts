import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response, NextFunction } from 'express'; // 👈 Add this

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static frontend
  app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));

  // Add types to middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(join(__dirname, '..', 'frontend', 'dist', 'index.html'));
    } else {
      next();
    }
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
