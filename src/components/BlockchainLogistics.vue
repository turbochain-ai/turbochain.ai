<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                        <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                        <div class="title">SOLUTION</div>
                        <div class="subtitle">{{$t("solution.logisticsTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        TURBOCHAIN将通过重新定义全球点对点物流来帮助数百万人参与全球共享经济。
                        <br> 我们正在使用区块链技术创建一个去中心化的网络，用户可以在其中创建对本地和跨境交付服务的请求。
                        <br>用户还可以为网络上的请求执行存储和交付功能，从而获得额外收入作为提供服务的付款。
                    </p>
                </div>
                <a class="more" href="https://mulechain.com/" target="_blank">
                    <span>查看更多</span>
                </a>
            </div>
        </div>


        <div class="demand">
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">业务痛点及需求</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/mulechain_pic_01.png" alt="" class="img">
                    <p class="subtitle">效率低</p>
                    <p class="text">传统的点对点物流，由于运输成本，利润等原因，会采用整车发货，导致发货时间不定，运输耗时长</p>
                </div>
                <div class="item">
                    <img src="../assets/mulechain_pic_02.png" alt="" class="img">
                    <p class="subtitle">货物安全无法保证</p>
                    <p class="text">点对点物流风险高，一般是中小型企业，货物易发生丢失、破损等问题</p>
                </div>
                <div class="item">
                    <img src="../assets/mulechain_pic_03.png" alt="" class="img">
                    <p class="subtitle">物流管理混乱</p>
                    <p class="text">物流从业人事普遍文化不高，公司专业管理混乱</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">TURBOCHAIN</div>
                <div class="subtitle">方案概述</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="../assets/mulechain_icon_01.png">
                    <p class="message">TURBOCHAIN使用区块链技术创建一个去中心化的网络，用户可以在其中创建对本地和跨境交付服务的请求。</p>
                </li>
                <li class="item">
                    <img src="../assets/mulechain_icon_02.png">
                    <p class="message">用户还可以为网络上的请求执行存储和交付功能，从而获得额外收入作为提供服务的付款。</p>
                </li>
            </ul>
        </div>
        <div class="advantage">
            <div class="title-box">
                <div class="title">ADVANTAGES</div>
                <div class="subtitle">优&nbsp;&nbsp;势</div>
            </div>
            <div class="content bag1">
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>效率高</p>
                    </div>
                    <p class="text">骡友根据旅行的地点和日期匹配货物，可快速高效的运输货物</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>安全可靠</p>
                    </div>
                    <p class="text">骡友捎带货物量少，可保证货物安全</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>物流管理</p>
                    </div>
                    <p class="text">增强了溯源的技术能力，实现了信息的有效记录，信息的全流程跟踪</p>
                </div>
            </div>
        </div>
        <div class="contrast">
            <table>
                <tbody>
                <tr>
                    <th>
                        <p>对比项</p>
                    </th>
                    <th>
                        <p>TURBOCHAIN解决方案</p>
                    </th>
                    <th>
                        <p>传统点对点物流</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>时效性</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>时效性好</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>时效性差</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>安全性</p>
                    </td>
                    <td class="list_12">
                        <p>放丢失，可溯源</p>
                    </td>
                    <td class="list_13">
                        <p>易丢失，损坏</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--    <div class="case">成功案例</div>-->
    </div>
</template>

<script>
    export default {
        name: "BlockchainLogistics"
    }
</script>

<style scoped lang="scss">
    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    .Rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 24s linear infinite;
        -moz-animation: rotation 24s linear infinite;
        -webkit-animation: rotation 24s linear infinite;
        -o-animation: rotation 24s linear infinite;
    }
    .rotation_style{
        width: 100%;
        position: absolute;
        margin-top: -34%;
    }
    .introduce{
        display: flex;
        height: 90vh;
        background:url("./../assets/images/Solution_bg4.jpg") no-repeat center;
        position: relative;
        .introduce_box{
            position: relative;
            min-width:1000px;
            margin: 0 auto;
            .more{
                position: absolute;
                bottom: 10vh;
                right: 2vw;
                color: #ffffff;
                display: block;
                width: 197px;
                height: 56px;
                line-height: 56px;
                /*border: 1px solid #ffffff;*/
                background: url("./../assets/btn_bg.png") no-repeat center;
                span{
                    display: block;
                    text-align: center;
                }
                span:after{
                    content: "";
                    display: inline-block;
                    margin-left: 12px;
                    width: 7px;
                    height: 11px;
                    background: url("./../assets/arrow_right.png") no-repeat center;
                }
            }
            .left{
                width: 50%;
                position: absolute;
                /* top: 30vh;
                 left: 10vh;*/
                height: 60%;
               /* background:url("./../assets/solution_title_bg.png") no-repeat center;*/
                background-size: 500px;
                padding-top: 36vh;
                .title{
                    font-size: 80px;
                    font-family: 'Oswald_font';
                }
                .subtitle{
                    font-size: 30px;
                    color: #ffffff;
                }
            }
            .right{
                width: 410px;
                position: absolute;
                right: 0;
                top: 25vh;
                padding: 1vh;
                /* border: 1px solid rgba(255,255,255,0.5);*/
                p{
                    font-size: 20px;
                    text-align: justify;
                }
            }
            .right:before{
                content: "";
                position: absolute;
                z-index: 1;
                top: -12px;
                left: 1vh;
                width: 43px;
                height: 4px;
                background-color: #58baf9;
            }
        }
        .title_bg{
            position: absolute;
        }
    }
    .summarize, .advantage, .demand, .contrast{
        width: 70vw;
        margin: 0 auto;
        padding: 0px;
        margin-top: 15vh;
    }
    .bag1 {
        margin: 0 auto;
        margin-top: 15vh;
        padding-bottom: 6vh;
        /* background:url("./../assets/banner_carbon.191829f.png") no-repeat left;*/
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url("./../assets/advantage_bg.png");
        background-position: center;
        border-radius: 1vh;
    }
    .title{
        font-size: 3rem;
        font-family: 'Oswald_font';
        font-weight: bold;
        color: #ffffff;
        text-align: center;
        margin: 0 auto;
        padding: 0px;
        margin-bottom: 2vh;

    }
    .subtitle{
        font-size: 2rem;
        text-align: center;
        margin: 0 auto;
        padding: 0px;
        color:#bebfc0;
    }
    .title-box{
        margin-bottom: 6vh;
    }
    .advantage{
        .content{
            .subtitle {
                img{
                    width: 3vh;
                    float: left;
                }
                p{
                    text-align: left;
                    padding-left: 4vh;
                    font-size: 1.2rem;
                }
            }
            .border_lr{
                border-left: 1px solid rgba(255,255,255,0.3);
                border-right: 1px solid rgba(255,255,255,0.3);
            }
        }
        .title-box{
            padding-top: 6vh;
        }
    }
    .content{
        display: flex;
        .subtitle{
            font-size: 1rem;
            margin-top: 1vh;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 2vh;
        }
        .item{
            width: 30%;
            display: inline-block;
            padding: 0 1.5%;
            img{
                width: 100%;
            }
            .content_text{
                background-color: #423a3a;
                padding-bottom: 2vh;
                padding: 2vh;
            }
        }
    }
    .list{
        display: flex;
        .item{
            width: 28%;
            display: inline-block;
            padding: 2.5vh;
            background-color: #143049;
            border-radius: 1vh;
            img{
                height: 35vh;
                margin: 0 auto;
                padding: 0;
                display: block;
            }
            .message{
                margin-top: 2vh;
            }
        }
    }
    .contrast{
        line-height: 8vh;
        background-color: #143049;
        border-radius: 1vh;
        margin-bottom: 15vh;
        table{
            width: 100%;
            padding: 1vh 4vh;
            th{
                width: 30%;
            }
            .border_tb{
                border-top: 1px solid #000000;
                border-bottom: 1px solid #000000;
            }
            td{
                padding: 2vh 0;
                line-height: 4vh;
                p{
                    padding-left: 6vh;
                }
            }
            .list_01{
                background:url("./../assets/list_01.png") no-repeat left;
            }
            .list_11{
                background:url("./../assets/list_11.png") no-repeat left;
            }
            .list_02,  .list_12{
                background:url("./../assets/correct.png") no-repeat left;
            }
            .list_03, .list_13{
                background:url("./../assets/wrong.png") no-repeat left;
            }
        }
    }
</style>