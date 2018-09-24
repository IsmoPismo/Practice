export const computedMixin = {
  computed: {
    charCounter(){
      return `${this.status} (${this.status.length})`
    }
  }
}
