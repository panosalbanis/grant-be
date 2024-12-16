import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Feedback } from './schemas/feedback.schema';
import { Grant } from 'src/grants/schemas/grants.schema';
import { Applicant } from 'src/applicants/schemas/applicants.schema';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback.name)
    private feedbackModel: Model<Feedback>,
  ) {}

  async findAll(): Promise<Feedback[]> {
    return this.feedbackModel
      .find()
      .populate('grant', null, Grant.name)
      .populate('applicant', null, Applicant.name)
      .exec();
  }

  async submitFeedback(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<Feedback> {
    return (await this.feedbackModel.create(createFeedbackDto)).populate([
      'grant',
      'applicant',
    ]);
  }
}
