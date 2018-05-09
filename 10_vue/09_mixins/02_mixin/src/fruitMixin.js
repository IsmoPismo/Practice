export const fruitMixin =  {
  data(){
    return {
      fruits: ['Ananas', 'Jabuka', 'Dinja', 'Kruška', 'Lubenica'],
      inputText: ''
    }
  },
  computed: {
    filteredFuits(){
      return this.fruits.filter((el) => el.match(this.inputText))
    }
  }
}
