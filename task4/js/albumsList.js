'use strict'

function AlbumsList(artist) {
  Loader.apply(this, arguments);
  const METHOD = 'artist.getTopAlbums';
  const PARAM_ARTIST = 'artist';
  const FULL_TEXT_QUERY = this.__proto__.START_URL
    + this.__proto__.returnMethodQuery(METHOD, PARAM_ARTIST, artist)
    + this.__proto__.returnMethodParameter(PARAM_ARTIST, artist)
    + this.__proto__.QUERY_POSTFIX;
  alert(FULL_TEXT_QUERY);
  this.__proto__.load(FULL_TEXT_QUERY)
  .then(function(response) {
    alert(response.responseText);
  });
  return;
}

AlbumsList.prototype = Object.create(Loader.prototype);
AlbumsList.prototype.constructor = AlbumsList;
