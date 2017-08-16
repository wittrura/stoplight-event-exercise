(function() {
  'use strict';

  function createToggle(btn, lightType, action) {
    let speedBtn = document.getElementById(btn);

    speedBtn.addEventListener('click', function(){
      document.getElementById(lightType).classList.toggle(action);
    });

    speedBtn.addEventListener('mouseenter', function(){
      console.log(`Entered ${this.textContent} button`);
    });

    speedBtn.addEventListener('mouseleave', function(){
      console.log(`Left ${this.textContent} button`);
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
