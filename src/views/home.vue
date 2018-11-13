<template>
    <div class="home">
      
        <router-link to='/test'>homehomehomehomehome</router-link>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      home: 'hiome'
    }
  },
  created () {
    // this.changeLoginState()
  },
  components: {

  },
  computed: {
  },
  mounted () {

  },
  methods: {
    // ...mapMutations({
    //   changeLoginState: 'add'
    // })
  },
  watch: {

  },
  props: {
  }
}
</script>

<style lang='less'>
.home {
  font-size: 10px;
  color: @color;
  display: flex;
}
</style>
