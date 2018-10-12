<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">

  <router-link to="/" class="navbar-brand" tag="a">Stock Trader</router-link>
  <ul class="navbar-nav mr-auto">
    <router-link :to="{ name: 'portfolio'}" tag="li" class="nav-item" activeClass="active">
      <a class="nav-link">Portfolio</a>
    </router-link>
    <router-link :to="{ name: 'stocks'}" tag="li" class="nav-item" activeClass="active">
      <a class="nav-link">Stock</a>
    </router-link>
  </ul>
  <button class="btn btn-outline-dark">End Day</button>
  <button class="btn btn-outline-dark mx-4">Load</button>
  <button class="btn btn-outline-dark">Save</button>
</div>
</nav>


    <!-- <nav class="navbar bg-dark text-white p-5">
        <div class="container-fluid">
            <div class="navbar-header">

            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" class="nav-item" tag="li"><a class="nav-link">Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" class="nav-item" tag="li"><a class="nav-link">Stocks</a></router-link>
                </ul>
                <strong class="navbar-text ml-auto">Funds: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><! /.navbar-collapse -->
        <!-- </div><! /.container-fluid -->
    <!-- </nav> -->
</template>

<script>
</script>

<style media="screen">
nav {
  margin-bottom: 59px;
  padding-top: 25px !important;
  padding-bottom: 15px !important;
}

</style>
