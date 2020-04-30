<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px; margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class="Rotation rotation_style"  src="https://media.openserver.cn/turbochain/assets/solution_title_bg.png">
                    <div class="title">PRODUCT</div>
                    <div class="subtitle">{{$t("solution.bankTitle")}}</div>
                    <!--<div class="title_bg"></div>-->
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.bank.content0ne")}}
                        <br>{{$t("solution.bank.contentTwo")}}
                        <br>{{$t("solution.bank.contentThree")}}
                    </p>
                    <a class="btn_login" target="_blank" href="https://www.turbochain.cn/download/ConfirmationLetter.zip">{{$t("solution.bank.download_btn")}}</a><!--{{$t("solution.creditchain.SysEntry")}}-->
                  <!--  <a target="_blank" href="https://www.turbochain.cn/download/ConfirmationLetter.zip" class="more">
                        <span>下载客户端</span>
                    </a>-->
                </div>
               <!-- <a class="more" href="">
                    <span>查看更多</span>
                </a>-->
            </div>
        </div>
        <div class="demand p_10">
            <video controls autoplay muted loop poster="../assets/video/confirmation.png" class="bgvid" id="bgvid"  preload="metadata" playsinline="true"
                   webkit-playsinline="true"  x-webkit-airplay="true" x5-video-orientation="portraint" x5-video-player-type="h5" x5-video-player-fullscreen="true">
                <!-- playsinline="true" webkit-playsinline="true 解决ios自动播放全屏问题
                  x5-video-player-type="h5" x5-video-player-fullscreen="true" 解决安卓同层级播放-->
                <source src="https://www.turbochain.cn/download/xzh.mp4" type="video/mp4">
            </video>
        </div>
        <div class="demand" >
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">{{$t("solution.industryProblems")}}</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/demand_yhxz_pic1.png" alt="" class="img">
                    <!--  <div class="content_text">   </div>-->
                    <p class="subtitle">{{$t("solution.bank.problemOne")}}</p>
                    <p class="text">{{$t("solution.bank.problemIntroOne")}}</p>

                </div>
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/demand_yhxz_pic2.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.bank.problemTwo")}}</p>
                    <p class="text">{{$t("solution.bank.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/demand_yhxz_pic3.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.bank.problemThree")}}</p>
                    <p class="text">{{$t("solution.bank.problemIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">TURBOCHAIN</div>
                <div class="subtitle">{{$t("solution.productOverview")}}</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/yhxz_icon_01.png">
                    <p class="message">{{$t("solution.bank.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/yhxz_icon_02.png">
                    <p class="message">{{$t("solution.bank.overviewTwo")}}</p>
                </li>
                <li class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/yhxz_icon_03.png">
                    <p class="message">{{$t("solution.bank.overviewThree")}}</p>
                </li>
            </ul>
        </div>
        <div class="advantage bag1">
            <div class="title-box">
                <div class="title">ADVANTAGES</div>
                <div class="subtitle">{{$t("solution.advantage")}}</div>
            </div>
            <div class="content ">
                <div class="item">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.bank.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.bank.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.bank.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.bank.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.bank.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.bank.advantageIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="m_contrast">
            <div class="contrast_list">
                <p class="contrast_list_title">TURBOCHAIN</p>
                <div class="contrast_th">
                    <p>{{$t("header.solution")}}</p>
                    <p>{{$t("solution.bank.traditional")}}</p>
                </div>
                <p class="list_01 list_title">{{$t("solution.bank.correspondenceEfficiency")}}</p>
                <div class="contrast_td">
                    <p class="list_02 text_left">{{$t("solution.bank.correspondenceEfficiencyTurboChain")}}</p>
                    <p class="list_03">{{$t("solution.bank.correspondenceEfficiencyTraditional")}}</p>
                </div>
                <p class="list_11 list_title">{{$t("solution.bank.correspondence")}}</p>
                <div class="contrast_td">
                    <p class="list_02 text_left">{{$t("solution.bank.correspondenceTurboChain")}}</p>
                    <p class="list_03">{{$t("solution.bank.correspondenceTraditional")}}</p>
                </div>
            </div>
        </div>
        <div class="contrast">
            <table>
                <tbody>
                <tr>
                    <th>
                        <p>{{$t("solution.comparisonItem")}}</p>
                    </th>
                    <th>
                        <p>{{$t("solution.turboChainSolution")}}</p>
                    </th>
                    <th>
                        <p>{{$t("solution.bank.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb">
                        <p class="list_01">{{$t("solution.bank.correspondenceEfficiency")}}</p>
                    </td>
                    <td class="border_tb">
                        <p class="list_02">{{$t("solution.bank.correspondenceEfficiencyTurboChain")}}</p>
                    </td>
                    <td class="border_tb">
                        <p class="list_03">{{$t("solution.bank.correspondenceEfficiencyTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p class="list_11">{{$t("solution.bank.correspondence")}}</p>
                    </td>
                    <td >
                        <p class="list_12">{{$t("solution.bank.correspondenceTurboChain")}}</p>
                    </td>
                    <td>
                        <p class="list_13">{{$t("solution.bank.correspondenceTraditional")}}</p>
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
        name: "BankConfirmation"
    }
</script>

<style src="./../assets/css/solution.css" scoped>
</style>

<style scoped lang="scss">
    video{
        width: 100%;
    }
    .btn_login{
        display: block;
        text-align: center;
        background: url("https://media.openserver.cn/turbochain/assets/btn_bg.png") no-repeat 50%;
        line-height: 56px;
        position: absolute;
        bottom: -10vh;
        right: 2vw;
        color: #fff;
        width: 197px;
        height: 56px;
        cursor: pointer;
    }
    .introduce_box{
        .more {
            position: absolute;
            margin-top: 32px;
            margin-bottom: -50vh;
            font-weight: bold;
            display: block;
            width: 197px;
            height: 56px;
            line-height: 56px;
            color: #ffaa00;
            border: 2px solid #ffaa00;
            background-image: none;
            border-radius: 28px;
            transition: 0.3s;
            -moz-transition: 0.3s;
            -webkit-transition: 0.3s;
            -o-transition: 0.3s;
            span {
                display: block;
                text-align: center;
            }
            span:after{
                content:none;
            }
        }
        .more:hover {
            color: #ffffff;
            border: 2px solid #ffaa00;
            background-color: #ffaa00;
              box-shadow: 0px 0px 10px 6px rgba(0,0,0,0.1);
          }
    }


    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
        background: url("https://media.openserver.cn/turbochain/assets/images/Solution_bg2.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }

</style>
