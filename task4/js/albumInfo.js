'use strict'

function AlbumInfo(artist, album) {
  Loader.apply(this, arguments);
  const METHOD = 'album.getInfo';
  const PARAM_ARTIST = 'artist';
  const PARAM_ALBUM = 'album';
  const FULL_TEXT_QUERY = this.__proto__.START_URL
    + this.__proto__.returnMethodQuery(METHOD)
    + this.__proto__.returnMethodParameter(PARAM_ARTIST, artist)
    + this.__proto__.returnMethodParameter(PARAM_ALBUM, album)
    + this.__proto__.QUERY_POSTFIX;
  alert(FULL_TEXT_QUERY);
  this.__proto__.load(FULL_TEXT_QUERY)
  .then(function(response) {
    alert(response.responseText);
  });
  return;
}

AlbumInfo.prototype = Object.create(Loader.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;
