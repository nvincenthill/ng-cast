angular.module('video-player')
  .service('youTube', ['$http', function($http) {
    return {
      search: function(query, callback) {
        $http({
          method: 'GET',
          url: '/someUrl',
          params: {
            parts: 'sni'
          }
          
        }).then(function successCallback(response) {
          callback();
        }, function errorCallback(response) {
          console.log('failed to fetch');
        });
      }
    };
  }]);
