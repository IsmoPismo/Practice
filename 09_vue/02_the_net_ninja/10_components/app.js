Vue.component('greeting', {
  template: '<p>Hey there. I\'m a reusable component</p>'
});

new Vue({
  el: "#vue-one",
});

new Vue({
  el: "#vue-two",
});
