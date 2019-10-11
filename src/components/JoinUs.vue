<template>
    <div class="join">
        <div class="banner">
            <div class="content">
                <div class="title-container">
                    <h3 class="main-title">LET'S TURBOCHAIN!</h3>
                    <span class="main-subtitle">加入我们</span>
                </div>
                <img src="../assets/let_bg.png" class="let-bg">
                <img src="../assets/let_img_circle.png" class="let_img_circle">
            </div>
        </div>
        <!--        <div class="why">-->
        <!--            <div class="title-container">-->
        <!--                <h3 class="main-title">WHY TURBOCHAIN</h3>-->
        <!--                <span class="main-subtitle">为什么选择泰链</span>-->
        <!--            </div>-->
        <!--            <div class="wrapper" style="background-color: white">-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="1.56vw" class="bubble-wrapper bubble-active" style="width: 6.7vw; height: 6.7vw; top: 1.56vw; left: 33.3vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(54, 73, 105);"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>使命<br>必达</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="8.3vw" class="bubble-wrapper bubble-active" style="width: 12.4vw; height: 12.4vw; top: 8.3vw; left: 21.8vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: -webkit-linear-gradient(top, rgb(151, 92, 196), rgb(71, 173, 212));">-->
        <!--                        </div>-->
        <!--                        <div class="text" style="font-size: 1.5vw;">-->
        <!--                            <span>专业</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="9.3vw" class="bubble-wrapper bubble-active" style="width: 12.8vw; height: 12.8vw; top: 9.3vw; left: 37.5vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(84, 88, 98);">-->
        <!--                        </div>-->
        <!--                        <div class="text" style="font-size: 1.9vw;">-->
        <!--                            <span>实现<br>个人价值</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="12.5vw" class="bubble-wrapper bubble-active" style="width: 10.8vw; height: 10.8vw; top: 12.5vw; left: 6.3vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(30, 35, 48);">-->
        <!--                        </div>-->
        <!--                        <div class="text" style="font-size: 1.4vw;">-->
        <!--                            <span>信任</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="20.1vw" class="bubble-wrapper bubble-active" style="width: 8.2vw; height: 8.2vw; top: 20.1vw; left: 16.1vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: -webkit-linear-gradient(top, rgb(151, 92, 196), rgb(71, 173, 212));"></div>-->
        <!--                        <div class="text" style="font-size: 1vw;">-->
        <!--                            <span>去中心化<br>的管理</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="18.7vw" class="bubble-wrapper bubble-active" style="width: 8vw; height: 8vw; top: 18.7vw; left: 50vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(30, 35, 48);"></div>-->
        <!--                        <div class="text" style="font-size: 1vw;">-->
        <!--                            <span>工作与生活<br>的平衡</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="28.1vw" class="bubble-wrapper bubble-active" style="width: 7.3vw; height: 7.3vw; top: 28.1vw; left: 8.6vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(84, 88, 98);"></div>-->
        <!--                        <div class="text" style="font-size: 1.4vw;">-->
        <!--                            <span>共同<br>成长</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="24.2vw" class="bubble-wrapper bubble-active" style="width: 15vw; height: 15vw; top: 24.2vw; left: 23.4vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(30, 35, 48);"></div>-->
        <!--                        <div class="text" style="font-size: 2vw;">-->
        <!--                            <span>团队合作</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="26.6vw" class="bubble-wrapper bubble-active" style="width: 8.7vw; height: 8.7vw; top: 26.6vw; left: 41.4vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(54, 73, 105);"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>员工关怀</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="26.6vw" class="bubble-wrapper bubble-active" style="width: 8.7vw; height: 8.7vw; top: 26.6vw; left: 58.3vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: -webkit-linear-gradient(top, rgb(151, 92, 196), rgb(71, 173, 212));"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>在工作中学习</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="35.9vw" class="bubble-wrapper bubble-active" style="width: 10.8vw; height: 10.8vw; top: 35.9vw; left: 12vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(54, 73, 105);"></div>-->
        <!--                        <div class="text" style="font-size: 1.4vw;">-->
        <!--                            <span>开放</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="42.2vw" class="bubble-wrapper bubble-active" style="width: 5.1vw; height: 5.1vw; top: 42.2vw; left: 25.3vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: -webkit-linear-gradient(top, rgb(151, 92, 196), rgb(71, 173, 212));"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>同理心</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="39vw" class="bubble-wrapper bubble-active" style="width: 8vw; height: 8vw; top: 39vw; left: 37vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(97, 120, 158);"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>透明</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="34.4vw" class="bubble-wrapper bubble-active" style="width: 10.8vw; height: 10.8vw; top: 34.4vw; left: 48.7vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(43, 55, 88);"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>尊重</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="49.2vw" class="bubble-wrapper bubble-active" style="width: 8.7vw; height: 8.7vw; top: 49.2vw; left: 8.6vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: -webkit-linear-gradient(top, rgb(151, 92, 196), rgb(71, 173, 212));"></div>-->
        <!--                        <div class="text" style="font-size: 1.4vw;">-->
        <!--                            <span>赋能</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="49.2vw" class="bubble-wrapper bubble-active" style="width: 8.6vw; height: 8.6vw; top: 49.2vw; left: 35.9vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: rgb(43, 55, 88);"></div>-->
        <!--                        <div class="text" style="font-size: 1vw;">-->
        <!--                            <span>企业家<br>精神</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="list-bubble-item">-->
        <!--                    <div data-y="46.9vw" class="bubble-wrapper bubble-active" style="width: 7.7vw; height: 7.7vw; top: 46.9vw; left: 54.7vw; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
        <!--                        <div class="circle" style="background: -webkit-linear-gradient(top, rgb(151, 92, 196), rgb(71, 173, 212));"></div>-->
        <!--                        <div class="text" style="font-size: 1.1vw;">-->
        <!--                            <span>国际化</span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--        <div class="life">-->
        <!--            <div class="title-container">-->
        <!--                <div class="title-content">-->
        <!--                    <h3 class="main-title">LIFE AT TURBOCHAIN</h3>-->
        <!--                    <span class="main-subtitle">看看泰链的人怎么玩</span>-->
        <!--                </div>-->
        <!--                <img src="../assets/let_img_circle.png" class="main-img">-->
        <!--            </div>-->
        <!--            <div class="swiper">-->
        <!--                <div class="swiper-life swiper-container swiper-container-horizontal swiper-container-free-mode">-->
        <!--                    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-7553px, 0px, 0px);">-->
        <!--                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item6_img1.eeb0bac.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item6_img2.06e7c51.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item6_img3.e098fef.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item6_img4.cbff9ee.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img5">-->
        <!--                                <img src="/_nuxt/img/life_item6_img5.a788afa.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">培训课堂</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide" data-swiper-slide-index="0" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item1_img1.0cc0c39.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item1_img2.5590d95.png" style="height:100%;width:auto;">-->
        <!--                            </div><div class="img img3">-->
        <!--                            <img src="/_nuxt/img/life_item1_img3.e4758ea.png" style="height:100%;width:auto;">-->
        <!--                        </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item1_img4.7f806a9.png" style="height:100%;width:auto;">-->
        <!--                            </div><div class="img img5">-->
        <!--                            <img src="/_nuxt/img/life_item1_img5.ec58e5e.png" style="height:100%;width:auto;">-->
        <!--                        </div>-->
        <!--                            <div class="img img6">-->
        <!--                                <img src="/_nuxt/img/life_item1_img6.4dac5a1.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">VeChain概况</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide" data-swiper-slide-index="1" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item2_img1.f9e1f93.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item2_img2.058c80c.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item2_img3.b699bfb.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item2_img4.70c964a.png" style="height:100%;width:auto;">-->
        <!--                            </div><div class="img img5">-->
        <!--                            <img src="/_nuxt/img/life_item2_img5.6b2cf4c.png" style="height:100%;width:auto;">-->
        <!--                        </div>-->
        <!--                            <div class="img img6">-->
        <!--                                <img src="/_nuxt/img/life_item2_img6.b5af95f.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">活动</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide" data-swiper-slide-index="2" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item3_img1.f88e295.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item3_img2.ac6ad40.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item3_img3.d35d8a2.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item3_img4.9bc30a7.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="img img5">-->
        <!--                                <img src="/_nuxt/img/life_item3_img5.32cc961.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img6">-->
        <!--                                <img src="/_nuxt/img/life_item3_img6.8e434e3.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">各种爬梯</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide" data-swiper-slide-index="3" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item4_img1.8abbf5e.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item4_img2.51c8046.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item4_img3.2b86f3b.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item4_img4.696646b.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="img img5">-->
        <!--                                <img src="/_nuxt/img/life_item4_img5.4150de5.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="img img6">-->
        <!--                                <img src="/_nuxt/img/life_item4_img6.89a3cff.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">娱乐</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide" data-swiper-slide-index="4" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item5_img1.435563b.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item5_img2.40f43a9.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item5_img3.542e68a.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item5_img4.3605b45.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="img img5">-->
        <!--                                <img src="/_nuxt/img/life_item5_img5.98f450d.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img6">-->
        <!--                                <img src="/_nuxt/img/life_item5_img6.00dad7f.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">体育课</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="5" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item6_img1.eeb0bac.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item6_img2.06e7c51.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item6_img3.e098fef.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item6_img4.cbff9ee.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img5">-->
        <!--                                <img src="/_nuxt/img/life_item6_img5.a788afa.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">培训课堂</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 1079px;">-->
        <!--                            <div class="img img1">-->
        <!--                                <img src="/_nuxt/img/life_item1_img1.0cc0c39.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img2">-->
        <!--                                <img src="/_nuxt/img/life_item1_img2.5590d95.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img3">-->
        <!--                                <img src="/_nuxt/img/life_item1_img3.e4758ea.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img4">-->
        <!--                                <img src="/_nuxt/img/life_item1_img4.7f806a9.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img5">-->
        <!--                                <img src="/_nuxt/img/life_item1_img5.ec58e5e.png" style="height:100%;width:auto;">-->
        <!--                            </div>-->
        <!--                            <div class="img img6">-->
        <!--                                <img src="/_nuxt/img/life_item1_img6.4dac5a1.png" style="height:auto;width:100%;">-->
        <!--                            </div>-->
        <!--                            <div class="swiper-title-wrapper">-->
        <!--                                <h3 class="swiper-title">TurboChain概况</h3>-->
        <!--                                <span class="swiper-subtitle"></span>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    <div class="swiper-buttons">-->
        <!--                        <div slot="button-prev" class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="false"></div>-->
        <!--                        <div slot="button-next" class="swiper-button-next swiper-button-disabled" tabindex="0" role="button" aria-label="Next slide" aria-disabled="true"></div>-->
        <!--                    </div>-->
        <!--                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="job">
            <div class="title-container">
                <h3 class="main-title">HIRING</h3>
                <span class="main-subtitle">招聘职位</span>
            </div>
            <div class="job-content">
                <div class="job-item job-item-left">
                    <div class="position">
                        <img src="../assets/job1.png">
                        <div class="position-box-before"></div>
                        <div class="position-box">
                            <div class="position-title">运维开发工程师</div>
                            <div class="position-content-wrapper">
                                <i class="icon-head"></i>
                                <div class="position-content">
                                    <span class="position-content-location">济南</span>
                                    <span class="position-content-salary">经验5-10年</span>
                                    <span class="position-content-require">大专及以上</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desc">
                        <div class="duty">
                            <h3 class="title">岗位职责</h3>
                            <div class="content">
                                <span>1.参与日常运营维护类工作，保障业务的正常稳定运行；</span>
                            </div>
                            <div class="content">
                                <span>2.快速响应线上突发事件，追踪定位并有效解决业务服务器后端的问题；</span>
                            </div>
                            <div class="content">
                                <span>3.主导推进TurboChain体系的落地，提高运维效率及质量，实现工具化，自动化和平台化；</span>
                            </div>
                            <div class="content">
                                <span>4.参与制定运维资源需求计划，并管理和合理使用运维资源，有效控制整体运维成本；</span>
                            </div>
                            <div class="content">
                                <span>5.参与改进完善现有运营业务体系，提升运维团队专业技能水平，建立规范和高效的运维体系。</span>
                            </div>
                        </div>
                        <div class="requirements">
                            <h3>岗位要求</h3>
                            <div class="content">
                                <span>1.大学专科或以上学历，3年以上运维开发工作经验</span>
                            </div>
                            <div class="content">
                                <span>2.熟悉阿里云、腾讯云等至少一种云计算产品和服务，有大规模云计算平台运维相关经验者优先</span>
                            </div>
                            <div class="content">
                                <span>3.熟悉CI/CD相关工具平台（如gitlab/jenkins等），具有微服务架构以及集群运营管理经验优先</span>
                            </div>
                            <div class="content">
                                <span>4.精通python,具备数据分析和挖掘能力，具备自动化运维开发经验者优先</span>
                            </div>
                            <div class="content">
                                <span>5.熟悉Docker、Kubernetes，具有Kubernetes搭建、配置和管理的经验；</span>
                            </div>
                            <div class="content">
                                <span>6.具有分析大型应用系统架构并进行改进的能力，拥有快速排除系统瓶颈的能力；</span>
                            </div>
                            <div class="content">
                                <span>7.具备良好的沟通能力和团队精神，能很好的组织并实施技术相关工作；</span>
                            </div>
                            <div class="content">
                                <span>8.具有高度的责任心，较好的解决问题能力，具有优秀的自主学习能力，能承受互联网工作压力和快速交付节奏；</span>
                            </div>
                        </div>
                        <div class="content">
                            <span>熟悉区块链相关技术，愿意投身区块链行业。</span>
                        </div>
                    </div>
                </div>
                <div class="job-item job-item-right">
                    <div class="position">
                        <img src="../assets/job1.png">
                        <div class="position-box-before"></div>
                        <div class="position-box">
                            <div class="position-title">资深前端工程师</div>
                            <div class="position-content-wrapper">
                                <i class="icon-head"></i>
                                <div class="position-content">
                                    <span class="position-content-location">济南</span>
                                    <span class="position-content-salary">经验5-10年</span>
                                    <span class="position-content-require">大专及以上</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desc">
                        <div class="duty">
                            <h3 class="title">岗位职责</h3>
                            <div class="content">
                                <span>1.负责企业Web管理系统的前端开发；</span>
                            </div>
                            <div class="content">
                                <span>2.配合后台开发人员实现产品界面和功能；</span>
                            </div>
                            <div class="content">
                                <span>3.与界面设计师合作完成前端页面的人机交互；</span>
                            </div>
                            <div class="content">
                                <span>4.前端代码的质量控制；</span>
                            </div>
                        </div>
                        <div class="requirements">
                            <h3>岗位要求</h3>
                            <div class="content">
                                <span>1.基础扎实，熟练掌握HTML、CSS、JavaScript开发</span>
                            </div>
                            <div class="content">
                                <span>2.熟悉W3C标准与ES规范，熟悉Web语义化</span>
                            </div>
                            <div class="content">
                                <span>3.理解并掌握JavaScript语言常用技术DOM、BOM、Ajax、JSON等</span>
                            </div>
                            <div class="content">
                                <span>4. 熟练掌握盒模型、常用布局</span>
                            </div>
                            <div class="content">
                                <span>5.掌握浏览器端代码调试工具；</span>
                            </div>
                            <div class="content">
                                <span>6.关注性能，能够做出前端性能优化；</span>
                            </div>
                            <div class="content">
                                <span>7.了解不同浏览器的兼容性区别（ChromeSafariMozillaIE）；</span>
                            </div>
                            <div class="content">
                                <span>8.有过工程化实践，以及Gulp或者Webpack任务工具的使用优先；</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="job-item job-item-left">
                    <div class="position">
                        <img src="../assets/job1.png">
                        <div class="position-box-before"></div>
                        <div class="position-box">
                            <div class="position-title">资深jave开发工程师</div>
                            <div class="position-content-wrapper">
                                <i class="icon-head"></i>
                                <div class="position-content">
                                    <span class="position-content-location">济南</span>
                                    <span class="position-content-salary">经验5-10年</span>
                                    <span class="position-content-require">大专及以上</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desc">
                        <div class="duty">
                            <h3 class="title">岗位职责</h3>
                            <div class="content">
                                <span>1.负责相关区块链智能合约、算法的设计和实现；</span>
                            </div>
                            <div class="content">
                                <span>2.参与系统的分析与设计；</span>
                            </div>
                            <div class="content">
                                <span>3.根据业务规划制定相应技术规划，推动系统演进；</span>
                            </div>
                            <div class="content">
                                <span>4.编写相应模块的设计文档，独立完成编码及单元测试。</span>
                            </div>
                            <div class="content">
                                <span>5.独立维护部分系统、改进流程以及交付上线；</span>
                            </div>
                        </div>
                        <div class="requirements">
                            <h3>岗位要求</h3>
                            <div class="content">
                                <span>1.Java基础扎实、熟悉多线程、熟悉J2EE技术架构体系；</span>
                            </div>
                            <div class="content">
                                <span>2.深入理解JVM、JDK相关原理与源码，有一定调优经验</span>
                            </div>
                            <div class="content">
                                <span>3.熟悉常用设计模式比如代理、组合、工厂等并能熟练运用</span>
                            </div>
                            <div class="content">
                                <span>4.熟悉SSM等主流开源框架，有一定的前端开发技能储备</span>
                            </div>
                            <div class="content">
                                <span>5.熟悉微服务(如 SpringCloud)、 缓存（Redis）、消息中间件(RocketMQ、Kafka等)、搜索引擎(Solr)、静态文件服务（HDFS）等技术；</span>
                            </div>
                            <div class="content">
                                <span>6.参与过高并发、高可靠性系统的设计，如负载均衡系统、集群、系统容量评估、流量控制、性能优化、故障排查、日志收集和分析等；</span>
                            </div>
                            <div class="content">
                                <span>7.熟悉数据库建模技术，能基于用户需求和系统设计进行数据库设计；</span>
                            </div>
                            <div class="content">
                                <span>8.熟悉数据库事务、锁的机制，熟练掌握存储过程、触发器等的编程技术；</span>
                            </div>
                            <div class="content">
                                <span>9.熟悉区块链相关技术，愿意投身区块链行业。</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JoinUs"
    }
