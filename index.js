(function() {
  'use strict';

  function createToggle(btn, light, action) {
    document.getElementById(btn).addEventListener('click', function(){
      document.getElementById(light).classList.toggle(action);
    });
  }

  // document.getElementById('stopButton').addEventListener('click', function(){
  //   document.getElementById('stopLight').classList.toggle('stop');
  // });
  createToggle('stopButton', 'stopLight', 'stop');

  // document.getElementById('slowButton').addEventListener('click', function(){
  //   document.getElementById('slowLight').classList.toggle('slow');
  // });
  createToggle('slowButton', 'slowLight', 'slow');

  // document.getElementById('goButton').addEventListener('click', function(){
  //   document.getElementById('goLight').classList.toggle('go');
  // });
  createToggle('goButton', 'goLight', 'go');
})();
