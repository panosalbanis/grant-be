import { Test, TestingModule } from '@nestjs/testing';
import { ApplicantsResolver } from './applicants.resolver';
import { ApplicantService } from './applicants.service';

describe('ApplicantsResolver', () => {
  let resolver: ApplicantsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicantsResolver, ApplicantService],
    }).compile();

    resolver = module.get<ApplicantsResolver>(ApplicantsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
