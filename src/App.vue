<template>
  <nav id="nav">
    <h1>kreativ.</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Projects</router-link></li>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
      <li><router-link to="/"><fa class="basic" :icon="[ 'fab', 'github' ]"></fa></router-link></li>
    </ul>
  </nav>
  <section class="blue">
    <h1 id="kreativ">kreativ.</h1>
    <p id="description">
      A team of <span id="spanwhite">creative</span> minds to make
      <span id="spanwhite">amazing</span> things.
    </p>
  </section>

  <div class="spacer layer1"></div>

  <section class="dark">
    <h1 id="kreativ">Projects</h1>
    <div class="cards">
      <div class="carder redblob card one"><h1>Portfolio</h1></div>
      <div class="carder blueblob card two"><h1>Binary Bits</h1></div>
      <div class="carder greenblob card three"><h1>OpNotes</h1></div>
    </div>
  </section>

  <div class="spacer layer2"></div>

  <section class="magenta">
    <h1 id="kreativ">About Us</h1>
    <p id="aboutus">
      We are a team of
      <span id="rainbowabout">web developers and designers</span>, making the
      web look beautiful!
    </p>
  </section>

  <div class="spacer layer3"></div>

  <section class="teal">
    <h1 id="kreativ">Get in touch</h1>
    <form action="submit">
      <input type="email" placeholder="Enter your email..." />
    </form>
  </section>

  <div class="spacer layer4"></div>

  <section id="footer" class="black">
    <div class="links">
      <h1 id="link">Links</h1>
      <fa id="github" class="icon" :icon="[ 'fab', 'github' ]"></fa>
      <fa id="youtube" class="icon" :icon="[ 'fab', 'youtube' ]"></fa>
      <fa id="instagram" class="icon" :icon="[ 'fab', 'instagram' ]"></fa>
      <fa id="twitter" class="icon" :icon="[ 'fab', 'twitter' ]"></fa>
    </div>
    <p id="copyright">&#169; Team Kreativ. , kreativ&#8482; 2022</p>
  </section>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

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
  transition: 500ms ease;
}

#nav ul {
  position: relative;
  top: -50px;
  float: right;
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

#nav a.router-link-exact-active,
a:visited {
  color: black;
}

#nav a:hover {
  color: white;
}

section {
  min-height: 200px;
  padding: 100px 20vw;
}

#description {
  text-align: center;
  font-size: 2em;
}

#spanwhite {
  color: aliceblue;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
}

.card {
  min-width: 100px;
  font-weight: 900;
  padding: 3em;
  color: #444;
  border-radius: 1vw;
}

.one {
  grid-column-end: span 2;
}

.two {
  grid-row: 2;
  grid-column-start: 2;
  grid-column-end: span 2;
}

.three {
  grid-row: 3;
  grid-column-end: span 2;
}

.card.two h1 {
  display: flex;
  float: right;
}

.card h1 {
  width: 10em;
  background: linear-gradient(90deg, black, black);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
}

.blue {
  background: #1362ca;
}

.dark {
  background: #150379;
}

.magenta {
  background: #8231ce;
}

.teal {
  background: #0d63aa;
}

.black {
  background: #000000;
  /* background: #ffffff; */
}

.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.carder {
  aspect-ratio: 16/4;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.redblob {
  background-image: url("./assets/red_blob.svg");
}

.blueblob {
  background-image: url("./assets/blue_blob.svg");
}

.greenblob {
  background-image: url("./assets/green_blob.svg");
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
  font-size: 4em;
  text-align: center;
  color: aliceblue;
}

#aboutus {
  text-align: center;
  font-size: 2em;
}

#rainbowabout {
  font-weight: 900;
  background: linear-gradient(90deg, red, blue);
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-position: bottom left;
  transition: 200ms ease;
}

#rainbowabout:hover {
  background-size: 100% 3px;
}

input {
  display: block;
  margin: 0 auto;
  background: #000000b0;
  border: none;
  width: 70%;
  height: 3em;
  border-radius: 100vw;
  color: aliceblue;
  font-size: 1em;
  text-align: center;
}

#footer {
  height: 200px;
  text-align: left;
  background-color: black;
}

#whitetext {
  color: white;
  text-align: center;
}

.basic {
  font-size: 24px;
}

.links {
  float: top;
}

#link {
  color: aliceblue;
  font-size: 4em;
}

.icon {
  color: aliceblue;
  font-size: 2em;
  margin: 3px 2em 3px 0em;
  transition: 200ms ease;
}

#github:hover {
  color: rgb(255, 255, 255);
}

#youtube:hover {
  color: rgb(255, 0, 0);
}

#instagram:hover {
  color: rgb(223, 95, 255);
}

#twitter:hover {
  color: rgb(12, 130, 233);
}

#copyright {
  color: aliceblue;
  margin: 5px 0px 0px 0px;
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

@media only screen and (max-width: 701px) {

  .cards {
    position: relative;
    left: -3em;
  }

  .card {
    width: 100%;
    font-weight: 900;
    padding: 3em;
    color: #444;
    border-radius: 1vw;
  }

  .one {
    grid-row-start: 1;
    grid-column-end: span 3;
  }

  .two {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: span 3;

  }

  .three {
    grid-row-start: 3;
    grid-column-end: span 3;

  }

  .card.two h1 {
    display: flex;
    float: left;
  }

  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
