
<template>

  <div id="app">
    <NavigationBar></NavigationBar>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div id="footer">
      <div class="footer-wrap">
        <div class="footer-item-container">

          <div class="footer-item footer-item_00">
            <img src="https://media.openserver.cn/turbochain/assets/homepage_logo.png">
          </div>
          <div class="footer-item footer-item_01">

            <p class="title">{{$t("footer.ContactUs")}}</p>
            <ul class="list">
              <li class="item"><a href="mailto:bd@turbochain.ai" class="email">{{$t("footer.bd")}} bd@turbochain.ai</a></li>
              <li class="item"><a href="mailto:hr@turbochain.ai" class="email">{{$t("footer.hr")}} hr@turbochain.ai</a></li>
              <!--<li class="item"><a href="mailto:veresearch@turbochain.ai" class="email">Research
                and Development: veresearch@turbochain.ai</a></li>-->
              <li class="item"><a href="mailto:press@turbochain.ai" class="email">{{$t("footer.Media")}} press@turbochain.ai</a></li>
              <li class="item"><a href="mailto:info@turbochain.ai" class="email">{{$t("footer.others")}} info@turbochain.ai</a></li>
              <li class="item"><a class="email">{{$t("footer.address")}}</a>
               <!-- href="https://map.baidu.com/poi/%E6%95%B0%E5%AD%97%E5%AA%92%E4%BD%93%E6%8A%80%E6%9C%AF%E6%95%99%E8%82%B2%E9%83%A8%E5%B7%A5%E7%A8%8B%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83/@13040703.684939614,4367866.490535733,15.89z?uid=8b23f6282a0f75f1b817e70f&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
-->
              </li><!--{{$t("footer.others")}}-->
            </ul>
          </div>
          <div class="footer-item footer-item_02">
            <p class="title">{{$t("footer.FU")}}</p>
            <img class="qrcode" src="./assets/images/qrcode_turbochain.jpg">
            <img class="qrcode" src="./assets/images/qrcode_thinkingchain.jpg">
            <!--<ul class="icons">
             <li class="item">
               <a target="_blank" class="link">
                 <img src="./assets/footer_wechat.png">
               </a>
             </li>
            <li class="item">
              <a target="_blank" class="link">
                <img src="./assets/facebook.png">
              </a>
            </li>
             <li class="item">
               <a target="_blank" class="link">
                 <img src="./assets/footer_twitter.png">
               </a>
             </li>
             <li class="item">
               <a target="_blank" class="link">
                 <img src="./assets/footer_Instagram.png">
               </a>s
             </li>
             <li class="item">
               <a target="_blank" class="link">
                 <img src="./assets/footer_linkedin.png">
               </a>
             </li>
            </ul>-->
          </div>
        </div>

      </div>
      <div class="footer2">
        <p>2019 TurboChain AI Tech Co., Ltd. © ALL RIGHTS RESERVED</p>
        <p>鲁ICP备19063046号</p>
      </div>
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
.footer2 p{
  display: inline-block;
}
  .footer-item_00{
    display: none;
  }
.footer-item_01, .footer-item_02{
    width: 50%;
  }
  .qrcode{
    width: 112px;
    height: 112px;
    padding-right: 2vw;
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
  .footer-item_01, .footer-item_02{
    width: 85vw;
  }
  .footer-item_01{
      margin-top: 8vh;
    }
  .footer-item_02{
        margin: 0 auto;
        margin-top: 8vh;
    margin-bottom: 8vh;
      }
  .footer2 p{
    display: block;
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
