<template>
<div class="component">
  <h1>The User Component</h1>
  <p>I'm an awesome User!</p>
  <button class="btn" @click="changeName">Change name</button>
  <p>Name is: {{ name }}</p>
  <p>Age is: {{ age }}</p>
  <hr>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <app-user-detail
        :myName='name'
        :myFunc='resetName'
        :userAgePassed="age"
        @nameWasChanged="name = $event">
      </app-user-detail>
    </div>
    <div class="col-xs-12 col-sm-6">
      <app-user-edit
        :userAge="age"
        :changeAgeFunc="changeAge"
        @emitingAge="age = $event">
      </app-user-edit>
    </div>
  </div>
</div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data() {
    return {
      name: 'Ismar',
      age: 29
    }
  },
  methods: {
    changeName() {
      this.name = 'Larisa';
    },
    // This function gets executed from the child
    resetName() {
      this.name = 'Ismar';
    },
    changeAge() {
      this.age = 30;
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
