'use strict'

function ArtistSearch(artist) {
  Loader.apply(this, arguments);
  const METHOD = 'artist.search';
  const PARAM_ARTIST = 'artist';
  const FULL_TEXT_QUERY = this.__proto__.START_URL
    + this.__proto__.returnMethodQuery(METHOD)
    + this.__proto__.returnMethodParameter(PARAM_ARTIST, artist)
    + this.__proto__.QUERY_POSTFIX;
  alert(FULL_TEXT_QUERY);
  this.__proto__.load(FULL_TEXT_QUERY)
  .then(function(response) {
    alert(response.responseText);
  });
  return;
}

ArtistSearch.prototype = Object.create(Loader.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;
