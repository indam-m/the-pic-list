<template lang="jade">
  .user
    .thumbnail-container
      img(
        v-bind:src="user.thumbnail"
      )
    .other-fields-container
      p {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
      p Registered Date: {{ registeredDate }}
</template>

<script>
import dateFormat from 'dateformat';

export default {
  name: 'MainUserCell',
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      registeredDate: dateFormat(new Date(user.registered.date), 'd MMMM yyyy')
    }
  },
}
</script>
