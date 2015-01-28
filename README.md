# esbootstrap

esboostrap will bootstrap, map and load fixtures for an elasticsearch index.

## Installation

Add esboostrap in devDependencies 

```bash
npm install esbootstrap --save-dev
```

## Usage

```javascript
var esbootstrap = require('esbootstrap');
var fixtures = require('./path/tofixtures.json');
var options = {
    elasticsearch: {
        host: ...
        log: ...
        requestTimeout: ...
        keepAlive: ..
    },
    indexName:...,
    createRequestBody: {...}, // @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-create
    mappingRequestBody: {...}, // @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-putmapping
    fixtures: fixtures // @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk 
};

esbootstrap.bootstrap(options, function() {
    //....
});
```

Or if you already have an elasticsearch instance up
and running and want to only load some data:

```javascript
var fixtures = require('./path/tofixtures.json');
var options = {
    elasticsearch: {
        host: ...
        log: ...
        requestTimeout: ...
        keepAlive: ..
    },
    fixtures: fixtures // @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk 
};

esbootstrap.loadFixtures(options, function() {
    //....
});
```

## Tests

![b****-please](http://galeri2.uludagsozluk.com/342/bitch-please_459292.jpg)
