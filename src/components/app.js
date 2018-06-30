angular.module('video-player')

  .component('app', {
    
    // bindings: {
    //   // name: '@'
    // },
    
    controller: ['youTube', function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = function() {

      };

      this.handle = function(query) {
        alert('handleSearch');
        youTube.search();
      };

    }],
    
    templateUrl: 'src/templates/app.html',
  });
