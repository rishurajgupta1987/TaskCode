import { TestcodePage } from './app.po';

describe('testcode App', () => {
  let page: TestcodePage;

  beforeEach(() => {
    page = new TestcodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
