'use strict'

function Loader() {}

const PROTOTYPE = Loader.prototype;

PROTOTYPE.API_KEY =    '172bb22b141cfe2ea44e42782f48d314';
PROTOTYPE.SECRET_KEY = '7e91787a062e8ce98e8ec5bf704e9538';
PROTOTYPE.START_URL =  'http://ws.audioscrobbler.com/2.0/';
PROTOTYPE.FORMAT =     'json';

PROTOTYPE.QUESTION_MARK =  '?';
PROTOTYPE.AMPERSAND_MARK = '&';
PROTOTYPE.IS_MARK =        '=';

PROTOTYPE.METHOD_PARAM = PROTOTYPE.QUESTION_MARK +  'method' + PROTOTYPE.IS_MARK;
PROTOTYPE.ALBUM_PARAM =  PROTOTYPE.AMPERSAND_MARK + 'album' +  PROTOTYPE.IS_MARK;
PROTOTYPE.ARTIST_PARAM = PROTOTYPE.AMPERSAND_MARK + 'artist' + PROTOTYPE.IS_MARK;

PROTOTYPE.FULL_API_KEY_PARAM = PROTOTYPE.AMPERSAND_MARK + 'api_key' + PROTOTYPE.IS_MARK + PROTOTYPE.API_KEY;
PROTOTYPE.FULL_FORMAT_PARAM =  PROTOTYPE.AMPERSAND_MARK + 'format' +  PROTOTYPE.IS_MARK + PROTOTYPE.FORMAT;
PROTOTYPE.QUERY_POSTFIX =      PROTOTYPE.FULL_API_KEY_PARAM + PROTOTYPE.FULL_FORMAT_PARAM;

PROTOTYPE.returnMethodQuery = function (method) {
  return PROTOTYPE.METHOD_PARAM + method;
};

PROTOTYPE.returnMethodParameter = function (paramName, value) {
  return PROTOTYPE.AMPERSAND_MARK + paramName + PROTOTYPE.IS_MARK + value;
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
