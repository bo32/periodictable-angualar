import { PeriodicTableUiPage } from './app.po';

describe('periodic-table-ui App', function() {
  let page: PeriodicTableUiPage;

  beforeEach(() => {
    page = new PeriodicTableUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
