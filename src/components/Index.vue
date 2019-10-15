import Vue from 'vue'
import banner from 'vue-banner'
Vue.use(banner)
<template>
    <div>
        <div id="banner">
            <div class="wrapper">
                <swiper :options="swiperOption">
                    <swiper-slide class="warpper_img img01" key="1"></swiper-slide>
                    <swiper-slide class="warpper_img img02" key="2"></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="main">
            <div class="main01">
                <video autoplay muted loop poster="../assets/earth.jpg" class="bgvid" id="bgvid">
                    <source src="../assets/earth.mp4" type="video/mp4">
                </video>
                <div class="main01_right">
                    <div class="what-container">
                        <p class="title main-title">WHAT IS TURBOCHAIN</p>
                        <p class="subtitle main-subtitle">{{$t("index.subtitle")}}</p>

                        <ul class="list">
                            <li class="item">
                                <span class="item-num">01</span>
                                <div class="item-content">
                                    <span class="item-title">{{$t("index.team")}}</span>
                                    <span class="item-subtitle">{{$t("index.teamIntro")}}</span>
                                </div>
                            </li>
                            <li class="item"><span class="item-num">02</span>
                                <div class="item-content">
                                    <span class="item-title">{{$t("index.business")}}</span>
                                    <span class="item-subtitle">{{$t("index.businessIntro")}}</span>
                                </div>
                            </li>
                            <li class="item"><span class="item-num">03</span>
                                <div class="item-content">
                                    <span class="item-title">{{$t("index.friendly")}}</span>
                                    <span class="item-subtitle">{{$t("index.friendlyIntro")}}</span>
                                </div>
                            </li>
                            <li class="item"><span class="item-num">04</span>
                                <div class="item-content">
                                    <span class="item-title">{{$t("index.assign")}}</span>
                                    <span class="item-subtitle">{{$t("index.assignIntro")}}</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div style="clear: both"></div>
            </div>
            <div class="main02">
                <p class="title main-title">SOLUTIONS</p>
                <p class="subtitle main-subtitle">{{$t("index.solutions")}}</p>
                <!--<p class="main-title main02_title" style="text-align: center;">区块链解决方案</p>-->
                <div class="card-container">
                    <a class="card-list card01">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.blockConstruction")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.construction.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.construction.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p>{{$t("index.construction.advantages")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card02">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.tradingSystem")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.trading.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.trading.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p>{{$t("index.trading.advantages")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card03">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.blockChainWallet")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p> {{$t("index.wallet.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.wallet.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p>{{$t("index.wallet.advantages")}}
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card04">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.redEnvelopeModule")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.envelope.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.envelope.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p>{{$t("index.envelope.advantages")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card05">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.chatModule")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.chat.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.chat.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p>{{$t("index.chat.advantages")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card06">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.smartContractDevelopment")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.smartContract.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.smartContract.function")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card07">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.blockChainECommerce")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.ECommerce.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t("index.ECommerce.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p> {{$t("index.ECommerce.advantages")}}</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card08">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.cloudMiningMachine")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t("index.miningMachine.service")}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p> {{$t("index.miningMachine.function")}}</p>
                                <h4>{{$t("index.featuresAndAdvantages")}}</h4>
                                <p>{{$t("index.miningMachine.advantages")}}</p>
                            </div>
                        </div>
                    </a>

                    <a class="card-list card09">
                        <div class="card-content">
                            <p class="card-title">{{$t("index.customizedService")}}</p>
                            <div class="content">
                                <h4>{{$t("index.productsAndServices")}}</h4>
                                <p>{{$t('index.trading.service')}}</p>
                                <h4>{{$t("index.functionIntroduction")}}</h4>
                                <p>{{$t('index.trading.function')}}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Caspanel from "iview/src/components/cascader/caspanel";

    export default {
        name: "Index",
        components: {Caspanel},
        data: function () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: "0001",
                    imgUrl: "/assets/banner_turbochain01.png"
                }, {
                    id: "0002",
                    imgUrl: "/assets/banner_turbochain02.png"
                }],
                timer: null, //定时器
                mark: 0, //比对图片索引的变量
                imgArray: [//图片路径
                    require('../assets/banner_turbochain01.png'),
                    require('../assets/banner_turbochain01.png'),
                    require('../assets/banner_turbochain01.png'),
                    require('../assets/banner_turbochain01.png')
                ],
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 3000,
                    speed: 1000,
                    debugger: true,
                }
            }
        },

        methods: {
            autoPlay() {
                this.mark++;
                if (this.mark === 4) {
                    this.mark = 0
                }
            },
            play() {
                this.timer = setInterval(this.autoPlay, 25000)
            },
            change(i) {
                this.mark = i
            },
            stop() {
                clearInterval(this.timer)
            },
            move() {
                this.timer = setInterval(this.autoPlay, 25000)
            }
        },
        created() {
            this.play()
        }
    }
