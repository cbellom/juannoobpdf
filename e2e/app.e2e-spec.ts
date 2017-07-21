import { PdfAngularPage } from './app.po';

describe('pdf-angular App', () => {
  let page: PdfAngularPage;

  beforeEach(() => {
    page = new PdfAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
