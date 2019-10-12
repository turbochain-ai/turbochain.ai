
<template>

  <div id="app">
    <NavigationBar></NavigationBar>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div id="footer">
      <div class="footer-wrap">
        <div class="footer-item-container">

          <div class="footer-item footer-item_00">
            <img src="./assets/homepage_logo.png">
          </div>
          <div class="footer-item footer-item_01">
            <p class="title">Contact Us</p>
            <ul class="list">
              <li class="item"><a href="mailto:bd@turbochain.ai" class="email">Business
                Development: bd@turbochain.ai</a></li>
              <li class="item"><a href="mailto:hr@turbochain.ai" class="email">Recruitment:
                hr@turbochain.ai</a></li>
              <li class="item"><a href="mailto:veresearch@turbochain.ai" class="email">Research
                and Development: veresearch@turbochain.ai</a></li>
              <li class="item"><a href="mailto:press@turbochain.ai" class="email">Media:
                press@turbochain.ai</a></li>
              <li class="item"><a href="mailto:info@turbochain.ai" class="email">Others:
                info@turbochain.ai</a></li>
            </ul>
          </div>
          <div class="footer-item footer-item_02">
            <p class="title">Follow Us</p>
            <ul class="icons">
              <li class="item">
                <a target="_blank" href="#" class="link">
                  <img src="./assets/footer_wechat.png">
                </a>
              </li>
              <li class="item">
                <a target="_blank" href="#" class="link">
                  <img src="./assets/facebook.png">
                </a>
              </li>
              <li class="item">
                <a target="_blank" href="#" class="link">
                  <img src="./assets/footer_twitter.png">
                </a>
              </li>
              <li class="item">
                <a target="_blank" href="#" class="link">
                  <img src="./assets/footer_Instagram.png">
                </a>s
              </li>
              <li class="item">
                <a target="_blank" href="#" class="link">
                  <img src="./assets/footer_linkedin.png">
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <p class="footer2">
        2019 TurboChain AI Tech Co., Ltd. © ALL RIGHTS RESERVED
      </p>
    </div>
  </div>
</template>

<script>
  import NavigationBar from "./components/NavigationBar";
  export default {
    name: 'App',
    components: {NavigationBar},
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        });
      },
    }
  }
</script>

<style scoped lang="scss">
.menu_list02{
  float: none;
  width: 10vw;
  position: absolute;
  margin-left: -5vw;
  top: 4px;
  text-align: center;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  background-color: rgba(0,0,0,0.9);
  .nav_list{
    color: #ffffff;
/*    display: block;
    width: 100%;
    height: 4vh;
    line-height: 4vh;*/
  }
}
  .nav_list .nav_active {
    border-bottom: 2px solid #fff;
    color: #ffffff;
  }
  .nav_list .nav_active1 {
      color: white;
  }
  .nav_list .nav_active2 {
      color: #8C8D8C;
  }
  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  ul, li, p {
    margin: 0 auto;
    padding: 0px;
  }

  #app {
    /*width: 100vw;*/
    height: 64px;
    background-color: #000;
    display: block;
  }
.ivu-dropdown-item{
  width: 10vw;
}
.header {
    width: 100vw;
    height: 64px;
    background-color: #000;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    padding: 0 5vw;
    top: 0;
    z-index: 9999;
   /* .head{
      width: 90vw;
    }*/
  }

  .head_img {
    width: 20vw;
  }

  .head_img img {
    padding-top: 8px;
  }

  .nav {
    display: inline-block;
  }

  .header-web {
    width: 70vw;
    display: inline-block;
  }

  .nav_list {
    left: 64px;
  }

  .nav_list li {
    background-color: #000000;
    display: inline-block;
    color: #8C8D8C;
    font-size:14px;
    padding: 0px 20px;
    height: 62px;
    line-height: 62px;
    transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
  }
  .nav_list a:hover {
      color: #ffffff;
  }
  .nav_list li:hover {
    color: #ffffff;
  }

  .header-right {
    float: right;
    height: 64px;
    line-height: 64px;
    padding: 0em 2em;
    background-color: rgb(0, 0, 0);
  }

  .lang {
    line-height: 64px;
  }

  .lang li {
    border-bottom-color: transparent;
    color: rgb(140, 141, 140);
    background-color: rgb(0, 0, 0);
    padding: 0em 2em;
    border-radius: 8px;
    margin-bottom: 0.5em;
    font-size: 0.8em;
  }

  #footer {
    /* width: 100vw;*/
    background-color: #191d28;

  }
  .footer-wrap{
    position: relative;
    display: flow-root;
  }
  .footer-item-container {
    display: flex;
    max-width: 1000px;
    margin: 4rem auto;
  }

  .footer-item {
  /*  width: 50%;*/
  }

  .footer-item .title {
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 22px;
  }

  .footer-item .list li {
    margin-bottom: 12px;
  }

  .footer-item .list li a {
    color: #8C8D8C;
    font-size: 0.9em;
    transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
  }
  .footer-item .list li a:hover {
    color: #ffffff;
  }
  .footer-item .icons .item a img{
    width: 24px;
    height: 24px;
  }

  .footer-item .icons li{
    display: inline-block;
    margin-right: 1rem;
  }
  .footer2 {
    background-color: #1d2331;
    padding: 20px 0;
    font-size: 0.6em;
    color: #8C8D8C;
    line-height: 1.5em;
    text-align: center;
  }
  .footer-item_00{
    display: none;

  }
  .footer-item_02{
    margin-left: 20vw;
  }
@media screen and (max-width: 1280px) and (min-width: 768px){
  .nav_list li {
    font-size:1vw;
  }
}
@media screen and (max-width: 900px){
  .footer-item-container{
    width: 85vw;
    display: block;
    margin: 0 auto;
  }
  .footer-item_00{
    display: block;
    margin-top: 10vh;
    img{
      width: 50vw;
    }
  }
  .footer-item_01{
      margin-top: 8vh;
    }
  .footer-item_02{
        margin: 0 auto;
        margin-top: 8vh;
    margin-bottom: 8vh;
      }

}
@font-face {
    font-family: 'Oswald_font';     /* 这个名字可以自己定义 */
    src: url('assets/fonts/Oswald-Medium.eot'); /* IE9 Compat Modes */      /*这里以及下面的src后面的地址填的都是自己本地的相对地址*/
    src: url('assets/fonts/Oswald-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('assets/fonts/Oswald-Medium.woff') format('woff'), /* Modern Browsers */
    url('assets/fonts/Oswald-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
    url('assets/fonts/Oswald-Medium.svg#YourWebFontName') format('svg'); /* Legacy iOS */
    font-weight: bold;
    font-style: normal;
}
</style>
