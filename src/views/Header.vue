<template>
  <div class="headline">Forum</div>

  <div class="header">
    <o-dropdown :triggers="['hover']" aria-role="list">
      <o-button variant="info">
        <span>Hover me!</span>
        <o-icon icon="caret-down"></o-icon>
      </o-button>

      <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
      <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
      <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
    </o-dropdown>
  </div>
  <div id="nav">
    | <router-link to="/">News</router-link> |
    <router-link to="/">Games</router-link> |
    <router-link to="/">Movies</router-link> |
    <router-link to="/">Communtiy</router-link> |
  </div>
</template>
<script></script>
<style>
.headline {
  background-color: #2c3e50;
  color: black;
  padding: 5%;
  margin-bottom: 0%;
}

#nav {
  background-color: #2c3e50;
  color: black;
  padding: 2px;
}

#nav a {
  font-weight: bold;
  color: #082b4e;
}

#nav a.router-link-exact-active {
  color: #a30202;
}

.router-link {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
