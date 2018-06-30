angular.module('video-player')

  .component('app', {
    
    // bindings: {
    //   // name: '@'
    // },
    
    controller: ['youTube', function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.defaultQuery = 'cute cat videos';

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = () => {

      };

      this.handleResults = (data) => {
        this.videos = data.items;
        this.selectVideo(data.items[0]);
      };

      this.handle = (query) => {
        youTube.search(query, this.handleResults);
      };

      this.handle(this.defaultQuery);

    }],
    
    templateUrl: 'src/templates/app.html',
  });
