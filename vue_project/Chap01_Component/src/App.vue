<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Currency/> -->
    <h1>Vue Components</h1>
    <A06></A06>
    <A05></A05>
    <A04></A04>
    <A03></A03>
    <basic></basic>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Currency from './components/A01.Currency'
import basic from "./components/02binding.vue";
import A03 from "./components/A03.Repeater.vue";
import A04 from "./components/A04.LifeCycle.vue";
import A05 from "./components/A05.Event.vue";
import A06 from "./components/A06.StyleClass.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    // Currency
    basic,
    A03,
    A04,
    A05,
    A06
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: lightsalmon;
}
body {
  padding-left: 20px;
}
</style>
