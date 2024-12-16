db = connect('mongodb://localhost/test');

db.dropDatabase();

org_id = ObjectId();
loc_id = ObjectId();
apt_id = ObjectId();
aps_id = ObjectId();
gnt_id = ObjectId();

db.locations.insertOne({
  _id: loc_id,
  town: 'Wilmington',
  state: 'Delaware',
  country: 'United States',
});

db.organizations.insertOne({
  _id: org_id,
  name: 'Robinson Foundation',
});

db.applicants.insertOne({
  _id: apt_id,
  name: 'Customer A',
});

db.grants.insertOne({
  _id: gnt_id,
  organization: org_id,
  name: 'Robinson Foundation Grant',
  avgAmount: 25000,
  deadLine: new ISODate('2025-01-01T00:00:00Z'),
  applicationType: 'ONLINE',
  location: loc_id,
  tags: ['PUBLIC_HEALTH_WOMEN'],
});
