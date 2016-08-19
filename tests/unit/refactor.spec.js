describe('Refactor', function () {
  beforeEach(function () {
    // $('body').append($('<div></div>')).addClass('total-progress')
    // $('body').append('<div></div>').addClass('prototype-progress')
    // affix('.learn-query-testing #toddler .hidden.toy+h1[class="title"]+span[class="subtitle"]+span[class="subtitle"]+input[name="toyName"][value="cuddle bunny"]+input[class="creature"][value="unicorn"]+.hidden+.infinum[value="awesome cool"]')
    affix('.total-progress');
    affix('.prototype-progress');
    affix('.thiskeyword-progress');
    affix('.prototype li:nth-child(1) input');
    affix('.prototype input');
  });

  describe('calcTotalPercent function', function () {
    it('should calculate 100% when all sub tasks are completed', function () {
      completedPrototype = 2;
      completedThisKeyword = 3;
      completedClosures = 2;
      completedFunctions = 2;
      completedScope = 2;
      calcTotalPercent();
      expect(completePercent).toEqual('100.0');
    });
  });
  // skipped this test becuase it refers to firebase obj
  describe('getCompleted** function', function () {
    function setCompleteValue (type, value) {
      myData.javascript[type].completed = value;
    }
    beforeEach(function () {
      // calcTotalPercent = jasmine.createSpy('totalPercentSpy', calcTotalPercent).and.callThrough()
    });
    it('should set completed prototype when getCompletedPrototype is called ', function () {
      setCompleteValue('prototype', 3);
      var completed = setSectionProgress('prototype');
      expect(completed).toEqual(3);
    });
    it('should show completed thiskeyword when getCompletedThisKeyword is called ', function () {
      setCompleteValue('thiskeyword', 2);
      var completed = setSectionProgress('thiskeyword');
      expect(completed).toEqual(2);
    });
    it('should set completed prototype when getCompletedPrototype is called ', function () {
      setCompleteValue('prototype', 3);
      setSectionProgress('prototype', 3);
      expect($('div.prototype-progress')[0].style.width).toEqual('100%');
    });
    it('should set completed prototype when getCompletedThisKeyword is called ', function () {
      setCompleteValue('thiskeyword', 2);
      setSectionProgress('thiskeyword', 4);
      expect($('div.thiskeyword-progress')[0].style.width).toEqual('50%');
    });
    it('should show completed completed function when getCompletedFunctions is called ', function () {
      setCompleteValue('functions', 3);
      var completed = setSectionProgress('functions', 3);
      expect(completed).toEqual(3);
    });
    it('should show completed closures  when getCompletedClosures is called ', function () {
      setCompleteValue('closures', 3);
      var completed = setSectionProgress('closures');
      expect(completed).toEqual(3);
    });
    it('should set completedScope when setSectionProgress is called with "scope"', function () {
      setCompleteValue('scope', 3);
      var completed = setSectionProgress('scope');
      expect(completed).toEqual(3);
    });
  });
  describe('Change events', function () {
    it('should be changed', function () {
      var before = completedPrototype;
      $('.prototype input').trigger('change');
      expect(completedPrototype).toEqual(before);
    });
  });
  describe('Update Firebase', function () {
    it('should call myFirebase function', function () {
      spyOn(myFirebaseRef, 'child').and.callThrough();
      var child = myFirebaseRef.child;
      updateFirebase('prototype', 'prototype1');
      expect(myFirebaseRef.child).toHaveBeenCalledWith('/javascript/prototype/prototype1');
      expect(myFirebaseRef.child).toHaveBeenCalledWith('/javascript/prototype/');
    });
  });
  xdescribe('description', function () {
    it('description', function () {
      expect(target).toEqual(value);
    });
  });
});
