<template>
    <div class="container">
        <form v-if="!submitForm">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <h2>Super Form</h2>
                  <hr>
                    <div class="form-group">
                      <label for="firstName" class="form-label">First Name</label>
                      <input type="text" class="form-control" v-model="user.firstName" id="firstName">
                    </div>
                    <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input type="text" class="form-control" v-model="user.lastName" id="lastName">
                    </div>
                    <div class="form-group">
                      <label for="email">E-Mail</label>
                      <input type="email" class="form-control" v-model="user.mail" id="email">
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" v-model="user.password" id="password">
                    </div>
                    <div class="form-group">
                      <label>Store in Database?</label>
                      <br>
                      <label for="yes">
                        <input type="radio" v-model="storeInDb" value="Yes" id="yes">
                      Yes</label>
                      <label for="no">
                        <input type="radio" v-model="storeInDb" value="No" id="no">
                      No</label>
                    </div>
                    <button @click.prevent="submitForm=true">Submit Form</button>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div v-if="submitForm" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.firstName }} {{ user.lastName }}</p>
                        <p>Mail: {{ user.mail }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: {{ storeInDb }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          user: {
            firstName: '',
            lastName: '',
            mail: '',
            password: ''
          },
          storeInDb: 'No',
          submitForm: false
        }
      }
    }
</script>

<style>
</style>
