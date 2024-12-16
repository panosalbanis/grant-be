import { Query, Resolver } from '@nestjs/graphql';
import { ApplicantService } from './applicants.service';

@Resolver('Applicant')
export class ApplicantsResolver {
  constructor(private applicantService: ApplicantService) {}

  @Query()
  async applicants() {
    return this.applicantService.findAll();
  }
}
