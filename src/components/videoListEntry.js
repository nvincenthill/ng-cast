angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<'
    },
    controller: function() {
      // debugger;
      console.log(this);
    },
    templateUrl: 'src/templates/videoListEntry.html',
  });