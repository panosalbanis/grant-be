export class CreateFeedbackDto {
  readonly grant: string;
  readonly feedbackText: string;
  readonly applicant: string;
  readonly dateTime: string;
  readonly interest: boolean;
}
