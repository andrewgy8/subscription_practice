import { SubscriptionPracticePage } from './app.po';

describe('subscription-practice App', function() {
  let page: SubscriptionPracticePage;

  beforeEach(() => {
    page = new SubscriptionPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
