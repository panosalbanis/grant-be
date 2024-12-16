import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ApplicantDocument = HydratedDocument<Applicant>;

@Schema()
export class Applicant {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;
}

export const ApplicantSchema = SchemaFactory.createForClass(Applicant);
