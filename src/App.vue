<template>
  <!-- <header> -->
  <nav id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
    </ul>
  </nav>
  <!-- </header> -->
  <router-view />
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  background-color: #2c3e50;
  height: 75px;
}

#nav li {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: inline;
  border: 3px solid black;
}

#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
