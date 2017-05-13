'use strict'

function ArtistsList() {
  Loader.apply(this, arguments);
  const METHOD = 'chart.getTopArtists';
  const FULL_TEXT_QUERY = this.__proto__.START_URL
    + this.__proto__.returnMethodQuery(METHOD)
    + this.__proto__.QUERY_POSTFIX;
  alert(FULL_TEXT_QUERY);
  this.__proto__.load(FULL_TEXT_QUERY)
  .then(function(response) {
    alert(response.responseText);
  });
  return;
}

ArtistsList.prototype = Object.create(Loader.prototype);
ArtistsList.prototype.constructor = ArtistsList;
