var GrowlyticsSdk = {
  initialize: function (options) {
    (function () {
      var wzrk = document.createElement('script');
      wzrk.type = 'text/javascript';
      wzrk.async = true;
      wzrk.src = 'http://static.growlytics.in/growlytics.min.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wzrk, s);
      setTimeout(function () {
        window.Growlytics.initialize(options);
      }, 1000)
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
    // identify: function (id, payload) { // FIXME: un comment this when u release typescript sdk
    //     window.Growlytics.user.identify(id, payload)
    // },
    push: function () {
      window.Growlytics.user.push(payload)
    }
  },
};
module.exports = GrowlyticsSdk;