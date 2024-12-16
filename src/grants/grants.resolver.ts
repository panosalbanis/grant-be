import { Args, Query, Resolver } from '@nestjs/graphql';
import { GrantService } from './grants.service';
import { Grant } from './schemas/grants.schema';

@Resolver('Grant')
export class GrantsResolver {
  constructor(private grantService: GrantService) {}

  @Query(() => Array<Grant>)
  async grants() {
    return this.grantService.findAll();
  }

  @Query(() => Array<Grant>)
  async findGrants(
    @Args('searchTerm', { type: () => String }) searchTerm: string,
  ) {
    return this.grantService.findBySearchTerm(searchTerm);
  }
}
