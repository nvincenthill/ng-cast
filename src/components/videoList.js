angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<',
      selectVideo: '<'
    },
    controller: function() {
      this.onClick = function() {
        debugger;
      };
    },
    templateUrl: 'src/templates/videoList.html',
  });
