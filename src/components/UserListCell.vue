<template lang="pug">
  .user
    .thumbnail-container.column
      img(
        v-bind:src="user.picture.large"
      )
    .other-fields-container.column
      .text-info(style="margin-bottom: 10px;") {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
      .text-info Registered Date: {{ registeredDate }}
</template>

<script>
import dateFormat from 'dateformat'

export default {
  name: 'UserListCell',
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      registeredDate: dateFormat(new Date(this.user.registered.date), 'd mmmm yyyy')
    }
  }
}
</script>

<style scoped>
.user {
  height: 120px;
  background-color: #4473c4;
  margin-bottom: 70px;
  position: relative;
}
.column {
  position: absolute;
  margin: 10px;
  height: 100px;
}
img {
  max-height: 100%;
}
.other-fields-container {
  vertical-align: middle;
  width: 27.5%;
  right: 0;
}
.text-info {
  background-color: #ffffff;
  text-transform: capitalize;
  border: 1px solid black;
  height: 43px;
  color: #000;

  /* Internet Explorer */
  display: -ms-flexbox;
  -ms-flex-pack: center;
  -ms-flex-align: center;
  /* Firefox */
  display:-moz-box;
  -moz-box-pack:center;
  -moz-box-align:center;
  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:center;
  -webkit-box-align:center;
  /* W3C */
  display:box;
  box-pack:center;
  box-align:center;
}
</style>
