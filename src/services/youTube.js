angular.module('video-player')
  .service('youTube', ['$http', function($http) {
    return {
      search: function(query, callback) {
        let cb = callback;
        $http({
          method: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/search?',
          dataType: 'jsonp',
          params: {
            q: query,
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: window.YOUTUBE_API_KEY,
            videoEmbeddable: true
          }
        }).then((response) => {
          cb(response.data);
        },(response) => {
          console.log('failed to fetch');
        });
      }
    };
  }]);
