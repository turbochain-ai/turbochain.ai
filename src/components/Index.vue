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
                        <p class="subtitle main-subtitle">全球领先的区块链企业应用服务平台</p>

                        <ul class="list">
                            <li class="item">
                                <span class="item-num">01</span>
                                <div class="item-content">
                                    <span class="item-title">全球化专业团队</span>
                                    <span class="item-subtitle">目前团队和分支机构遍布中国、欧洲、美国、新加坡、日本等多个国家和地区</span>
                                </div>
                            </li>
                            <li class="item"><span class="item-num">02</span>
                                <div class="item-content">
                                    <span class="item-title">丰富的区块链应用商业生态</span>
                                    <span class="item-subtitle">银行询证、食品安全、电商等多领域区块链企业应用成功案例，打破信息孤岛，打造创新协同和商业模式</span>
                                </div>
                            </li>
                            <li class="item"><span class="item-num">03</span>
                                <div class="item-content">
                                    <span class="item-title">对企业和开发者友好的区块链平台</span>
                                    <span class="item-subtitle">提供灵活安全的区块链基础设施、软硬件结合的一站式解决方案，方便各类企业和开发者快速接入部署</span>
                                </div>
                            </li>
                            <li class="item"><span class="item-num">04</span>
                                <div class="item-content">
                                    <span class="item-title">合作伙伴推进区块链应用落地</span>
                                    <span class="item-subtitle">遍布全球的商业和技术合作伙伴，相互赋能共同推动区块链应用的落地与创新</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div style="clear: both"></div>
            </div>
            <div class="main02">
                <p class="title main-title">SOLUTIONS</p>
                <p class="subtitle main-subtitle">区块链解决方案</p>
                <!--<p class="main-title main02_title" style="text-align: center;">区块链解决方案</p>-->
                <div class="card-container">
                    <a class="card-list card01">
                        <div class="card-content">
                            <p class="card-title">区块链搭建</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>1.基于Turbochain架构的公链 2.基于Turbochain架构的联盟链 3.基于Turbochain架构的私链</p>
                                <h4>功能介绍</h4>
                                <p>1.根据定制需求，指定数据上链 2.配合其他产品打造区块链生态</p>
                                <h4>特点和优势</h4>
                                <p>1.模块独立，消息队列结构
                                    2.可扩展性强，模块可插拔
                                    3.平行链技术，执行与状态分离
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card02">
                        <div class="card-content">
                            <p class="card-title">行情交易系统</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>数字资产行情交易系统</p>
                                <h4>功能介绍</h4>
                                <p> 1.区块链基础知识 2.数字加密资产介绍 3.区块链的落地应用 4.数字加密资产开发和管理 5.通证经济 6.其他</p>
                                <h4>特点和优势</h4>
                                <p>可大幅提升事务执行效率
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card03">
                        <div class="card-content">
                            <p class="card-title">区块链钱包</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p> 1.热钱包 2.冷钱包 3.蓝牙钱包</p>
                                <h4>功能介绍</h4>
                                <p>1.支持多条主链与平行链资产存储与转帐 2.用户自主管理私钥 3.Dapp应用智能交互 4.支持托管账户系统</p>
                                <h4>特点和优势</h4>
                                <p> 1.离线钱包与在线钱包智能交互，转帐更安全，使用更便捷。
                                    2.私钥完全自主管理，不依赖第三方。
                                    3.多钱包切换管理，资产管理更方便。
                                    4.中心化托管账户钱包，便捷创建钱包， 不用担心资产丢失，随时随地恢复资产。
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card04">
                        <div class="card-content">
                            <p class="card-title">红包模块</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>红包模块</p>
                                <h4>功能介绍</h4>
                                <p>1.支持多种数字资产红包 2.红包实时到账 3.数字资产可自由划转</p>
                                <h4>特点和优势</h4>
                                <p>1.红包方式新颖有趣
                                    2.托管账户红包
                                    3.红包数据记录在链上
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card05">
                        <div class="card-content">
                            <p class="card-title">聊天模块</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>聊天模块</p>
                                <h4>功能介绍</h4>
                                <p>1.私密聊天 2.好友管理 3.好友添加保护 4.支持多媒体（文字、图片、视频） 5.支持阅后即焚 6.支持社群管理</p>
                                <h4>特点和优势</h4>
                                <p> 1.避免中心化聊天平台的信息泄露的可能
                                    2.更好的客户管理能力和社群管理效力
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card06">
                        <div class="card-content">
                            <p class="card-title">智能合约开发</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>编写贴合所需应用场景的智能合约</p>
                                <h4>功能介绍</h4>
                                <p>1.EVM虚拟机支持，兼容以太坊
                                    2.GO, JS, Java,python, C++等语言智能合约</p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card07">
                        <div class="card-content">
                            <p class="card-title">区块链电商</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>1.区块链电子商城 2.区块链积分商城 3.区块链积分联盟 4.区块链物流追溯系统 5.区块链合同存证系统</p>
                                <h4>功能介绍</h4>
                                <p> 1.交易上链（交易信息）
                                    2.商品上链（出产地、物流、消费）
                                    3.积分上链（发放、流转、兑换、消费、销毁）
                                    4.数字资产支付（替代现有中心化模式）
                                </p>
                                <h4>功能介绍</h4>
                                <p> 1.可以对商品防伪溯源
                                    2.链上可实时查看交易信息
                                    3.积分发放和管理、消费全透明
                                    4.去中心化支付系统客户更放心
                                </p>
                            </div>
                        </div>
                    </a>
                    <a class="card-list card08">
                        <div class="card-content">
                            <p class="card-title">云矿机</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p>云矿机</p>
                                <h4>功能介绍</h4>
                                <p> 1.数字资产云挖矿 2.矿池管理 3.数字资产管理（划转、冻结、解冻）
                                </p>
                                <h4>特点和优势</h4>
                                <p> 1.实现链上资产智能分配；
                                    2.有助于数字资产管理和激励
                                </p>
                            </div>
                        </div>
                    </a>

                    <a class="card-list card09">
                        <div class="card-content">
                            <p class="card-title">定制化服务</p>
                            <div class="content">
                                <h4>产品和服务</h4>
                                <p> 1.公链开源代码上传至项目方Github账户； 2.公链兼容币钱包，链上发行的数字资产可在币钱包内存储、转账； 3.提供公链建设生态所需接口、文档，含TOKEN发行….
                                </p>
                                <h4>功能介绍</h4>
                                <p> 1.区块链基础知识 2.数字加密资产介绍
                                    3.区块链的落地应用4.数字加密资产开发和管理
                                    5.通证经济
                                    6.其他
                                </p>
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
        height: 400px;
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
                            margin-bottom: 16vh;
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

