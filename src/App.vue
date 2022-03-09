<template>
  
  <div class="headline"><h1>FORUM für alles</h1></div>
'<router-link to="/sidebar">Sidebar</router-link>
 
  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 2px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



#headline{
  background-color: #2c3e50;
  color: black;
  
  margin-bottom: 0%;
  
}
#router-link{
  margin-left: 20%;
  margin-right: 20%;
}

</style>
