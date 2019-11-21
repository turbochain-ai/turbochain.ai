<template>
    <div class="news">
        <div class="banner">
            <!-- <img src="http://media.openserver.cn/turbochain/assets/banner-news.png" class="news-img">-->
            <!--<img src="http://media.openserver.cn/turbochain/assets/new_title.png" class="news-pic">-->
            <p class="title">NEWS</p>
        </div>
        <div class="content">
            <div class="title">
                <h1 class="content-title">{{$t("news.Financing.title")}}</h1>
                <h1 class="content-subtitle">{{$t("news.Financing.subtitle")}}</h1>
            </div>
            <div class="text">
                <p class="content-text img_center">
                <img src="http://media.openserver.cn/turbochain/assets/Financing_logo.jpg">
            </p>
                <p class="content-text">
                    {{$t("news.Financing.textOne")}}
                </p>
                <p class="content-text">
                    {{$t("news.Financing.textTwo")}}
                </p>
                <p class="content-text">
                    {{$t("news.Financing.textThree")}}
                </p>
                <p class="content-text">
                    {{$t("news.Financing.textFour")}}
                </p>

                <p class="content-text">
                    {{$t("news.Financing.textFive")}}
                </p>
                <p class="content-text img_center">
                    <img src="http://media.openserver.cn/turbochain/assets/Financing_bottom.jpg">
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
        width: 100%;
        margin-top: 64px;
      .content{
          width: 1200px;
          margin: 0 auto;
          margin-bottom: 10vh;
      }
    }
    .img_center{
        text-align: center;
        img{
            margin-bottom: 6vh;
        }
    }
    .banner {
        background-color: #191d28;
        height: 40vh;
        background: url("http://media.openserver.cn/turbochain/assets/banner-news.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
        .title {
            width:85%;
            padding-top: 10vh;
            font-family: 'Oswald_font';
            font-size: 80px;
            color: #ffffff;
        }
    }
    .content {
      /*  padding: 0vw 10vw 5vw;*/
        .title {
            padding: 5vw 0vw;
            .content-title {
                text-align: center;
                letter-spacing: 0.2vw;
                color: #fff;
                font-size: 2rem;
            }
            .content-subtitle {
                text-align: center;
                letter-spacing: 0.2vw;
                color: #8C8D8C;
                font-size: 1rem;
            }
        }
        .text {
            color: #ffffff;
            .content-text {
                text-indent: 2em;
                font-size: 1rem;
                line-height: 1.5;
                padding: 1vh 0vw;
            }
        }
    }
    @media screen and (max-width: 900px) {
        .news {
            .content{
                width:85vw;
                .img_center{
                    img{
                        width: 100%;
                    }
                }
                .text{
                    .content-text{
                        text-indent:0;
                    }
                }
            }
        }
    }
/*    @media screen and (max-width: 1200px) {
        .news {
            .content{
                width:85vw;
                .img_center{
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }*/
</style>