</script>
<style scoped lang="scss">
    #banner {
        margin-top: 64px;
        /* height: 600px;*/
    }

    .bgvid {
        background: url("./../assets/earth.mp4") no-repeat center;
    }

    video#bgvid {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        top: 5%;
        width: auto;
        left: -15%;
        z-index: -100;
        background-size: cover;
    }

    .main01 {
        position: relative;
        overflow: hidden;
        /* margin-top: 5vh;*/
    }

    .wrapper {
        height: 100%;
        margin: 0 auto;
        background: #ccc;

        .warpper_img {
            height: 46.9vw;

        }

        .img01 {
            background: url("./../assets/banner_turbochain01.png") no-repeat center;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
        }

        .img02 {
            background: url("./../assets/banner_turbochain02.png") no-repeat center;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
        }
    }

    .swiper-img {
        height: 100%;
        margin: 0 auto;
    }


    div {
        margin: 0 auto;
    }

    p {
        padding: 0px;
        margin: 0 auto;
    }

    .main02 {
        max-width: 1280px;
        margin-top: 120px;

        .main-title, .subtitle {
            text-align: center;
        }

    }

    .main02_title {
        padding-top: 4rem;
    }

    .card-title {
        font-weight: bold;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .card-container {
        margin-bottom: 4rem;
        margin-top: 60px;
    }

    .card-content {
        border-radius: 4px;
    }

    .card-content .content {
        font-size: 0.9rem;
        color: #eeeeee;
    }

    .card-content .content h4 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .card-list {
        cursor: pointer;
        border-radius: 4px;
        width: 30%;
        height: 50vh;
        margin: 10px;
        color: #ffffff;
        /* text-align: right;*/
        display: inline-table;
        position: relative;
        transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
    }

    .card-content {
        background-color: rgba(8, 186, 249, 0.1);
        height: 100%;
        padding: 1rem;
        transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
    }

    .card-list:hover .card-content {
        background-color: rgba(8, 186, 249, 0.8);

    }

    .card-list:hover {
        transform: scale(1.02);

    }

    .card01 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card01.jpg");
        /* background: url("./../assets/card01.png") no-repeat center;*/
    }

    .card02 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card02.jpg");
    }

    .card03 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card03.jpg");
    }

    .card04 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card04.jpg");
    }

    .card05 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card05.jpg");
    }

    .card06 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card06.jpg");
    }

    .card07 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card07.jpg");
    }

    .card08 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card08.jpg");
    }

    .card09 {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./../assets/card09.jpg");
    }

    .card-title {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }


    .main01_right {
        width: 780px;
        width: 50%;
        float: right;
        margin-right: 5%;
    }

    .list {
        width: 100%;
        padding: 0px;
        margin: 6rem 0rem;
    }

    .item {
        margin-bottom: 50px;
        /*float: left;*/
        width: 40%;
        display: inline-flex;
      /*  max-width: 50%;
        min-height: 150px;*/
        padding-right: 9%;
    }

    /*
        .item-content {
            width: 300px;
        }
    */
    .item-num {
        margin-right: 24px;
        min-width: 46px;
        width: 46px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 24px;
        border: 1px solid #58baf9;
    }

    .item-title {
        color: #ffffff;
    }

    .item-num {
        color: #bebfc0;
    }

    .item-title {
        font-size: 1rem;
        display: block;
        margin-bottom: 1rem;
    }

    .item-subtitle {
        /*padding-left: 17px;*/
        color: #bebfc0;
        width: 80%;
        line-height: 1.5;
        font-size: 0.8rem;
    }

    .main-title {
        color: #fff;
        font-size: 58px;
        /* font-family: Oswald-Medium;*/
        font-family: 'Oswald_font';
        font-weight: bold;
        margin: 0 auto;
        margin-bottom: 20px;
        line-height: 1.15;
    }

    .main-subtitle {
        color: #bebfc0;
        font-size: 28px;
    }

    .what-container {
        margin-top: 120px;
    }

    @media screen and (min-width: 1280px) {
        #banner {
            .warpper_img {
                height: 600px;
            }
        }
    }

    @media screen and (max-width: 900px) {
        .card-container {
            width: 85vw;

            .card-list {
                width: 100%;
            }
        }
        .main01{
            .main01_right {
                width: 85vw;
                float: none;
                margin: 0 auto;
                .what-container{
                    .main-title, .main-subtitle{
                        text-align: center;
                        width: 85vw;
                    }
                    .list{
                        width: 85vw;
                        margin: 0 auto;
                        display: block;
                        margin-top: 10vh;
                        .item{
                            width: 100%;
                            margin-bottom: 12vh;
                            .item-num{
                                width: 6vw;
                                min-width: 6vw;
                                height: 6vw;
                                line-height: 6vw;
                                font-size: 1rem;
                            }
                            .item-content{
                                text-align: left;
                                margin-left: 0;
                            }
                        }
                    }
                }
            }
        }


    }
</style>

