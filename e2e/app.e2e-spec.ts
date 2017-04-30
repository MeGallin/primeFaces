import { PrimeFacesPage } from './app.po';

describe('prime-faces App', () => {
  let page: PrimeFacesPage;

  beforeEach(() => {
    page = new PrimeFacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
