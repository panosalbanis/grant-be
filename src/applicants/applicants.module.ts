import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicantsResolver } from './applicants.resolver';
import { Applicant, ApplicantSchema } from './schemas/applicants.schema';
import { ApplicantService } from './applicants.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Applicant.name, schema: ApplicantSchema },
    ]),
  ],
  providers: [ApplicantsResolver, ApplicantService],
  exports: [ApplicantService],
})
export class ApplicantsModule {}
