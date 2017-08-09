import { SekolahPage } from './app.po';

describe('sekolah App', () => {
  let page: SekolahPage;

  beforeEach(() => {
    page = new SekolahPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
