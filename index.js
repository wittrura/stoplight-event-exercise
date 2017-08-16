(function() {
  'use strict';

  // model
  let lightState = {
    stopOn: false,
    slowOn: false,
    goOn: false
  };

  // controller

  function updateLightState(light) {
    let lightOn = light.toLowerCase().concat('On');

    for (var key in lightState) {
      if (key === lightOn) {
        lightState[key] = !lightState[key];
      } else {
        lightState[key] = false;
      }
    }
    console.log(lightState);
    // based on model, add or remove classes to view
  }

  function activateLights(bulbs) {
    if (lightState.stopOn) {
      // console.log(bulbs[0].id);
      bulbs[0].classList.add('stop');
      bulbs[1].classList.remove('slow');
      bulbs[2].classList.remove('go');
    } else if (lightState.slowOn) {
      bulbs[0].classList.remove('stop');
      bulbs[1].classList.add('slow');
      bulbs[2].classList.remove('go');
    } else if (lightState.goOn) {
      bulbs[0].classList.remove('stop');
      bulbs[1].classList.remove('slow');
      bulbs[2].classList.add('go');
    } else {
      bulbs[0].classList.remove('stop');
      bulbs[1].classList.remove('slow');
      bulbs[2].classList.remove('go');
    }

  }

  // function createToggle(btn, lightType, action) {
  //   let speedBtn = document.getElementById(btn);
  //
  //   speedBtn.addEventListener('click', function(){
  //     document.getElementById(lightType).classList.toggle(action);
  //   });
  //
  //   speedBtn.addEventListener('mouseenter', function(){
  //     console.log(`Entered ${this.textContent} button`);
  //   });
  //
  //   speedBtn.addEventListener('mouseleave', function(){
  //     console.log(`Left ${this.textContent} button`);
  //   });
  // }
  //
  // createToggle('stopButton', 'stopLight', 'stop');
  // createToggle('slowButton', 'slowLight', 'slow');
  // createToggle('goButton', 'goLight', 'go');


  // view
  document.getElementById('controls').addEventListener('click', function(e){
    let target = e.target;

    updateLightState(target.innerHTML);

    let bulbs = document.getElementsByClassName('bulb');
    activateLights(bulbs);

    console.log(`${target.innerText} bulb on`)
  });
})();
