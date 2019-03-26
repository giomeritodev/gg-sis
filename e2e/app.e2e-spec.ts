import { GgSisPage } from './app.po';

describe('gg-sis App', function() {
  let page: GgSisPage;

  beforeEach(() => {
    page = new GgSisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
