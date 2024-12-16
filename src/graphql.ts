/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ApplicationType {
  ONLINE = 'ONLINE',
  PAPER = 'PAPER',
}

export enum ApplicationStatus {
  APPLIED = 'APPLIED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  NOT_APPLIED = 'NOT_APPLIED',
}

export enum Tag {
  PUBLIC_HEALTH_WOMEN = 'PUBLIC_HEALTH_WOMEN',
  CULTURE_FOOD = 'CULTURE_FOOD',
  MEDICAL_ASSISTANT = 'MEDICAL_ASSISTANT',
  VETERANS_ISSUES = 'VETERANS_ISSUES',
}

export interface IQuery {
  locations():
    | Nullable<Nullable<Location>[]>
    | Promise<Nullable<Nullable<Location>[]>>;
  organizations():
    | Nullable<Nullable<Organization>[]>
    | Promise<Nullable<Nullable<Organization>[]>>;
  grants(): Nullable<Nullable<Grant>[]> | Promise<Nullable<Nullable<Grant>[]>>;
  applicants():
    | Nullable<Nullable<Applicant>[]>
    | Promise<Nullable<Nullable<Applicant>[]>>;
  matches(): Nullable<Nullable<Match>[]> | Promise<Nullable<Nullable<Match>[]>>;
  feedback():
    | Nullable<Nullable<Feedback>[]>
    | Promise<Nullable<Nullable<Feedback>[]>>;
}

export interface IMutation {
  submitFeedback(
    interest?: Nullable<boolean>,
    grant?: Nullable<string>,
    applicant?: Nullable<string>,
    feedbackText?: Nullable<string>,
  ): Nullable<Feedback> | Promise<Nullable<Feedback>>;
}

export interface Grant {
  id: string;
  organization?: Nullable<Organization>;
  name?: Nullable<string>;
  avgAmount?: Nullable<number>;
  deadLine?: Nullable<Date>;
  applicationType?: Nullable<ApplicationType>;
  location?: Nullable<Location>;
  tags?: Nullable<Nullable<Tag>[]>;
}

export interface Applicant {
  id: string;
  name?: Nullable<string>;
}

export interface Organization {
  id: string;
  name?: Nullable<string>;
}

export interface Location {
  id: string;
  town?: Nullable<string>;
  state?: Nullable<string>;
  country?: Nullable<string>;
}

export interface Feedback {
  id: string;
  applicant?: Nullable<Applicant>;
  grant?: Nullable<Grant>;
  feedbackText?: Nullable<string>;
}

export interface Match {
  id: string;
  applicant?: Nullable<Applicant>;
  grant?: Nullable<Grant>;
  matchDate?: Nullable<Date>;
  status?: Nullable<ApplicationStatus>;
  interest?: Nullable<boolean>;
}

type Nullable<T> = T | null;
