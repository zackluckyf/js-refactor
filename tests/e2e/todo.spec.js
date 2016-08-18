describe('Protractor Demo App', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
  });
  it('should have a title', function () {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('JavaScript Training Tracker');
  });
  it('should recive title from prototype1', function () {
    browser.get('http://localhost:3000/');
    expect(browser.findElement(by.css('.prototype li:nth-child(1)')).getText()).toEqual("A Plain English Guide to JavaScript Prototypes - Sebastian's Blog");
  });
// it('should be unchecked ', function () {
// expect(browser.findElement(by.css('.protoype check'))).toEqual(value)
// })
});
