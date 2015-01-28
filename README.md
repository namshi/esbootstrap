# esbootstrap

esboostrap will bootstrap, map and load fixtures for an elasticsearch index.


## Installation

Add esboostrap in devDependencies 

```
"devDependencies": {
    ...
    "esbootstrap": ">=1.0.0"
},
```

and run 

```
npm update esbootstrap
```    

## Usage


```javascript
var esbootstrap = require('esbootstrap');
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
    fixtures: {...} // @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk 
};

esbootstrap.bootstrap(options, function() {
    //....
});
```

Or if you already have an elasticsearch instance up
and running and want to only load some data:

```javascript
var options = {
    elasticsearch: {
        host: ...
        log: ...
        requestTimeout: ...
        keepAlive: ..
    },
    fixtures: {...} // @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk 
};

esbootstrap.loadFixtures(options, function() {
    //....
});
```

## Tests

![b****-please](http://galeri2.uludagsozluk.com/342/bitch-please_459292.jpg)
