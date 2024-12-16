import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationsResolver } from './organizations.resolver';
import {
  Organization,
  OrganizationSchema,
} from './schemas/organizations.schema';
import { OrganizationService } from './organizations.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Organization.name, schema: OrganizationSchema },
    ]),
  ],
  providers: [OrganizationsResolver, OrganizationService],
  exports: [OrganizationService],
})
export class OrganizationsModule {}
