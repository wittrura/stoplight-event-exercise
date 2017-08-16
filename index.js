(function() {
  'use strict';

  let model = {
    stopOn: false,
    slowOn: false,
    goOn: false
  };

  // controller
  let controller = {
    updateLightState: function(clickedLightBtn) {
      let lightOn = clickedLightBtn.innerHTML.toLowerCase().concat('On');
      for (var key in model) {
        if (key === lightOn) {
          model[key] = !model[key];
        } else {
          model[key] = false;
        }
      }
    },

    activateLights: function(bulbs) {
      if (model.stopOn) {
        bulbs[0].classList.add('stop');
        bulbs[1].classList.remove('slow');
        bulbs[2].classList.remove('go');
      } else if (model.slowOn) {
        bulbs[0].classList.remove('stop');
        bulbs[1].classList.add('slow');
        bulbs[2].classList.remove('go');
      } else if (model.goOn) {
        bulbs[0].classList.remove('stop');
        bulbs[1].classList.remove('slow');
        bulbs[2].classList.add('go');
      } else {
        bulbs[0].classList.remove('stop');
        bulbs[1].classList.remove('slow');
        bulbs[2].classList.remove('go');
      }
    }
  }

  function outputChange (light) {
    if (light.classList.contains('stop')) {
      console.log(`${light.innerText} bulb on`);
    } else {
      console.log(`${light.innerText} bulb off`);
    }
  }


  // view
  document.getElementById('controls').addEventListener('click', function(e){
    let targetBtn = e.target;

    controller.updateLightState(targetBtn);

    controller.activateLights(document.getElementsByClassName('bulb'));

    // outputChange(target);

    // console.log(`${target.innerText} bulb on`);
  });
})();
