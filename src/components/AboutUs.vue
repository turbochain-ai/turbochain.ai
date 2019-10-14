<template>
  <div>
    <div class="main_page" :style="bgimage">
      <div class="about_us_text">
        <p class="title_en">
          ABOUT US
        </p>
        <p class="title_cn">{{$t("aboutUs.aboutUs")}}</p>
        <div class="content">
          <p>{{$t("aboutUs.introduce")}}</p>
          <p style="margin-top: 25px">{{$t("aboutUs.introduceOne")}}</p>
        </div>
      </div>
    </div>
    <div class="location">
      <img src="../assets/location_bg.png">
     </div>
  </div>
</template>

<script>
  import banner_web from "../assets/images/banner_web.jpg";

  export default {
    name: "AboutUs",
    data() {
      return {
        bgimage: {
          height: "600px",
          backgroundImage: "url(" + banner_web + ")",
        },
      }
    }
  }
</script>

<style scoped lang="scss">
  .location{
    background-color:#191d28;
  }
  .title_en{
    font-size: 5rem;
    font-weight: bold;
    font-family: 'Oswald_font';
    text-align: center;
  }
  .title_cn{
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  .main_page {
    padding-top: 16vw;
    color: #fff;
  }
  .about_us_text{
    width: 85vw;
    margin: 0 auto;
  }
  .about_us_text{
    .content{
      text-align: justify;
      width: 100%;
      margin-top: 8vw;
      color: #e3e3e3;
      line-height: 27px
    }
  }
  .location{
/*    text-align: center;
    margin: 0 auto;*/
display: flex;
    justify-content: center;
/*    background:url("../assets/location_bg.png");*/
    img{
      margin: 0 auto;
      width: 70%;
    }
  }
  @font-face {
    font-family: 'Oswald_font';     /* 这个名字可以自己定义 */
    src: url('./../assets/fonts/Oswald-Medium.eot'); /* IE9 Compat Modes */      /*这里以及下面的src后面的地址填的都是自己本地的相对地址*/
    src: url('./../assets/fonts/Oswald-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./../assets/fonts/Oswald-Medium.woff') format('woff'), /* Modern Browsers */
    url('./../assets/fonts/Oswald-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
    url('./../assets/fonts/Oswald-Medium.svg#YourWebFontName') format('svg'); /* Legacy iOS */
    font-weight: bold;
    font-style: normal;
  }
  /*    p {
          text-indent: 2em;
      }*/
  @media screen and (min-width: 1280px){
    .about_us_text{
      min-width: 1000px;
      margin: 0 auto;
    }
    .main_page {
      padding-top: 10rem;
    }
    .about_us_text{
      .content{
        margin-top: 100px;
      }
    }
  }
</style>
