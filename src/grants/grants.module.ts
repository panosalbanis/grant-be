import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GrantsResolver } from './grants.resolver';
import { Grant, GrantSchema } from './schemas/grants.schema';
import { GrantService } from './grants.service';
import {
  Organization,
  OrganizationSchema,
} from 'src/organizations/schemas/organizations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Grant.name, schema: GrantSchema },
      { name: Organization.name, schema: OrganizationSchema },
    ]),
  ],
  providers: [GrantsResolver, GrantService],
  exports: [GrantService],
})
export class GrantsModule {}
