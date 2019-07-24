<template lang="pug">
  #app
    app-header#header
    router-view#view
    app-footer#footer
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  right: 0;
  left: 0;
}
#header, #view, #footer {
  position: absolute;
}
#header, #footer {
  background-color: #E0E0E0;
}
#view {
  width: 100%;
  top: 87px;
  bottom: 60px;
  overflow-y: scroll;
}
</style>
