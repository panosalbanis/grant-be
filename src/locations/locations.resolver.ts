import { Query, Resolver } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './schemas/location.schema';

@Resolver('Location')
export class LocationsResolver {
  constructor(private locationsService: LocationsService) {}

  @Query(() => Array<Location>)
  async locations() {
    return this.locationsService.findAll();
  }
}
