import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Organization } from '../../organizations/schemas/organizations.schema';
import { Location } from '../../locations/schemas/location.schema';

export type GrantDocument = HydratedDocument<Grant>;

@Schema()
export class Grant {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Organization.name })
  organization: Organization;

  @Prop()
  avgAmount: number;

  @Prop()
  deadLine: string;

  @Prop({
    type: String,
    enum: ['ONLINE', 'PAPER'],
  })
  applicationType: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Location.name })
  location: Location;

  @Prop({
    type: [String],
    enum: [
      'PUBLIC_HEALTH_WOMEN',
      'CULTURE_FOOD',
      'MEDICAL_ASSISTANT',
      'VETERANS_ISSUES',
    ],
  })
  tags: Array<string>;
}

export const GrantSchema = SchemaFactory.createForClass(Grant);
