<template lang="html">
  <div>
    <div
      id="on"
      @click="switched(true)"
      :class="{active: value}"
      >ON
    </div>
    <div
      id="off"
      @click="switched(false)"
      :class="{active: !value}"
      >OFF
    </div>
  </div>

</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    switched(isOn){
      this.$emit('input', isOn)
    }
  }
}
</script>

<style lang="css">
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: #77aa77;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
  }

  #on:hover, #on.active{
    background-color: lawngreen;
  }

  #off:hover, #off.active{
      background-color: crimson;
    }
</style>
