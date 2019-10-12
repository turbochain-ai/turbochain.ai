<template>
    <div class="news">
        <div class="banner">
           <!-- <img src="../assets/banner-news.png" class="news-img">-->
            <!--<img src="../assets/new_title.png" class="news-pic">-->
            <p class="title">NEWS</p>
        </div>
        <div class="news-items">
            <a class="news-item" href="http://springislandlove.openserver.cn/" target="_blank">
                <img class="news-img-item" src="../assets/new_item_01.jpg">
                <div class="right-cont-con">
                    <h3 class="right-title">首部基于区块链的大型网络剧《泉岛之恋》先导片发布</h3>
                    <p class="right-date">2019-06-06</p>
                    <p class="right-summary">首部基于区块链的大型网络剧，追踪济青两地年轻人创新、创业、情感历程，全面展现新旧动能转换下充满激情与梦想的新山东。</p>
                </div>
                <span class="right-link" >查看详情>></span>
            </a>
            <a class="news-item" href="http://ipex.openserver.cn/" target="_blank">
                <img class="news-img-item" src="../assets/new_item_02.jpg">
                <div class="right-cont-con">
                    <h3 class="right-title">星际数字加密资产交易平台试运营</h3>
                    <p class="right-date">2019-06-06</p>
                    <p class="right-summary">turbochain团队打造的星际数字加密资产交易平台已全面试运营。目前支持多个交易币对进行币币交易、法币交易，可满足用户多种交易需求。</p>
                </div>
                <span class="right-link" >查看详情>></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News"
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

    .news-items {
        text-align: center;

        display: inline-block;
        /*  padding: 0 140px;*/
        position: relative;
        color: #333333;
        margin: 10vh 0;
    }

    .news-item {
        width: 1200px;
        background-color: #fff;
        border-radius: 1vh;
        display: inline-block;
        cursor: pointer;
        margin-bottom: 2vh;
        padding: 4vh;
        position: relative;
        color: #333333;

        .news-img-item {
            /* position: absolute;*/
            left: 0vw;
            float: left;
            width: 240px;
            border-radius: 1vh;
            /* padding: 2vw;*/
        }

        .right-cont-con {
            /* padding: 2vw;*/
            width:800px;
            float: right;

            .right-date {
                font-size: 14px;
                line-height: 27px;
                font-weight: 400;
                text-align: left;
            }

            .right-title {
                text-align: left;
                margin: 0 auto;
            }

            .right-summary {
                text-align: left;
                margin-top: 2vh;
            }
        }

        .right-link {
            display: block;
            text-align: right;
            position: absolute;
            color: #999999;
            font-size: 0.6rem;
            right: 4vh;
            bottom: 4vh;
        }
    }

    .news-item:hover {
        color: #1f6bb9;
    }

    @media screen and (max-width: 900px) {
        .banner {
            .title {
                width: 85vw;
            }
        }
        .news-item {
              width: 80vw;
            padding: 4vw;
        .news-img-item {
            width:60%;
            margin: 0 20%;
        }
            .right-cont-con {
                margin: 4vh 0;
                width: 100%;
            }
        }

        }

</style>