<template lang="pug">
  .main
    UsersListCell(
      v-for="user, index in users"
      v-bind:key="index"
      v-bind:user="user"
    )
    BaseLoading(v-show="isLoading")
    .message(
      v-if="message"
      v-bind:style="isFailed ? 'color: red' : ''"
    ) {{ message }}
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
    const maxUsers = 20
    return {
      nextPage: 1,
      maxUsers,
      isLoading: false,
      message: '',
      text: {
        failed: 'Fetching data failed. Try again',
        done: `List already reaches ${maxUsers} users`
      }
    }
  },
  computed: {
    ...mapState([
      'users'
    ]),
    ...mapGetters([
      'total'
    ]),
    isFailed () {
      return this.message === this.text.failed
    }
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
        onError: this.onLoadFailed,
        page: this.nextPage
      })
    },
    onLoadSuccess () {
      this.$nextTick(() => {
        this.nextPage++
        this.isLoading = false
      })
    },
    onLoadFailed () {
      this.message = this.text.failed
      this.isLoading = false
    },
    onScroll () {
      const bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight
      if (!bottomOfWindow) return
      if (!this.isLoading && this.total < this.maxUsers) {
        this.message = ''
        this.loadNewUsers()
      } else if (this.total >= this.maxUsers && !this.message) {
        this.isLoading = true
        setTimeout(() => {
          this.message = this.text.done
          this.isLoading = false
        }, 1000)
      }
    }
  }
}
</script>

<style>
.message {
  font-size: 30px;
  font-weight: bold;
}
</style>
