angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<',
      selectVideo: '<'
    },
    controller: function() {
      console.log(this);
    },
    templateUrl: 'src/templates/videoListEntry.html',
  });