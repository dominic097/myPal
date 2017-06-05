import { MyPalPage } from './app.po';

describe('my-pal App', () => {
  let page: MyPalPage;

  beforeEach(() => {
    page = new MyPalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
