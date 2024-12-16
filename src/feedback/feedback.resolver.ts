import { Args, Mutation, Query, Resolver, ID } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { Feedback } from './schemas/feedback.schema';

@Resolver('Feedback')
export class FeedbackResolver {
  constructor(private feedbackService: FeedbackService) {}

  @Query()
  async feedback() {
    return this.feedbackService.findAll();
  }

  @Mutation(() => Feedback)
  async submitFeedback(
    @Args('interest') interest: boolean,
    @Args('grant', { type: () => ID }) grant: string,
    @Args('feedbackText') feedbackText: string,
    @Args('applicant', { type: () => ID }) applicant: string,
  ) {
    return this.feedbackService.submitFeedback({
      grant,
      feedbackText,
      applicant,
      dateTime: new Date().toISOString(),
      interest,
    });
  }
}
