import { SiteInstPage } from './app.po';

describe('site-inst App', () => {
  let page: SiteInstPage;

  beforeEach(() => {
    page = new SiteInstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
