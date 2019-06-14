angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: function HomeController() {
      this.movies = [
        {
          name: 'Nexus S',
          details: 'Fast just got faster with Nexus S.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC3BA3ZEYw1K5Ogio_A7s5BqK6ymV5erW3PJOdGyYaJ8ps8-b'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          details: 'The Next, Next Generation tablet.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC3BA3ZEYw1K5Ogio_A7s5BqK6ymV5erW3PJOdGyYaJ8ps8-b'
        }, {
          name: 'MOTOROLA XOOM™',
          details: 'The Next, Next Generation tablet.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC3BA3ZEYw1K5Ogio_A7s5BqK6ymV5erW3PJOdGyYaJ8ps8-b'
        }
      ];
    }
  });