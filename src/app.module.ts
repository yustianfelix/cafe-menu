import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    // Use an environment variable for the connection string
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/cafe-menu-db'),
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}