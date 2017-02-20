import { browser, by, element } from 'protractor';

describe('Edit', () => {

  beforeAll(() => {
    browser.get('/edit/1');
    element(by.id('loginField')).sendKeys('matt.raible+user@stormpath.com');
    element(by.id('passwordField')).sendKeys('Stormpath1');
    element(by.id('loginBtn')).click();
  });

  afterAll(() => {
    element(by.id('logout')).click();
  });

  let name = element(by.id('name'));
  let street = element(by.id('street'));
  let city = element(by.id('city'));

  it('should allow viewing a person', () => {
    //expect(element(by.css('h3')).getText()).toEqual('Peyton Manning');
    expect(name.getAttribute('value')).toEqual('Peyton Manning');
    expect(street.getAttribute('value')).toEqual('1234 Main Street');
    expect(city.getAttribute('value')).toEqual('Greenwood Village');
  });

  it('should allow updating a name', function () {
    let save = element(by.id('save'));
    name.sendKeys(' Won!');
    save.click();
    // verify one element matched this change
    let list = element.all(by.css('app-search table tbody tr'));
    expect(list.count()).toBe(1);
  });
});
