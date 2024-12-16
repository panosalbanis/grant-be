import { Test, TestingModule } from '@nestjs/testing';
import { GrantService } from './grants.service';

describe('GrantsService', () => {
  let service: GrantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrantService],
    }).compile();

    service = module.get<GrantService>(GrantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
