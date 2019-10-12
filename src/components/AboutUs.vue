<template>
  <div>
    <div class="main_page" :style="bgimage">
      <div class="about_us_text">
        <p class="title_en">
          ABOUT US
        </p>
        <p class="title_cn">关于我们</p>
        <div class="content">
          <p>泰链项目于2019年5月启动，致力于打造信息透明、协同高效、价值高速传输的可信任分布式商业生态。自成立以来，
            泰链专注于区块链和人工智能技术开发，目前已成为全球为数不多的、被各行业知名企业应用的区块链平台。
            通过提供灵活、安全的区块链基础设施、软硬件结合的企业解决方案和开发工具，
            泰链旨在与合作伙伴和开发者相互赋能，大力推进区块链技术的应用落地，打造强大且可持续发展的商业生态。
          </p>
          <p style="margin-top: 25px">
            目前泰链拥有区块链专业团队，其中超过半数为专业区块链应用工程师，在多个国家及地区设立了分公司和办事机构，
            包括中国北京、上海、深圳、成都、济南、武汉、新疆，新加坡，美国洛杉矶，日本东京和中国香港。泰链在区块链技术的研究与开发领域也处于前沿，
            在全球范围内积极开展技术研究合作，已与多家全球顶级学术机构达成区块链技术研究合作关系。
          </p>
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
