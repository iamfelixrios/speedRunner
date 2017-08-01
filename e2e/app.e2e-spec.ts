import { SpeedRunnerPage } from './app.po';

describe('speed-runner App', () => {
  let page: SpeedRunnerPage;

  beforeEach(() => {
    page = new SpeedRunnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
