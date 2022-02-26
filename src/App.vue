<template>
  <nav id="nav">
    <h1>kreativ.</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/">Github</router-link></li>
    </ul>
  </nav>
  <section class="blue">
    <h1 id="kreativ">kreativ.</h1>
    <p id="description">A team of creative minds to make amazing things.</p>
  </section>

  <div class="spacer layer1"></div>

  <section class="black">
    <h1 id="kreativ">Projects</h1>
    <div class="cards">
      <div class="card">Portfolio</div>
      <div class="card">Binary Bits</div>
      <div class="card">OpNotes</div>
    </div>
  </section>

  <div class="spacer layer2"></div>

  <section class="magenta">
    <h1 id="kreativ">kreativ.</h1>
  </section>

  <div class="spacer layer3"></div>

  <section class="teal">
    <h1 id="kreativ">kreativ.</h1>
  </section>

  <div class="spacer layer4"></div>

  <footer>
    <i class="fa-solid fa-user"
      ><font-awesome-icon icon="fa-brands fa-github"
    /></i>
  </footer>
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
  background: rgb(19, 98, 202);
  width: 100%;
}

#nav {
  height: 75px;
  width: 100% !important;
  background: rgb(19, 98, 202);
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
  width: 120px;
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
}

#nav a {
  text-decoration: none;
  transition: 500ms ease;
}

#nav a.router-link-exact-active {
  color: black;
}

#nav a:hover {
  color: white;
}

section {
  min-height: 300px;
  padding: 100px 20vw;
}

#description {
  text-align: center;
  font-size: 2em;
}

.cards {
  display: grid;
  /* flex-direction: row; */
}

.card {
  width: 100px;
  height: 100px;
  background-color: darkgray;
  grid-row: 3fr;
}

.blue {
  background: #1362ca;
}

.black {
  background: #150379;
}

.magenta {
  background: #8231ce;
}

.teal {
  background: #0d63aa;
}

.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.layer1 {
  background-image: url("./assets/layer1.svg");
}

.layer2 {
  background-image: url("./assets/layer2.svg");
}

.layer3 {
  background-image: url("./assets/layer3.svg");
}

.layer4 {
  background-image: url("./assets/layer4.svg");
}

#kreativ {
  font-size: 5em;
  text-align: center;
  color: aliceblue;
}

footer {
  min-height: 300px;
  background-color: black;
}

footer > i {
  font-size: 3em;
  color: aliceblue;
}
::-webkit-scrollbar {
  width: 1em;
}

::-webkit-scrollbar-track {
  background-color: rgb(214, 195, 195);
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb {
  background: rgb(58, 58, 58);
  border-radius: 100vw;
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
