import { RxjsAppPage } from './app.po';

describe('rxjs-app App', function() {
  let page: RxjsAppPage;

  beforeEach(() => {
    page = new RxjsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
