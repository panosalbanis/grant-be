import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsResolver } from './organizations.resolver';
import { OrganizationService } from './organizations.service';

describe('OrganizationResolver', () => {
  let resolver: OrganizationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationsResolver, OrganizationService],
    }).compile();

    resolver = module.get<OrganizationsResolver>(OrganizationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
