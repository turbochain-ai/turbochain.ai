<template>
    <div class="news">
        <div class="banner">
            <p class="title">NEWS</p>
        </div>
        <div class="content">
            <div class="title">
                <h1 class="content-title">{{$t("news.exchange.title")}}</h1>
                <h1 class="content-subtitle">{{$t("news.exchange.subtitle")}}</h1>
            </div>
            <div class="text">
                <p class="content-text">
                    {{$t("news.exchange.textOne")}}
                </p>
                <p class="content-text">
                    {{$t("news.exchange.textTwo")}}
                </p>
                <p class="content-text">
                    {{$t("news.exchange.textThree")}}
                </p>
                <p class="content-text">
                    <img src="../assets/new_item_02.jpg">
                </p>
                <p class="content-text">
                    {{$t("news.exchange.textFour")}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExchangeNews"
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