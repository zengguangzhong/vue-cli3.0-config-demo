<template>
  <div id="app">
    <img class="ignore"
      alt="Vue logo"
      src="./assets/logo.png" />
    <p>app</p>


    <div class="box">box</div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapMutations } from 'vuex'
import { Types as T } from './store/index'

export default {
  name: 'app',
  date () {
    return {
      app: 'app--------------'
    }
  },
  computed: {
    ...mapState({
      isLogin1: state => state.app.isLogin
    }),
    ...mapState('user', {
      isLogin2: state => state.isLogin
    })
  },
  components: {
  },
  created: [
    function () {

    },
    function () {
      console.log(2)
    }
  ],
  mounted() {
    // api.registerUser().then(data => {
    //   debugger
    // })
  },
  methods: {
    ...mapMutations({
      changeLoginState: T.CHANGE_LOGIN_STATE
    })
  }
}
</script>

<style lang="less">
@import './styles/index.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin-top: 60px;
  // .border-1px(red,1px);
  color: @color;
  p {
    // .border-1px(red,1px);
  }
  .box {
    width: 26.667vw;
    height: 26.667vw;
    // background:blue;
    .border-1px(green,1px);
  }
  .ignore {
    display: block;
    position: relative;
    width: 300px;
    height: 300px;
    &:after {
      content: '';
      // display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 2px solid blue;
    }
  }
}
</style>
