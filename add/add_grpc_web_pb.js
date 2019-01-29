/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./add_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AddServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AddServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.AddServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.AddServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddRequest,
 *   !proto.AddResponse>}
 */
const methodInfo_AddService_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AddResponse,
  /** @param {!proto.AddRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddResponse.deserializeBinary
);


/**
 * @param {!proto.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AddResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AddServiceClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AddService/Add',
      request,
      metadata || {},
      methodInfo_AddService_Add,
      callback);
};


/**
 * @param {!proto.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddResponse>}
 *     The XHR Node Readable Stream
 */
proto.AddServicePromiseClient.prototype.add =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.add(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;

