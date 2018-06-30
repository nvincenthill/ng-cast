angular.module('video-player')

  .component('app', {
    
    // bindings: {
    //   // name: '@'
    // },
    
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function() {
      };
      this.searchResults = function() {
      };
    },
    
    templateUrl: 'src/templates/app.html',
  });
