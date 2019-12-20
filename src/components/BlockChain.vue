<template>
  <div  >
      <div class="main_top" :style="topBgImage">
          <div class="main_txt">
              <div class="title" style="color: #fff;">
                  <p style="font-size: 4rem;font-weight: bold;margin-bottom: 1rem">{{$t("blockChain.turboChain")}}</p>
                  <p style="font-size: 2rem;">{{$t("blockChain.title")}}</p>
              </div>
              <div class="content">
                  <ul>
                      <li>{{$t("blockChain.contentOne")}}</li>
                      <li>{{$t("blockChain.contentTwo")}}</li>
                      <li>{{$t("blockChain.contentThree")}}</li>
                      <li>{{$t("blockChain.contentFour")}}</li>
                  </ul>
              </div>
          </div>
      </div>
 <!--     <div class="main_middle" :style="middelBgImage">
          <div style="margin: 0px auto;width: 760px;height: 500px;background-color: #e5e5e5;border-radius: 20px;padding: 90px;text-align: center">
              <div>
                  <p style="font-size: 45px;font-weight: bold;">原生交易功能特点</p>
                  <p style="font-size: 16px;width: 600px;margin-top: 20px">
                      泰链区块链协议层的原生交易功能，例如多方支付协议（MPP）、多任务交易（MTT）、可控交易生命周期、交易依赖性，使得企业应用的开发更加友好
                  </p>
              </div>
              <div style="margin-top: 50px">
                  <div style="width: 100%;padding: 0px 20px">
                      <div style="float: left;width: 50%;">
                          <div style="float: left;text-align: right;display: inline">
                              <p style="font-size: 16px;font-weight: bold">可控交易生命周期</p>
                              <p style="font-size: 14px">用户可以通过交易结构中的BlockRef和Expiration字段指定交易被区块链处理的时间，
                                  或者指定交易在一段时间未被处理之后即过期</p>
                          </div>
                          <div style="float: right;display: inline">
                              <img src="../assets/images/lifecycle.png" style="width: 80px">
                          </div>
                      </div>
                      <div style="float: right;width: 50%;">
                          <div style="float: left">
                              <img src="../assets/images/mpp.png" style="width: 80px">
                          </div>
                          <div style="float: right">
                              <p style="font-size: 16px;font-weight: bold">多方支付协议（MPP)</p>
                              <p style="font-size: 14px">灵活的交易费用委托方式使得去中心化应用可以通过免费增值模式降低用户的使用门槛</p>
                          </div>
                      </div>
                  </div>
                  <div style="width: 100%">
                      <div style="float: left">
                          <div style="float: left"></div>
                          <div style="float: right"></div>
                      </div>
                      <div style="float: right">
                          <div style="float: left"></div>
                          <div style="float: right"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>-->
  </div>
</template>

<script>
   /* import cover from "../assets/images/cover.jpg";
    import section_bg from "../assets/images/section-bg.jpg";
    export default {
        name: "BlockChain",
        data() {
            return {
                topBgImage: {
                    backgroundImage: "url(" + cover + ")"
                },
                middelBgImage: {
                    backgroundImage: "url(" + section_bg + ")"
                }
            }
        }
    }*/
</script>

<style scoped lang="scss">
    .content{
        width: 900px;
        margin: 0 auto;
        margin-top: 4rem;
    }
    .content ul li{
        text-align: left;
        color: #ffffff;
        line-height: 2rem;
        margin-bottom: 1rem;
        list-style-type: square;
    }
    .main_top {
        padding-top: 64px;
        overflow: hidden;
        /*background-size: 110%;*/
        background: url(https://media.openserver.cn/turbochain/assets/images/cover.jpg) center no-repeat;
    }
    .main_txt{
        width:75vw;
        margin: 0 auto;
        text-align: center;
        margin-top: 6rem;
        margin-bottom: 6rem;
      /*  .title{
            width: 100vw;
        }*/
    }
    .main_middle {
        padding-top: 70px;
    }
    @media screen and (max-width: 900px) {
        .main_txt{
            width: 85vw;
            margin: 0 auto;
            text-align: center;
            margin-top: 6rem;
            .title{
                width: 100%;
            }
        }
        .content{
            width: 85vw;
            margin-bottom: 10vh;
        }
    }
</style>
