<template>
    <div class="news">
        <div class="banner">
            <!-- <img src="../assets/banner-news.png" class="news-img">-->
            <!--<img src="../assets/new_title.png" class="news-pic">-->
            <p class="title">NEWS</p>
        </div>
        <div class="content">
            <div class="title">
                <h1 class="content-title">首部基于区块链的大型网络剧先导片发布</h1>
                <h1 class="content-subtitle">发稿人: turbochain  2019-06-06 17:05:29</h1>
            </div>
            <div class="text">
                <p class="content-text">
                在过去的两年时间里，区块链技术夺目地走进了公众的视野，并且发展势头迅猛，各行各业寻求与区块链技术的结合，以此来产生巨大的商业价值。2019年作为区块链应用落地的元年，区块链行业关注的焦点是区块链的场景落地和应用落地方向。为了顺应大趋势，影视产业链也加入了区块链应用的时代。
                </p>
                <p class="content-text">
                近年来，我国的影视文化产业发展迅速，但是在繁荣的背后，隐藏着作品质量良莠不齐，版权侵权，利益分配不透明等许多亟待解决的问题，区块链技术的出现，使得解决这些问题成为可能。
                </p>
                <p class="content-text">
                turbochain成立以来，一直致力于区块链影视应用的落地。区块链影视是turbochain团队开发的基于区块链为底层的全球影视产业链条智能化的合作应用平台。
                区块链影视将区块链和影视链像结合，利用区块链交易透明化、去中心化、交易不可篡改等特性，支持开支公开化、盈利公开化、分红公开化、流通去中心化、
                资产去中心化，人人都可参与，改变了传统的融资方式，可以解决了出品方的资金问题。
                </p>
                <p class="content-text">
                经过各方的不懈努力和积极筹备，首部基于区块链的大型网络剧《泉岛之恋》先导片终于和大家见面了。
                </p>
                <p class="content-text">
                    <img src="../assets/service_qdzl.jpg">
                </p>
                <p class="content-text">
                《泉岛之恋》作为首部基于区块链的大型网络剧，通过追踪济青两地年轻人创新、创业、情感历程，反映当代青年的拼搏创业，展现当代青年的美好生活，全面展现新旧动能转换下充满激情与梦想的新山东。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "videoNews"
    }
</script>

<style scoped lang="scss">
    .news {
        margin-top: 64px;
    }
    .banner {
        background-color: #191d28;
        height: 40vh;
        background: url("../assets/banner-news.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
        .title {
            width:1200px;
            padding-top: 10vh;
            font-family: 'Oswald_font';
            font-size: 80px;
            color: #ffffff;
        }
    }
    .content {
        padding: 0vw 10vw 5vw;
        .title {
            padding: 5vw 0vw;
            .content-title {
                text-align: center;
                letter-spacing: 0.2vw;
            }
            .content-subtitle {
                text-align: center;
                letter-spacing: 0.2vw;
                color: #8C8D8C;
            }
        }
        .text {
            .content-text {
                text-indent: 2em;
                font-size: 1vw;
                line-height: 2vw;
                padding: 1vw 0vw;
            }
        }
    }
</style>