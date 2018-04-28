let vm = new Vue({
  template: `<h1>Hello from templayte</h1>`
})

vm.$mount('#app')

// Alternative
// vm.$mount()
// document.getElementById('app').appendChild(vm.$el)
