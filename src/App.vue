<template>
  <nav id="nav">
    <h1>OFFICE</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

#app {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background: #2bdbfa; */
}

#nav {
  height: 75px;
  width: 100%;
}

#nav h1,
ul,
li {
  margin: 0;
  padding: 0;
}

#nav h1 {
  position: relative;
  left: 50px;
  margin: 20px 20px;
  width: 100px;
  text-align: center;
  background: #2bdbfa;
  border-radius: 100vw;
}

#nav ul {
  position: relative;
  top: -50px;
  left: 1100px;
}

#nav li {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: inline;
  margin: 20px;
  color: black;
  opacity: 0.7;
  /* border: 3px solid black; */
}

#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
}

#nav li:hover {
  opacity: 1;
}
</style>
