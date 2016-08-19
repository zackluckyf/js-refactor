var totalPrototype = 2;
var totalThisKeyword = 3;
var totalFunctions = 2;
var totalClosures = 2;
var totalScope = 2;
var completePercent = 0;
var completedScope;
var completedPrototype;
var completedThisKeyword;
var completedFunctions;
var completedClosures;
var myFirebaseRef = myFirebaseRef || {};
myFirebaseRef.child = function () {
  return {
    update: function () {}
  };
};

function calcTotalPercent () {
  // var completedPrototype = myData.javascript.prototype.completed
  var completedTotal = completedPrototype + completedThisKeyword + completedClosures + completedFunctions + completedScope;
  var totalItems = totalPrototype + totalThisKeyword + totalFunctions + totalClosures + totalScope;
  completePercent = completedTotal / totalItems * 100;
  completePercent = completePercent.toFixed(1);
  $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
}

function setProgressBar (indicator, percent) {
  $('.' + indicator + '-progress').css('width', percent + '%').text(percent + '%');
}

function setSectionProgress (section, items) {
  completed = myData.javascript[section].completed;
  var percentage = ((completed / items) * 100);
  setProgressBar(section, percentage);
  calcTotalPercent();
  return completed;
}
function updateFirebase (section, id) {
  myFirebaseRef.child('/javascript/' + section + '/' + id).update({ 'completed': this.checked });
  myFirebaseRef.child('/javascript/' + section + '/').update({ 'completed': completedPrototype });
}
function triggerChange (section, id, counter) {
  if (this.checked) {
    counter++;
  }else {
    counter--;
  }
  updateFirebase(section, id);

  setSectionProgress(section);
}
$(document).ready(function () {

  // get completedPrototype from Firebase object

  setTimeout(function () { completedScope = setSectionProgress('scope'); }, 4100);
  setTimeout(function () { completedClosures = setSectionProgress('closures'); }, 4200);
  setTimeout(function () { completedPrototype = setSectionProgress('prototype'); }, 4000);
  setTimeout(function () { completedThisKeyword = setSectionProgress('thiskeyword'); }, 4100);
  setTimeout(function () { completedFunctions = setSectionProgress('functions'); }, 4000);
  setTimeout(function () { displayLogic(); }, 0);

  $('.prototype li:nth-child(1) input').change(function () {
    triggerChange('prototype', 'prototype1', completedPrototype);
  });

  $('.prototype li:nth-child(2) input').change(function () {
    triggerChange('prototype', 'prototype2', completedPrototype);
  });

  // this keyword

  // get completedThisKeyword from Firebase object
  $('.thiskeyword li:nth-child(1) input').change(function () {
    triggerChange('thiskeyword', 'thiskeyword1', completedThisKeyword);
  });

  $('.thiskeyword li:nth-child(2) input').change(function () {
    triggerChange('thiskeyword', 'thiskeyword2', completedThisKeyword);
  });

  $('.thiskeyword li:nth-child(3) input').change(function () {
    triggerChange('thiskeyword', 'thiskeyword3', completedThisKeyword);
  });

  // Functions

  // get completedFunctions from Firebase object

  $('.functions li:nth-child(1) input').change(function () {
    triggerChange('functions', 'functions1', completedFunctions);
  });

  $('.functions li:nth-child(2) input').change(function () {
    triggerChange('functions', 'functions2', completedFunctions);
  });

  // closures

  $('.closures li:nth-child(1) input').change(function () {
    triggerChange('closures', 'closures1', completedClosures);
  });

  $('.closures li:nth-child(2) input').change(function () {
    triggerChange('closures', 'closures2', completedClosures);
  });

  // scope

  $('.scope li:nth-child(1) input').change(function () {
    triggerChange('scope', 'scope1', completedScope);
  });

  $('.scope li:nth-child(2) input').change(function () {
    triggerChange('scope', 'scope2', completedScope);
  });

  // console.log(myData.javascript.articles.article1.title)

  function displayLogic () {
    $('.user-name').append(userName);

    // $( ".articles li:nth-child(1) label").children().text("")
    $('.prototype li:nth-child(1)').append(myData.javascript.prototype.prototype1.title);

    $('.prototype li:nth-child(2)').append(myData.javascript.prototype.prototype2.title);

    if (myData.javascript.prototype.prototype1.completed === true) { // Display check marks if item is completed
      $('.prototype li:nth-child(1) input').attr('checked', 'checked');
    }

    if (myData.javascript.prototype.prototype2.completed === true) {
      $('.prototype li:nth-child(2) input').attr('checked', 'checked');
    }

    $('.functions li:nth-child(1)').append(myData.javascript.functions.functions1.title);

    $('.functions li:nth-child(2)').append(myData.javascript.functions.functions2.title);

    if (myData.javascript.functions.functions1.completed === true) {
      $('.functions li:nth-child(1) input').attr('checked', 'checked');
    }

    if (myData.javascript.functions.functions2.completed === true) {
      $('.functions li:nth-child(2) input').attr('checked', 'checked');
    }

    $('.closures li:nth-child(1)').append(myData.javascript.closures.closures1.title);

    $('.closures li:nth-child(2)').append(myData.javascript.closures.closures2.title);

    if (myData.javascript.closures.closures1.completed === true) {
      $('.closures li:nth-child(1) input').attr('checked', 'checked');
    }

    if (myData.javascript.closures.closures2.completed === true) {
      $('.closures li:nth-child(2) input').attr('checked', 'checked');
    }

    $('.thiskeyword li:nth-child(1)').append(myData.javascript.thiskeyword.thiskeyword1.title);

    $('.thiskeyword li:nth-child(2)').append(myData.javascript.thiskeyword.thiskeyword2.title);

    $('.thiskeyword li:nth-child(3)').append(myData.javascript.thiskeyword.thiskeyword3.title);

    if (myData.javascript.thiskeyword.thiskeyword1.completed === true) {
      $('.thiskeyword li:nth-child(1) input').attr('checked', 'checked');
    }

    if (myData.javascript.thiskeyword.thiskeyword2.completed === true) {
      $('.thiskeyword li:nth-child(2) input').attr('checked', 'checked');
    }

    if (myData.javascript.thiskeyword.thiskeyword3.completed === true) {
      $('.thiskeyword li:nth-child(3) input').attr('checked', 'checked');
    }

    $('.scope li:nth-child(1)').append(myData.javascript.scope.scope1.title);

    $('.scope li:nth-child(2)').append(myData.javascript.scope.scope2.title);

    if (myData.javascript.scope.scope1.completed === true) {
      $('.scope li:nth-child(1) input').attr('checked', 'checked');
    }

    if (myData.javascript.scope.scope2.completed === true) {
      $('.scope li:nth-child(2) input').attr('checked', 'checked');
    }
  }
});
