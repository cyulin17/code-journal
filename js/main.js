/* global data */
/* exported data */
var $input = document.querySelector('#photoUrl');
var $img = document.querySelector('img');
var $entryForm = document.querySelector('#entry-form');

$input.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var nextEntryId = 1;

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var entryId = {};

  entryId.title = $entryForm.elements.title.value;
  entryId.photoUrl = $entryForm.elements.photoUrl.value;
  entryId.notes = $entryForm.elements.notes.value;
  entryId.nextEntryId = nextEntryId;

  nextEntryId++;

  data.entries.unshift(entryId);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $entryForm.reset();

});
