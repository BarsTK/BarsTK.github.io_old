'use strict'

function Loader() {

const PROTOTYPE = Loader.prototype;

PROTOTYPE.API_KEY = '172bb22b141cfe2ea44e42782f48d314';
PROTOTYPE.SECRET_KEY = '7e91787a062e8ce98e8ec5bf704e9538';
PROTOTYPE.START_URL = 'http://ws.audioscrobbler.com/2.0/';
PROTOTYPE.FORMAT = 'json';

PROTOTYPE.METHOD_PARAM = '?method=';
PROTOTYPE.ALBUM_PARAM = '&album=';
PROTOTYPE.ARTIST_PARAM = '&artist=';
PROTOTYPE.PAGE_PARAM = '&page=';

PROTOTYPE.FULL_API_KEY_PARAM = '&api_key=' + PROTOTYPE.API_KEY;
PROTOTYPE.FULL_FORMAT_PARAM = '&format=' + PROTOTYPE.FORMAT;
PROTOTYPE.QUERY_POSTFIX = PROTOTYPE.FULL_API_KEY_PARAM + PROTOTYPE.FULL_FORMAT_PARAM;

PROTOTYPE.returnMethodQuery = function (method) {
  return PROTOTYPE.METHOD_PARAM + method;
};

PROTOTYPE.returnArtistParameter = function (value) {
  return PROTOTYPE.ARTIST_PARAM + value;
};

PROTOTYPE.returnAlbumParameter = function (value) {
  return PROTOTYPE.ALBUM_PARAM + value;
};

PROTOTYPE.inherits = function (child) {
  child.prototype = Object.create(PROTOTYPE);
  child.prototype.constructor = child;
};

PROTOTYPE.load = function (queryParams) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', queryParams, true);
    xhr.setRequestHeader("Cache-Control", 'no-cache');

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return;
      };
      if (xhr.status !== 200) {
        reject(this);
      };
      resolve(this);
    };
    xhr.send();
  });
};
}

function ArtistsList() {
  Loader.apply(this, arguments);
  const method = 'chart.getTopArtists';
  this.load = function () {
    const fullTextQuery = this.__proto__.START_URL
      + this.__proto__.returnMethodQuery(method)
      + this.__proto__.QUERY_POSTFIX;
    alert(fullTextQuery);
    this.__proto__.load(fullTextQuery)
    .then(function(response) {
      alert(response.responseText);
    });
    return;
  };
}

ArtistsList.prototype = Object.create(Loader.prototype);
ArtistsList.prototype.constructor = ArtistsList;

function AlbumsList() {
  Loader.apply(this, arguments);
  const method = 'artist.getTopAlbums';
  this.load = function (artist) {
    const fullTextQuery = this.__proto__.START_URL
      + this.__proto__.returnMethodQuery(method)
      + this.__proto__.returnArtistParameter(artist)
      + this.__proto__.QUERY_POSTFIX;
    alert(fullTextQuery);
    this.__proto__.load(fullTextQuery)
    .then(function(response) {
      alert(response.responseText);
    });
    return;
  };
}

AlbumsList.prototype = Object.create(Loader.prototype);
AlbumsList.prototype.constructor = AlbumsList;

function ArtistInfo() {
  Loader.apply(this, arguments);
  const method = 'artist.getInfo';
  this.load = function (artist) {
    const fullTextQuery = this.__proto__.START_URL
      + this.__proto__.returnMethodQuery(method)
      + this.__proto__.returnArtistParameter(artist)
      + this.__proto__.QUERY_POSTFIX;
    alert(fullTextQuery);
    this.__proto__.load(fullTextQuery)
    .then(function(response) {
      alert(response.responseText);
    });
    return;
  };
}

ArtistInfo.prototype = Object.create(Loader.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

function AlbumInfo() {
  Loader.apply(this, arguments);
  const method = 'album.getInfo';
  this.load = function (artist, album) {
    const fullTextQuery = this.__proto__.START_URL
      + this.__proto__.returnMethodQuery(method)
      + this.__proto__.returnArtistParameter(artist)
      + this.__proto__.returnAlbumParameter(album)
      + this.__proto__.QUERY_POSTFIX;
    alert(fullTextQuery);
    this.__proto__.load(fullTextQuery)
    .then(function(response) {
      alert(response.responseText);
    });
    return;
  };
}

AlbumInfo.prototype = Object.create(Loader.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;

function ArtistSearch() {
  Loader.apply(this, arguments);
  const method = 'artist.search';
  this.load = function (artist) {
    const fullTextQuery = this.__proto__.START_URL
      + this.__proto__.returnMethodQuery(method)
      + this.__proto__.returnArtistParameter(artist)
      + this.__proto__.QUERY_POSTFIX;
    alert(fullTextQuery);
    this.__proto__.load(fullTextQuery)
    .then(function(response) {
      alert(response.responseText);
    });
    return;
  };
}

ArtistSearch.prototype = Object.create(Loader.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;
