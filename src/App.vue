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
  /* background: #000000; */
}

#nav {
  height: 75px;
  width: 100% !important;
}

#nav h1,
ul,
li {
  margin: 0;
  padding: 0;
}

#nav h1 {
  position: relative;
  left: 5%;
  margin: 20px 20px;
  width: 100px;
  text-align: center;
  background: #40e2ff;
  border-radius: 100vw;
}

#nav ul {
  position: relative;
  top: -50px;
  left: 70%;
  width: 100px;
}

#nav li {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: inline;
  margin: 20px;
  color: black;
  opacity: 0.85;
  /* border: 3px solid black; */
}

#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  /* color: #40e2ff; */
  color: black;
}

#nav li:hover {
  opacity: 1;
}

@media only screen and (max-width: 1200px) {
  #nav ul {
    left: 70%;
  }
}

@media only screen and (max-width: 900px) {
  #nav ul {
    left: 40%;
  }
}
</style>