</script>

<style scoped lang="scss">
    session,div, h3, img {
        margin: 0;
        padding: 0;
    }
    h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    .banner {
        position: relative;
        background-color: #07080c;
        min-height: 700px;
        .content {
            width: 70.3vw;
            height: 100vh;
            margin: 0 auto;
            min-height: 700px;
        }
        .title-container {
            width: 50vw;
            font-size: 14px;
            color: white;
            position: absolute;
            top: 364px;
            z-index: 2;
            .main-title {
                color: #fff;
                font-size: 3.9vw;
                font-family: Oswald-Medium;
                letter-spacing: 3px;
            }
            .main-subtitle {
                height: 1.25vw;
                margin-top: 2vw;
                font-size: 1.1vw;
                display: inline-block;
                font-family: Oswald-Medium;
            }
        }
        .let-bg {
            width: 70.3vw;
            height: 48.8vw;
            position: absolute;
            top: 144px;
            margin: 0;
            padding: 0;
            border-style: none;
        }
        .let_img_circle {
            width: 7.8vw;
            height: 7.8vw;
            position: absolute;
            bottom: -3.9vw;
            left: 23.545vw;
        }
    }
    .job {
        width: 100%;
        background-color: white;
        background-position: top;
        background-size: contain;
        .title-container {
            width: 70.3vw;
            margin: 0 auto;
            color: #000;
            .main-title {
                font-size: 3.9vw;
                font-family: Oswald-Medium;
                letter-spacing: 3px;
            }
            .main-subtitle {
                margin-top: 2vw;
                font-size: 1.1vw;
                display: inline-block;
                font-family: Oswald-Medium;
            }
        }
        .job-content {
            margin-top: 3.47vw;
            height: 146.195vw;
            .job-item {
                width: 83.3vw;
                height: 45.34vw;
                margin-bottom: 10.4vw;
                margin: 0 auto;
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;
                .position {
                    width: 31.202vw;
                    height: 31.25vw;
                    position: relative;
                    background: url(../assets/job_item_bg.png) no-repeat;
                    background-position: 0 0;
                    background-size: contain;
                    img {
                        position: absolute;
                        top: 3.2vw;
                        left: 3.9vw;
                        width: 20.8vw;
                    }
                    .position-box-before {
                        width: 19.4vw;
                        height: 2.8vw;
                        content: "";
                        position: absolute;
                        top: 13.9vw;
                        left: 15.53vw;
                        display: block;
                        background: url(../assets/turbochain_logo.png) no-repeat;
                        background-position: 20px;
                        background-size: 90px 12px;
                        background-color: #2b3758;
                        border-radius: 10px 10px 0 0;
                    }
                    .position-box {
                        top: 16.7vw;
                        left: 15.6vw;
                        width: 16.81vw;
                        height: 18.54vw;
                        padding-left: 1.3vw;
                        padding-right: 1.3vw;
                        border-radius: 0 0 10px 10px;
                        background-color: #fff;
                        -webkit-box-shadow: 0 0 92px 0 #d6d6d6;
                        box-shadow: 0 0 92px 0 #d6d6d6;
                        position: absolute;
                        .position-title {
                            padding: .7vw 1.4vw;
                            margin-top: 1.1vw;
                            margin-bottom: 1.4vw;
                            font-size: 1.4vw;
                            display: inline-block;
                            font-family: PingFangSC-Semibold;
                            color: #191d28;
                            background-color: #f4f4f6;
                            border: 1px solid #cbcbcb;
                            border-radius: 8px;
                            text-align: center;
                        }
                        .position-content-wrapper {
                            padding-top: 1.4vw;
                            width: 100%;
                            height: 7.062vw;
                            border-top: 1px solid #e3e3e4;
                            display: flex;
                            -webkit-box-pack: justify;
                            justify-content: space-between;
                            color: #191d28;
                            .icon-head {
                                display: inline-block;
                                width: 25px;
                                height: 25px;
                                background: url(../assets/job_icon_head.png) no-repeat;
                                background-position: 50%;
                                background-size: contain;
                            }
                        }
                        .position-content {
                            width: 13.9vw;
                            border-radius: 6px;
                            padding: 1.2vw 1.7vw;
                            span {
                                display: block;
                                margin-bottom: 7px;
                                font-size: 12px;
                            }
                        }
                        .position-content-location {
                            font-size: 1vw;
                            font-family: PingFangSC-Medium;
                        }
                    }
                }
                .desc {
                    width: 33.3vw;
                    .content {
                        font-size: .9vw;
                        line-height: 1.8vw;
                    }
                }
            }
        }
    }
</style>