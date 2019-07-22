<template lang="pug">
  .main
    UsersListCell(
      v-for="user, index in users"
      v-bind:key="index"
      v-bind:user="user"
    )
    BaseLoading(v-show="isLoading")
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BaseLoading from './BaseLoading'
import UsersListCell from './UsersListCell'

export default {
  name: 'UsersList',
  components: {
    BaseLoading,
    UsersListCell
  },
  data () {
    return {
      nextPage: 1,
      maxUsers: 20,
      isLoading: false
    }
  },
  computed: {
    ...mapState([
      'users'
    ]),
    ...mapGetters([
      'total'
    ])
  },
  created () {
    this.loadNewUsers()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    loadNewUsers () {
      this.isLoading = true
      this.$store.dispatch('getNewPage', {
        onSuccess: this.onLoadSuccess,
        onFailed: this.onLoadFailed,
        page: this.nextPage
      })
    },
    onLoadSuccess () {
      this.$nextTick(() => {
        this.nextPage++
        this.isLoading = false
      })
    },
    onLoadFailed () {},
    onScroll () {
      const bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

      if (!this.isLoading && bottomOfWindow && this.total < this.maxUsers) {
        this.loadNewUsers()
      } else if (this.total >= this.maxUsers) {
        this.isLoading = true
      }
    }
  }
}
</script>
