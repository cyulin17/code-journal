/* global data */
/* exported data */
var $input = document.querySelector('#photoUrl');
var $img = document.querySelector('img');
var $entryForm = document.querySelector('#entry-form');
var $entrylist = document.querySelector('.entries-lists');
var $newButton = document.querySelector('.new-button');
var $newEntry = document.querySelector('[data-veiw="entry-form"]');
var $viewEntry = document.querySelector('[data-veiw="entries"]');
var $noEntry = document.querySelector('.no-entry-text');

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
  entryId.EntryId = data.nextEntryId;

  nextEntryId++;

  data.entries.unshift(entryId);
  var newEntry = renderEntry(entryId);

  var $ul = document.querySelector('ul');
  $entrylist.prepend(newEntry);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $entryForm.reset();

  $newEntry.className = "hidden";
  $noEntry.className = "hidden";
  $viewEntry.className = '';
  data.view = "entries";

});

// user can view their entry

function renderEntry(entry) {

  var $entrieslists = document.createElement('li');

  var $row = document.createElement('div');
  $row.className = 'row';
  $entrieslists.appendChild($row);
  var $columnHalf = document.createElement('div');
  $columnHalf.className = 'column-half';
  $row.appendChild($columnHalf);

  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photoUrl);
  $img.className = 'entries-img';
  $columnHalf.appendChild($img);

  var $entriesText = document.createElement('div');
  $entriesText.className = "column-half entries-text";
  $row.appendChild($entriesText);

  var $title = document.createElement('h2');
  $title.textContent = entry.title;
  $entriesText.appendChild($title);

  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $entriesText.appendChild($notes);

  return $entrieslists;

}

document.addEventListener('DOMContentLoaded', function(event) {

  for (var i = 0; i < data.entries.length; i++) {
    var $entrydata = renderEntry(data.entries[i]);
    $entrylist.appendChild($entrydata);
  }

  if (data.view === "entries") {
    $newEntry.className = "hidden";
  } else if (data.view === "entry-form") {
    $noEntry.className = "hidden";
    $viewEntry.className = "hidden";
  }

  if (data.entries.length === "") {
    $noEntry.className = "";
  } else {
    $noEntry.className = "hidden";
  }

})

$newButton.addEventListener('click', function (event) {
  $viewEntry.className = "hidden";
  $newEntry.className = "";
  data.view = 'entry-form';
})
