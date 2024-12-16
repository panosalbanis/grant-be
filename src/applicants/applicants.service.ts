import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Applicant } from './schemas/applicants.schema';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectModel(Applicant.name)
    private applicantModel: Model<Applicant>,
  ) {}

  async findAll(): Promise<Applicant[]> {
    return this.applicantModel.find().exec();
  }

  async findOne(id: string): Promise<Applicant> {
    return this.applicantModel.findById(id).exec();
  }
}
