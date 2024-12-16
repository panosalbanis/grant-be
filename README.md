## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test
```

## Run the app with docker

```bash
docker compose up
```

or if you want grant-be to be rebuild

```bash
docker compose up --build
```

## To test the feedback behavior in graphQl playground

Follow these instructions to setup mongo as a docker container:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/

Before we can query anything, we need to prepare mongo with some data:

```bash
mongosh --port 27017
```

Once in the repl:

```
load('db/prep.js')
```

First find the id of a grand

```graphql
query {
  grants {
    id
  }
}
```

Then find the id of an applicant

```graphql
query {
  applicants {
    id
  }
}
```

Now you can use the above ids to call the mutation

```graphql
mutation FeedbackMutation(
  $interest: Boolean
  $feedbackText: String
  $grant: ID
  $applicant: ID
) {
  submitFeedback(
    interest: $interest
    feedbackText: $feedbackText
    grant: $grant
    applicant: $applicant
  ) {
    id
    feedbackText
    applicant {
      id
      name
    }
    grant {
      id
    }
  }
}
```

```json
{
  "interest": true,
  "feedbackText": "some text",
  "grant": "<<grant_id>>",
  "applicant": "<<applicant_id>>"
}
```

To search the grands DB

```graphql
query ($searchTerm: String) {
  findGrants(searchTerm: $searchTerm) {
    name
  }
}
```

```json
{ "searchTerm": "foundation" }
```
