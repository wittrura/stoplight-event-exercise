(function() {
  'use strict';

  // model
  let model = {
    stopOn: false,
    slowOn: false,
    goOn: false
  };

  // controller
  let controller = {
    updateLightState: function(lightOn) {
      // ex input: 'stopOn', 'slowOn', 'goOn'
      // loops through model to check for the light which was passed in
      // if that light is not on, turn it on OR if it IS on, turn it off
      // for all other lights, set to false
      let toggledOff = '';
      for (var key in model) {
        if (key === lightOn) {
          model[key] = !model[key];
        } else {
          // save a different light if it was already on and then turned off
          if (model[key]) {
            toggledOff = key;
          }
          model[key] = false;
        }
      }
      // dispatches custom event whenever model is updated
      let updateModelEvent = new CustomEvent('updateModel', {
        detail: {
          changed: lightOn,
          status: model[lightOn],
          toggledOff: toggledOff
        }
      });
      document.getElementById('traffic-light').dispatchEvent(updateModelEvent);
    },

    // turns lights on based on model state
    activateLights: function(bulbs) {
      for (var i = 0; i < bulbs.length; i++) {
        let lightType = bulbs[i].id.replace(/Light/,'');
        if (model[lightType.concat('On')]) {
          bulbs[i].classList.add(lightType);
        } else {
          bulbs[i].classList.remove(lightType);
        }
      }
    },

    //
    logChange: function(eventDetail) {
      let lightType = eventDetail.changed.replace(/On/,'');

      let lightStatus = ''
      if (eventDetail.status) {
        lightStatus = 'on';
      } else {
        lightStatus = 'off';
      }

      // if a DIFFERENT bulb was turned off, log that
      if (eventDetail.toggledOff) {
        let toggledOff = eventDetail.toggledOff.replace(/On/,'');
        console.log(`${toggledOff} bulb off`);
      }

      // log the state of the bulb for which a button was clicked
      console.log(`${lightType} bulb ${lightStatus}`);
    },

    init: function() {
      view.init();
    }
  }

  // view
  let view = {
    init: function() {
      // adds listeners for when mouse enters or leaves a control button by looping
      // through all the elements with button class within the controls div
      let controlButtons = document.getElementById('controls').getElementsByClassName('button');
      for (var i = 0; i < controlButtons.length; i++) {
        controlButtons[i].addEventListener('mouseenter', function(e) {
          console.log(`Entered ${e.target.textContent} button`);
        });

        controlButtons[i].addEventListener('mouseleave', function(e) {
          console.log(`Left ${e.target.textContent} button`);
        });
      }

      // adds listener by delegating to controls element
      // listens to children for clicks and then updates model based on which element was clicked
      // adds 'On' to target name to help with looking up in the model
      document.getElementById('controls').addEventListener('click', function(e){
        controller.updateLightState(e.target.innerHTML.toLowerCase().concat('On'));
      });

      // adds listener to traffic-light for custom updateModel event, then updates
      // colors of lights based on model state
      document.getElementById('traffic-light').addEventListener('updateModel', function(e) {
        controller.activateLights(document.getElementsByClassName('bulb'));

        controller.logChange(e.detail);

      });
    }
  };

  controller.init();
})();
