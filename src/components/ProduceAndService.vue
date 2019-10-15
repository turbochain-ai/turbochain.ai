<template>
    <div class="service">
        <div class="brief">
            <div class="brief-center">
                <div class="summary">
                    <h3 class="title"> TURBOCHAIN</h3>
                    <div class="content">
                        {{$t("produceAndService.content")}}
                    </div>
                </div>
                <div class="detail">
                    <div class="detail-item">
                        <h4 class="detail-item-title">{{$t("produceAndService.titleOne")}}</h4>
                        <div class="detail-item-content">{{$t("produceAndService.contentOne")}}</div>
                    </div>
                    <div class="detail-item">
                        <h4 class="detail-item-title">{{$t("produceAndService.titleTwo")}}</h4>
                        <div class="detail-item-content">{{$t("produceAndService.contentTwo")}}</div>
                    </div>
                    <div class="detail-item">
                        <h4 class="detail-item-title">{{$t("produceAndService.titleThree")}}</h4>
                        <div class="detail-item-content">{{$t("produceAndService.contentThree")}}</div>
                    </div>
                    <div class="detail-item">
                        <h4 class="detail-item-title">{{$t("produceAndService.titleFour")}}</h4>
                        <div class="detail-item-content">{{$t("produceAndService.contentFour")}}</div>
                    </div>
                    <div class="detail-item">
                        <h4 class="detail-item-title">{{$t("produceAndService.titleFive")}}</h4>
                        <div class="detail-item-content">{{$t("produceAndService.contentFive")}}</div>
                    </div>
                    <div class="detail-item">
                        <h4 class="detail-item-title">{{$t("produceAndService.titleSix")}}</h4>
                        <div class="detail-item-content">{{$t("produceAndService.contentSix")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="core">
            <div class="core-content">
                <div class="title-wrapper">
                    <h3 class="title">SERVICE</h3>
                    <span class="subtitle">{{$t("produceAndService.produceAndService")}}</span>
                </div>
                <div class="core-items-wrapper">
                    <a class="core-item3 core-item item01" href="https://mulechain.com/" target="_blank">
                        <img src="../assets/service_mulechain.png" alt>
                        <h3 class="core-item-title">mulechain</h3>
                    </a>
                    <a class="core-item3 core-item item02">
                        <img src="../assets/service_qysj.jpg" alt>
                        <h3 class="core-item-title">{{$t("produceAndService.enterpriseDataBrowser")}}</h3>
                    </a>
                    <a class="core-item3 core-item item03" href="http://springislandlove.openserver.cn/"
                       target="_blank">
                        <img src="../assets/service_qdzl.jpg" alt>
                        <h3 class="core-item-title">{{$t("produceAndService.filmAndTelevisionShooting")}}</h3>
                    </a>
                    <a class="core-item3 core-item item04" target="_blank">
                        <img src="../assets/core_pic1.png" alt>
                        <h3 class="core-item-title">{{$t("produceAndService.blockChainBrowser")}}</h3>
                    </a>
                    <a class="core-item3 core-item item05">
                        <img src="../assets/core_pic2.png" alt>
                        <h3 class="core-item-title">{{$t("produceAndService.blockChainWallet")}}</h3>
                    </a>
                    <a class="core-item3 core-item item06" target="">
                        <img src="../assets/core_pic3.png" alt>
                        <h3 class="core-item-title">{{$t("produceAndService.customizedService")}}</h3>
                    </a>
                </div>
            </div>
        </div>
        <div class="coreProduct">
            <div class="core-content">
                <div class="title-wrapper">
                    <h3 class="title">PRODUCT</h3>
                    <span class="subtitle">{{$t("produceAndService.product")}}}</span>
                </div>
                <div class="core-items-wrapper">
                    <a class="core-item core-item4" href="https://telecomm.io/" target="_blank">
                        <img src="../assets/telecomm_logo.png" alt>
                        <div class="core-item-txt">
                            <h4 class="core-item-title">teleComm</h4>
                            <div class="core-item-content-wrapper">
                                <p class="core-item-content">{{$t("produceAndService.teleComm.introduceOne")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.teleComm.introduceTwo")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.teleComm.introduceThree")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.teleComm.introduceFour")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="core-item core-item4" href="http://rpa.openserver.cn/" target="_blank">
                        <img src="../assets/rpa_logo.png" alt>
                        <div class="core-item-txt">
                            <h4 class="core-item-title">RPA</h4>
                            <div class="core-item-content-wrapper">
                                <p class="core-item-content">{{$t("produceAndService.RPA.introduceOne")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.RPA.introduceTwo")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.RPA.introduceThree")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.RPA.introduceFour")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="core-item core-item4" target="_blank">
                        <img src="../assets/core_pic1.png" alt>
                        <div class="core-item-txt">
                            <h4 class="core-item-title">iOSP</h4>
                            <div class="core-item-content-wrapper">
                                <p class="core-item-content">{{$t("produceAndService.iOSP.introduceOne")}}</p>
                                <!--                                <p class="core-item-content">实时查看在线节点数量</p>-->
                                <!--                                <p class="core-item-content">在线解析交易数据</p>-->
                                <!--                                <p class="core-item-content">广播交易</p>-->
                            </div>
                        </div>
                    </a>
                    <a class="core-item core-item4" href="https://ipex.turbochain.ai/" target="_blank">
                        <img src="../assets/ipexExange_logo.png" alt>
                        <div class="core-item-txt">
                            <h4 class="core-item-title">{{$t("produceAndService.exchange.exchange")}}</h4>
                            <div class="core-item-content-wrapper">
                                <p class="core-item-content">{{$t("produceAndService.exchange.introduceOne")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.exchange.introduceTwo")}}</p>
                                <p class="core-item-content">{{$t("produceAndService.exchange.introduceThree")}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProduceAndService"
    }
</script>

<style scoped lang="scss">
    .core-item-txt {
        margin: 0 auto;
    }

    .border_r {
        border-right: 1px solid #eeeeee;
    }

    .service {
        overflow: hidden;
        background-color: #fff;

        .brief {
            .summary {
                padding: 6rem;

                .title {
                    color: #ffffff;

                }

                .content {
                    color: #ffffff;
                    margin-bottom: 4vh;
                }
            }

            .content {
                width: 19rem;
              /*  height: 9.8rem;*/
                font-size: 1rem;
                line-height: 1.5rem;
                margin-top: 2.4rem;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #343c47;
            }

            .link_apply {
                border-radius: 1.9rem;
                margin-top: 3.9rem;
                font-size: 1.3rem;
                padding: 1.2rem 1.9rem;
                margin-right: 1.6rem;
            }

            .link_login {
                border-radius: 1.9rem;
                margin-top: 3.9rem;
                font-size: 1.3rem;
                border: 2px solid #58baf9;
                color: #58baf9;
            }

            .detail {
                .detail-item-title:before {
                    content: "";
                    position: absolute;
                    width: 46px;
                    height: 28px;
                    top: -6px;
                    left: -18px;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAhCAMAAAClSKjMAAABO1BMV…AxmPllGaCxHavBBCKDOY+lgcq2kfULZAbrgyObQGfeWp79AOL288tcQhnkAAAAAElFTkSuQmCC) no-repeat;
                    background-size: contain;
                    background-position: 50%;
                    z-index: -1;
                }

                .detail-item-title {
                    font-family: PingFangSC-Medium;
                    color: #ffffff;
                    font-size: 1.3rem;
                    position: relative;
                    z-index: 2;
                    margin: 0 4vw 1vw 4vw;
                }

                .detail-item-title:before {
                    width: 3.6rem;
                    height: 2.2rem;
                    top: -.5rem;
                    left: -1.4rem;
                }
            }
        }

        .subtitle {
            font-size: 1.5rem;
            color: #ffffff;
            display: block;
            margin-bottom: 4vh;
        }

        .title {
            font-size: 3.5rem;
            margin-top: 0;
            margin-bottom: 1rem;
            font-family: 'Oswald_font';
            color: #ffffff;
        }

        .title-wrapper {
            text-align: center;
        }
    }

    .brief {
        padding: 10vw 0vw;
        /*background-position: center 6.2vw;*/
        background: url(../assets/brief_bg.jpg) no-repeat;
        background-color: #10131a;
        background-position: center;

        .content {
            width: 19rem;
          /*  height: 9.8rem;*/
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: 2.4rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #343c47;
        }

        .link_apply {
            border-radius: 1.9rem;
            margin-top: 3.9rem;
            font-size: 1.3rem;
            padding: 1.2rem 1.9rem;
            margin-right: 1.6rem;
        }

        .link_login {
            border-radius: 1.9rem;
            margin-top: 3.9rem;
            font-size: 1.3rem;
            border: 2px solid #58baf9;
            color: #58baf9;
        }

        .detail {
            /*  margin-top: 2rem;*/
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            color: #000;

            .detail-item-title:before {
                content: "";
                position: absolute;
                width: 46px;
                height: 28px;
                top: -6px;
                left: -18px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAhCAMAAAClSKjMAAABO1BMV…AxmPllGaCxHavBBCKDOY+lgcq2kfULZAbrgyObQGfeWp79AOL288tcQhnkAAAAAElFTkSuQmCC) no-repeat;
                background-size: contain;
                background-position: 50%;
                z-index: -1;
            }

            .detail-item-title {
                /*  font-family: PingFangSC-Medium;
                  color: #2b3758;
                  font-size: 1.3rem;
                  margin-top: -1rem;
                  margin-bottom: 1rem;
                  position: relative;
                  z-index: 2;*/
            }

            .detail-item-title:before {
                width: 3.6rem;
                height: 2.2rem;
                top: -.5rem;
                left: -1.4rem;
            }

            .detail-item-content {
              /*  height: 9.6rem;*/
                font-family: PingFangSC-Light;
                color: #bebfc0;
                font-size: 0.94rem;
                line-height: 1.6rem;
                margin: 0vw 4vw;
            }
        }
    }

    .brief-center {
        width: 1200px;
        margin: 0 auto;
        /*  padding: 8.6vw 4.5vw 7.8vw;*/
        border-radius: 8px;
        background-size: 44.7vw 44.8vw;
        background-color: #fff;
        background: url("./../assets/brief_pic01.png") no-repeat;
        /*     background-image: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,1)),url(./../assets/brief_pic01.png);*/
        background-position: right -1px top;
    }

    .core {
        padding-top: 10rem;
        padding-bottom: 10rem;
        background-color: #191d28;
        margin: 0 auto;

    }

    .core-items-wrapper {
        width: 85vw;
        margin: 0 auto;
        text-align: center;
        margin-top: 4rem;

        .core-item {
            background-repeat: no-repeat;
            background-size: cover;
            margin: 0 auto;
            margin-bottom: 2vh;
            margin-left: 0.3vw;
            margin-right: 0.3vw;
        }

        .item01 {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./../assets/service_01_bg.jpg");
        }

        .item02 {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./../assets/service_02_bg.jpg");
        }

        .item03 {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./../assets/service_03_bg.jpg");
        }

        .item04 {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./../assets/service_04_bg.jpg");
        }

        .item05 {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./../assets/service_05_bg.jpg");
        }

        .item06 {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./../assets/service_06_bg.jpg");
        }

        .core-item-title {
            color: #ffffff;
            vertical-align: middle;
        }
    }


    .core-item-title {
        font-size: 1.5rem;
    }

    .core-item-title, .core-item-content-wrapper {
        color: #ffffff;
    }

    .core-item-txt {
        .core-item-content-wrapper {
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            padding-top: 2vh;
        }
    }

    .coreProduct {
        .core-content {
            .core-items-wrapper {
                display: flex;
            }
        }
    }

    .core-items-wrapper .core-item img {
        width: 10vh;
        height: 10vh;
        margin: 2vh 0;
    }

    /* .core-items-wrapper{
         width: 70vw;
         margin: 0 auto;
     }*/
    .core-item-pic {
        img {
            width: 50%;
            padding-top: 2vh;
        }
    }

    .coreProduct {
        padding-top: 10rem;
        padding-bottom: 10rem;
        background-color: #000000;
    }

    .core-items-wrapper .core-item3 img {
        width: 10vh;
        height: 10vh;
        margin: 2vh 0;
    }

    .core-item3 {
        width: 30%;
        margin-left: 1%;
        transition: all 0.5s;
    }

    /*   .core-item4 {
             width: 22%;
             margin-left: 0.5%;
         }*/
    .core-item {
        padding: 1%;
        text-align: center;
        border-radius: 8px;
        background-color: #143049;
        display: inline-block;
        margin-bottom: 2vh;
        transition: all 0.5s;

        img {
            border-radius: 20%;
        }
    }

    .core-item:hover {
        transform: scale(1.04);
    }

    .core-item4:hover {
        transform: scale(1.04);
        background-color: rgba(8, 186, 249, 0.8);
    }

    .detail-item {
        width: 33%;
        margin-bottom: 6vh;
    }

    .example {
        padding-top: 11.7vw;
        text-align: center;

        .detail-items-wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-line-pack: justify;
            align-content: space-between;
        }

        .swiper-container {
            width: 28.9vw;
            height: 45.7vw;
            position: relative;
            top: 2.3vw;
        }

        .img-container {
            width: 85.9vw;
            margin: 7.8vw auto;
            position: relative;

            .tip {
                font-size: 1.2vw;
                position: absolute;
                color: #10131a;
                font-size: 16px;
                width: 150px;
            }

            .img {
                margin: 0;
                padding: 0;
                border-style: none;
            }
        }

        .detail-wrapper {
            width: 1100px;
            margin: 0 auto;
            text-align: left;

            .detail-item {
                margin: 0;
                width: 43%;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #10131a;
                line-height: 24px;
                padding-bottom: 40px;
                position: relative;
            }
        }
    }

    ul {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    @media screen and (max-width: 1280px){
        .brief-center{
            width: 75vw;
        }
        .core-items-wrapper .core-item{
            width: 25%;
        }
    }
    @media screen and (min-width: 900px){
     /*   .core-content{
            width: 85vw;
            margin: 0 auto;
        }
        .core-items-wrapper .core-item{
            width: 100%;
        }
        .coreProduct .core-content .core-items-wrapper{
            display: block;
        }*/
    }
    @media screen and (min-width: 1280px) {
        .core-items-wrapper {
            width: 70vw;
            margin: 0 auto;

            .core-item {
            }
        }
    }
    @media screen and (max-width: 900px) {
        .core-items-wrapper {
            width: 90vw;
            .core-item {
                width: 80vw;
                margin-bottom: 5vh;
            }
        }
        .core-content, .core-items-wrapper .core-item{
            margin: 0 auto;
            margin-bottom: 4vh;
        }
        .coreProduct .core-content .core-items-wrapper{
            display: block;
        }
        .brief{
            background: url("../assets/brief_pic01.png");
            background-position: right;
            background-size: cover;
        }
        .service .brief .summary{
              padding: 0;
            margin: 0 4vw;
            margin-bottom: 10vh;
          }
        .service .brief .content{
            width: 100%;
        }
        .brief .detail .detail-item-content{
            color: #ffffff;
        }

        .brief-center{
            width: 85vw;
            background:none;
            margin-top: 10vh;
            .detail{
                .detail-item{
                    width: 100%;
                }
            }
        }
    }
</style>
