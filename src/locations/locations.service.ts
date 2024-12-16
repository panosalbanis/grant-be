import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Location } from './schemas/location.schema';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name) private locationsModel: Model<Location>,
  ) {}

  async findAll(): Promise<Location[]> {
    return this.locationsModel.find().exec();
  }
}
