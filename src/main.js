var totalPrototype = 2;
var completePercent = 0;
var totalThisKeyword = 3;
var totalFunctions = 2;
var totalClosures = 2;
var totalScope = 2;

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
  $('.' + section + '-progress').css('width', ((completed / items) * 100) + '%');
  calcTotalPercent();
  return completed;
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
    if (this.checked) {
      myFirebaseRef.child('/javascript/prototype/prototype1').update({ 'completed': true });
      completedPrototype++;
      myFirebaseRef.child('/javascript/prototype/').update({ 'completed': completedPrototype });
      $('.prototype-progress').css('width', (completedPrototype / totalPrototype * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/prototype/prototype1').update({ 'completed': false });
      completedPrototype--;
      myFirebaseRef.child('/javascript/prototype/').update({ 'completed': completedPrototype });
      $('.prototype-progress').css('width', (completedPrototype / totalPrototype * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  $('.prototype li:nth-child(2) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/prototype/prototype2').update({ 'completed': true });
      completedPrototype++;
      myFirebaseRef.child('/javascript/prototype/').update({ 'completed': completedPrototype });
      $('.prototype-progress').css('width', (completedPrototype / totalPrototype * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/prototype/prototype2').update({ 'completed': false });
      completedPrototype--;
      myFirebaseRef.child('/javascript/prototype/').update({ 'completed': completedPrototype });
      $('.prototype-progress').css('width', (completedPrototype / totalPrototype * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  // this keyword

  // get completedThisKeyword from Firebase object

  $('.thiskeyword li:nth-child(1) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/thiskeyword/thiskeyword1').update({ 'completed': true });
      completedThisKeyword++;
      myFirebaseRef.child('/javascript/thiskeyword/').update({ 'completed': completedThisKeyword });
      $('.thiskeyword-progress').css('width', (completedThisKeyword / totalThisKeyword * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/thiskeyword/thiskeyword1').update({ 'completed': false });
      completedThisKeyword--;
      myFirebaseRef.child('/javascript/thiskeyword/').update({ 'completed': completedThisKeyword });
      $('.thiskeyword-progress').css('width', (completedThisKeyword / totalThisKeyword * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  $('.thiskeyword li:nth-child(2) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/thiskeyword/thiskeyword2').update({ 'completed': true });
      completedThisKeyword++;
      myFirebaseRef.child('/javascript/thiskeyword/').update({ 'completed': completedThisKeyword });
      $('.thiskeyword-progress').css('width', (completedThisKeyword / totalThisKeyword * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/thiskeyword/thiskeyword2').update({ 'completed': false });
      completedThisKeyword--;
      myFirebaseRef.child('/javascript/thiskeyword/').update({ 'completed': completedThisKeyword });
      $('.thiskeyword-progress').css('width', (completedThisKeyword / totalThisKeyword * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  $('.thiskeyword li:nth-child(3) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/thiskeyword/thiskeyword3').update({ 'completed': true });
      completedThisKeyword++;
      myFirebaseRef.child('/javascript/thiskeyword/').update({ 'completed': completedThisKeyword });
      $('.thiskeyword-progress').css('width', (completedThisKeyword / totalThisKeyword * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/thiskeyword/thiskeyword3').update({ 'completed': false });
      completedThisKeyword--;
      myFirebaseRef.child('/javascript/thiskeyword/').update({ 'completed': completedThisKeyword });
      $('.thiskeyword-progress').css('width', (completedThisKeyword / totalThisKeyword * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  // Functions

  // get completedFunctions from Firebase object

  $('.functions li:nth-child(1) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/functions/functions1').update({ 'completed': true });
      completedFunctions++;
      myFirebaseRef.child('/javascript/functions/').update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions / totalFunctions * 100);
      $('.functions-progress').css('width', (completedFunctions / totalFunctions * 100) + '%');
      calcTotalPercent();
      console.log(completePercent);
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/functions/functions1').update({ 'completed': false });
      completedFunctions--;
      myFirebaseRef.child('/javascript/functions/').update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions / totalFunctions * 100);
      $('.functions-progress').css('width', (completedFunctions / totalFunctions * 100) + '%');
      calcTotalPercent();
      console.log(completePercent);
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  $('.functions li:nth-child(2) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/functions/functions2').update({ 'completed': true });
      completedFunctions++;
      myFirebaseRef.child('/javascript/functions/').update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions / totalFunctions * 100);
      $('.functions-progress').css('width', (completedFunctions / totalFunctions * 100) + '%');
      calcTotalPercent();
      console.log(completePercent);
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/functions/functions2').update({ 'completed': false });
      completedFunctions--;
      myFirebaseRef.child('/javascript/functions/').update({ 'completed': completedFunctions });
      console.log(myData.javascript.functions.completed);
      console.log(completedFunctions / totalFunctions * 100);
      $('.functions-progress').css('width', (completedFunctions / totalFunctions * 100) + '%');
      calcTotalPercent();
      console.log(completePercent);
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  // closures

  $('.closures li:nth-child(1) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/closures/closures1').update({ 'completed': true });
      completedClosures++;
      myFirebaseRef.child('/javascript/closures/').update({ 'completed': completedClosures });
      $('.closures-progress').css('width', (completedClosures / totalClosures * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/closures/closures1').update({ 'completed': false });
      completedClosures--;
      myFirebaseRef.child('/javascript/closures/').update({ 'completed': completedClosures });
      $('.closures-progress').css('width', (completedClosures / totalClosures * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  $('.closures li:nth-child(2) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/closures/closures2').update({ 'completed': true });
      completedClosures++;
      myFirebaseRef.child('/javascript/closures/').update({ 'completed': completedClosures });
      $('.closures-progress').css('width', (completedClosures / totalClosures * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/closures/closures2').update({ 'completed': false });
      completedClosures--;
      myFirebaseRef.child('/javascript/closures/').update({ 'completed': completedClosures });
      $('.closures-progress').css('width', (completedClosures / totalClosures * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  // scope

  $('.scope li:nth-child(1) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/scope/scope1').update({ 'completed': true });
      completedScope++;
      myFirebaseRef.child('/javascript/scope/').update({ 'completed': completedScope });
      $('.scope-progress').css('width', (completedScope / totalScope * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/scope/scope1').update({ 'completed': false });
      completedScope--;
      myFirebaseRef.child('/javascript/scope/').update({ 'completed': completedScope });
      $('.scope-progress').css('width', (completedScope / totalScope * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  $('.scope li:nth-child(2) input').change(function () {
    if (this.checked) {
      myFirebaseRef.child('/javascript/scope/scope2').update({ 'completed': true });
      completedScope++;
      myFirebaseRef.child('/javascript/scope/').update({ 'completed': completedScope });
      $('.scope-progress').css('width', (completedScope / totalScope * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }else {
      myFirebaseRef.child('/javascript/scope/scope2').update({ 'completed': false });
      completedScope--;
      myFirebaseRef.child('/javascript/scope/').update({ 'completed': completedScope });
      $('.scope-progress').css('width', (completedScope / totalScope * 100) + '%');
      calcTotalPercent();
      $('.total-progress').css('width', completePercent + '%').text(completePercent + '%');
    }
  });

  // console.log(myData.javascript.articles.article1.title)

  function displayLogic () {
    $('.user-name').append(userName);

    // $( ".articles li:nth-child(1) label").children().text("")
    $('.prototype li:nth-child(1)').append(myData.javascript.prototype.prototype1.title);

    $('.prototype li:nth-child(2)').append(myData.javascript.prototype.prototype2.title);

    if (myData.javascript.prototype.prototype1.completed == true) { // Display check marks if item is completed
      $('.prototype li:nth-child(1) input').attr('checked', 'checked');
    }

    if (myData.javascript.prototype.prototype2.completed == true) {
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
