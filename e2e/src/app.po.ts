import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getParcelForm() {
    return element(by.tagName('app-parcel-form'));
  }
}
