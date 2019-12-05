var GrowlyticsSdk = {
  initialize: function (options) {
    (function () {
      var glytcs = document.createElement('script');
      glytcs.type = 'text/javascript';
      glytcs.async = true;
      glytcs.src = 'http://static.growlytics.in/growlytics.min.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(glytcs, s);
      setTimeout(function () {
        window.Growlytics.initialize(options);
      }, 500)
    })();
  },

  events: {
    track: function (name, payload) {
      window.Growlytics.events.track(name, payload);
    }
  },

  identifyUser: function (id, payload) {
    window.Growlytics.identifyUser(id, payload)
  },

  user: {
    // identify: function (id, payload) {
    //     window.Growlytics.user.identify(id, payload)
    // },
    push: function () {
      window.Growlytics.user.push(payload)
    }
  },
};
module.exports = GrowlyticsSdk;