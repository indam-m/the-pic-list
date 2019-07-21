<template lang="jade">
  .main(
    v-for="user, index in users"
    v-bind:key="index"
  )
    MainUserCell(
      v-bind:user="user"
    )
</template>

<script>
import MainUserCell from './MainUserCell';

export default {
  name: 'Main',
  components: {
    MainUserCell
  },
  data() {
    return {
      users: [],
      currentPage: 0,
      isLoading: false
    }
  },
  created() {
    
  }
}
</script>
