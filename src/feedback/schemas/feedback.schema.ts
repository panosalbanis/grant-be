import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Applicant } from 'src/applicants/schemas/applicants.schema';
import { Grant } from 'src/grants/schemas/grants.schema';

export type FeedbackDocument = HydratedDocument<Feedback>;

@Schema()
export class Feedback {
  _id: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Grant.name })
  grant: Grant;

  @Prop()
  feedbackText: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Applicant.name })
  applicant: Applicant;

  @Prop()
  interest: boolean;

  @Prop()
  dateTime: string;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
