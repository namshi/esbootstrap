esbootstrap
===========

esboostrap will bootstrap, map and load fixtures for an elasticsearch index.


Install
-------

Add esboostrap in devDependencies 


    "devDependencies": {
        ...
        "esbootstrap": "https://github.com/namshi/esbootstrap"
    },

and run 

    npm intall 
    

Usage
-----


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

Or if you already have an elasticsearch instance up and running and want to only load some data

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
