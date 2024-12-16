import { Test, TestingModule } from '@nestjs/testing';
import { GrantsResolver } from './grants.resolver';
import { GrantService } from './grants.service';

describe('OrganizationResolver', () => {
  let resolver: GrantsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrantsResolver, GrantService],
    }).compile();

    resolver = module.get<GrantsResolver>(GrantsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
