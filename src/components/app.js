angular.module('video-player')

  .component('app', {
    // bindings: {
    //   // name: '@'
    // },
    controller: function() {
      this.videos = window.exampleVideoData;
      this.selectVideo = () => {
      };
    },
    templateUrl: '/src/templates/app.html',
  });
