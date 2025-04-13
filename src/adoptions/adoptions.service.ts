import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { Adoption } from './entities/adoption.entity'; // clase simple con owner y pet

@Injectable()
export class AdoptionsService {
  constructor(
    @InjectModel('Adoption') private readonly adoptionModel: Model<Adoption>,
  ) {}

  async create(dto: CreateAdoptionDto): Promise<Adoption> {
    const adoption = new this.adoptionModel({
      ...dto,
      owner: new Types.ObjectId(dto.owner),
      pet: new Types.ObjectId(dto.pet),
    });
    return adoption.save();
  }

  async findAll(): Promise<Adoption[]> {
    return this.adoptionModel
      .find()
      .populate('owner')
      .populate('pet')
      .exec();
  }

  async findOne(id: string): Promise<Adoption> {
    const adoption = await this.adoptionModel
      .findById(id)
      .populate('owner')
      .populate('pet')
      .exec();

    if (!adoption) {
      throw new NotFoundException(`Adoption with id ${id} not found`);
    }

    return adoption;
  }

  async update(id: string, updateDto: UpdateAdoptionDto): Promise<Adoption> {
    const updated = await this.adoptionModel
      .findByIdAndUpdate(
        id,
        {
          ...updateDto,
          owner: updateDto.owner ? new Types.ObjectId(updateDto.owner) : undefined,
          pet: updateDto.pet ? new Types.ObjectId(updateDto.pet) : undefined,
        },
        { new: true },
      )
      .exec();

    if (!updated) {
      throw new NotFoundException(`Adoption with id ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<Adoption> {
    const deleted = await this.adoptionModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Adoption with id ${id} not found`);
    }
    return deleted;
  }
}
