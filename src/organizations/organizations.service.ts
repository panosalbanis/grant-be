import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from './schemas/organizations.schema';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name)
    private organizationsModel: Model<Organization>,
  ) {}

  async findAll(): Promise<Organization[]> {
    return this.organizationsModel.find().exec();
  }

  async findOne(id: string): Promise<Organization> {
    return this.organizationsModel.findById(id).exec();
  }
}
