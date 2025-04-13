import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdoptionsService } from './adoptions.service';
import { AdoptionsController } from './adoptions.controller';
import { AdoptionSchema } from './schemas/adoption.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Adoption', schema: AdoptionSchema }])
  ],
  controllers: [AdoptionsController],
  providers: [AdoptionsService]
})
export class AdoptionsModule {}
