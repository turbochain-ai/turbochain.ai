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
                    <h3 class="right-title">{{$t("news.itemOne.title")}}</h3>
                    <p class="right-date">{{$t("news.itemOne.date")}}</p>
                    <p class="right-summary">{{$t("news.itemOne.summary")}}</p>
                </div>
                <span class="right-link" >{{$t("news.more")}}</span>
            </a>
            <a class="news-item" href="http://ipex.openserver.cn/" target="_blank">
                <img class="news-img-item" src="../assets/new_item_02.jpg">
                <div class="right-cont-con">
                    <h3 class="right-title">{{$t("news.itemTwo.title")}}</h3>
                    <p class="right-date">{{$t("news.itemTwo.date")}}</p>
                    <p class="right-summary">{{$t("news.itemTwo.summary")}}</p>
                </div>
                <span class="right-link" >{{$t("news.more")}}</span>
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