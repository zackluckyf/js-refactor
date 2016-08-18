describe('Refactor', function () {
  beforeEach(function () {
    // $('body').append($('<div></div>')).addClass('total-progress')
    // $('body').append('<div></div>').addClass('prototype-progress')
    // affix('.learn-query-testing #toddler .hidden.toy+h1[class="title"]+span[class="subtitle"]+span[class="subtitle"]+input[name="toyName"][value="cuddle bunny"]+input[class="creature"][value="unicorn"]+.hidden+.infinum[value="awesome cool"]')
    affix('.total-progress');
    affix('.prototype-progress');
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
      expect($('<div class="prototype-progress" style="width: 100%;"></div>')).toHaveCss({width: '100%'});
      console.log($('div.prototype-progress')[0])
      / expect($('div.prototype-progress')[0]).toHaveCss({width: '10%'});
    // expect(($('.prototype-progress')[0]).css('width')).toEqual('')
    // expect($('.total-progress')).not.toHaveCss('{width:100px}')
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
  xdescribe('myData ', function () {
    it('should be called ', function () {
      expect(myData).toEqual([]);
    });
  });
  xdescribe('description', function () {
    it('description', function () {
      expect(target).toEqual(value);
    });
  });
});
