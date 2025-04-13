import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import * as dotenv from 'dotenv';

dotenv.config();
console.log('🧪 MONGO_URI =>', process.env.MONGO_URI);

@Module({
  imports: [
    
    MongooseModule.forRoot(process.env.MONGO_URI || ''),

    UsersModule,

    PetsModule,

    AdoptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

