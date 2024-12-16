import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Grant } from './schemas/grants.schema';
import { Organization } from 'src/organizations/schemas/organizations.schema';
import { Location } from 'src/locations/schemas/location.schema';

@Injectable()
export class GrantService {
  constructor(
    @InjectModel(Grant.name)
    private grantsModel: Model<Grant>,
  ) {}

  async findAll(): Promise<Grant[]> {
    return this.grantsModel
      .find()
      .populate('organization', null, Organization.name)
      .populate('location', null, Location.name)
      .exec();
  }

  async findBySearchTerm(searchTerm: string): Promise<Grant[]> {
    const regex = new RegExp(String.raw`\s${searchTerm}\s`, 'gi');
    return this.grantsModel.find({ name: { $regex: regex } });
  }
}
