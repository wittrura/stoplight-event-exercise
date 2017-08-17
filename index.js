(function() {
  'use strict';

  //
  let updateModelEvent = new Event('updateModel');

  //
  let model = {
    stopOn: false,
    slowOn: false,
    goOn: false
  };

  // controller
  let controller = {
    updateLightState: function(lightOn) {
      // ex input: stopOn, slowOn, goOn
      //
      for (var key in model) {
        if (key === lightOn) {
          model[key] = !model[key];
        } else {
          model[key] = false;
        }
      }
      //
      document.getElementById('traffic-light').dispatchEvent(updateModelEvent);
    },

    activateLights: function(bulbs) {
      for (var i = 0; i < bulbs.length; i++) {
        let lightType = bulbs[i].id.replace(/Light/,'');
        // console.log(lightType);
        if (model[lightType.concat('On')]) {
          bulbs[i].classList.add(lightType);
        } else {
          bulbs[i].classList.remove(lightType);
        }
      }
      // if (model.stopOn) {
      //   bulbs[0].classList.add('stop');
      //   bulbs[1].classList.remove('slow');
      //   bulbs[2].classList.remove('go');
      // } else if (model.slowOn) {
      //   bulbs[0].classList.remove('stop');
      //   bulbs[1].classList.add('slow');
      //   bulbs[2].classList.remove('go');
      // } else if (model.goOn) {
      //   bulbs[0].classList.remove('stop');
      //   bulbs[1].classList.remove('slow');
      //   bulbs[2].classList.add('go');
      // } else {
      //   bulbs[0].classList.remove('stop');
      //   bulbs[1].classList.remove('slow');
      //   bulbs[2].classList.remove('go');
      // }
    },
    init: function() {
      view.init();
    }
  }

  // TODO
  function outputChange (light) {
    if (light.classList.contains('stop')) {
      console.log(`${light.innerText} bulb on`);
    } else {
      console.log(`${light.innerText} bulb off`);
    }
  }

  // view
  let view = {
    init: function() {
      //
      document.getElementById('controls').addEventListener('click', function(e){
        let targetBtn = e.target;

        controller.updateLightState(targetBtn.innerHTML.toLowerCase().concat('On'));
      });

      //
      document.getElementById('traffic-light').addEventListener('updateModel', function(e) {
        controller.activateLights(document.getElementsByClassName('bulb'));
      });
    }
  };

  controller.init();
})();
