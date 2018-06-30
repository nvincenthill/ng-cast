angular.module('video-player')
  .component('search', {
    bindings: {
      service: '<',
      result: '<',
      handle: '<'
    },
    controller: function() {
      this.result = function() {
        
      };
      // this.search = youTube.search()
    },
    templateUrl: 'src/templates/search.html',
  });
