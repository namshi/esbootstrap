var elasticsearch = require('elasticsearch');

module.exports = {

  /**
   * Delete. create and map an index on an elasticsearch instance.
   * If fixtures are provided, they will be loaded.
   *
   * @param options Object containing the configuration for elasticsearch and fixtures
   *  options: {
   *    elasticsearch: {
   *      host: ...
   *      log: ...
   *      requestTimeout: ...
   *      keepAlive: ..
   *    },
   *    indexName:...,
   *
   *    createRequestBody:{
   *      @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-create
   *    },
   *
   *    mappingRequestBody: {
   *      @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-putmapping
   *    },
   *
   *    fixtures: {
   *      @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk
   *    }
   *  }
   *
   * @param callback to be call at the end of all operations. The callback will be called after 1.5 seconds, to let elasticseach index the data
   */
  bootstrap: function(options, callback) {

    var self = this;

    var client = new elasticsearch.Client({
      host:           options.elasticsearch.host,
      log:            options.elasticsearch.log || 'debug',
      requestTimeout: options.elasticsearch.requestTimeout || 60000,
      keepAlive:      options.elasticsearch.keepAlive || false
    });

    (function() {
      client.indices['delete']({index: options.indexName})['finally'](function(){
        client.indices['create'](options.createRequestBody)
          .then(function(){
            client.indices.putMapping(options.mappingRequestBody)
              .then(function(){
                if (options.fixtures) {
                  self.loadFixtures(options, callback);
                } else {
                  setTimeout(callback, 1500);
                }
              });
          })['finally'](function(){
          client.close();
        });
      })['catch'](function(error){
        console.warn('Warning:' + JSON.stringify(error));
      });
    }());
  },

  /**
   * Load fixtures into an elasticsearch instance
   *
   * @param options Object containing the configuration for elasticsearch and fixtures
   *  options: {
   *    elasticsearch: {
   *      host: ...
   *      log: ...
   *      requestTimeout: ...
   *      keepAlive: ..
   *    },
   *
   *    fixtures: {
   *      @see http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk
   *    }
   *  }
   *
   * @param callback to be call after loading fixtures. The callback will be called after 1.5 seconds, to let elasticseach index the data
   */
  loadFixtures: function(options, callback) {
    var client = new elasticsearch.Client({
      host:           options.elasticsearch.host,
      log:            options.elasticsearch.log || 'debug',
      requestTimeout: options.elasticsearch.requestTimeout || 60000,
      keepAlive:      options.elasticsearch.keepAlive || false
    });

    (function() {
      client.bulk({body: options.fixtures, refresh: false})['finally'](function(){
        client.close();
        setTimeout(callback, 1500);
      });
    }());
  }
};
