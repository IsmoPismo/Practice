<template id="">
  <ul class="nav nav-pills nav-fill">
    <router-link  class="nav-item"
                  to="/"
                  active-class="active"
                  exact
                  tag="li"><a class="nav-link">Home</a></router-link>
    <router-link  class="nav-item"
                  to="/user/111"
                  active-class="active"
                  exact
                  tag="li"><a class="nav-link">User 111</a></router-link>
    <router-link  class="nav-item"
                  to="/user/222"
                  active-class="active"
                  exact
                  tag="li"><a class="nav-link">User 222</a></router-link>
</ul>
</template>
