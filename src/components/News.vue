<template>
    <div class="news">
        <div class="banner">
            <img src="../assets/banner-news.png" class="news-img">
            <img src="../assets/new_title.png" class="news-pic">
        </div>
        <div class="news-items">
            <div class="news-item cursor-pointer">
                <div class="left-image-con">
                    <img src="../assets/new_item_01.png" class="news-img-item">
                </div>
                <div class="right-cont-con">
                    <h3 class="right-date">2019-06-06</h3>
                    <h3 class="right-title">首部基于区块链的大型网络剧《泉岛之恋》先导片发布</h3>
                    <div class="right-summary">
                        <p>首部基于区块链的大型网络剧，追踪济青两地年轻人创新、创业、情感历程，全面展现新旧动能转换下充满激情与梦想的新山东。</p>
                    </div>
                    <a class="right-link" href="http://springislandlove.openserver.cn/">查看详情>></a>
                </div>
            </div>
            <div class="news-item cursor-pointer">
                <div class="left-image-con">
                    <img src=" " class="news-img">
                </div>
                <div class="right-cont-con">
                    <h3 class="right-date">2019-9-30</h3>
                    <h3 class="right-title">星际数字加密资产交易平台试运营</h3>
                    <div class="right-summary">
                        <p>turbochain团队打造的星际数字加密资产交易平台已全面试运营。目前支持多个交易币对进行币币交易、法币交易，可满足用户多种交易需求。</p>
                    </div>
                    <a class="right-link">查看详情>></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped lang="scss">
    .banner {
        background-color: #191d28;
        position: relative;
        min-height: 300px;
        .news-img {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .news-pic {
            position: absolute;
            width: 27.412vw;
            height: 7.11vw;
            top: 10vw;
            left: 8vw;
        }
    }
    .news-items {
        text-align: center;
        width: 100%;
        display: inline-block;
        padding: 0 140px;
        position: relative;
        background-color: #191d28;
    }
    .news-item {
        background-color: #fff;
        -webkit-box-shadow: 0 2px 2px #ededed;
        box-shadow: 0 2px 2px #ededed;
        border: 1px solid #ededed;
        margin: 20px 0;
        position: relative;
        height: 280px;
        padding-left: 290px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .left-img-con, .news-img {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .left-img-con {
        height: 280px;
        width: 280px;
        position: absolute;
        left: 0;
        top: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .news-img-item {
        position: absolute;
        left: 0vw;
    }
    .right-cont-con {
        height: 21.9vw;
        padding: 3.125vw;
    }
    .right-date {
        font-size: 14px;
        line-height: 27px;
        font-weight: 400;
        text-align: left;
    }
    .right-title {
        text-align: left;
    }

</style>