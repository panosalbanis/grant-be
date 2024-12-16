import { Query, Resolver } from '@nestjs/graphql';
import { OrganizationService } from './organizations.service';
import { Organization } from './schemas/organizations.schema';

@Resolver('Organization')
export class OrganizationsResolver {
  constructor(private organizationsService: OrganizationService) {}

  @Query(() => Array<Organization>)
  async organizations() {
    return this.organizationsService.findAll();
  }
}
