<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                        <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                        <div class="title">SOLUTION</div>
                        <div class="subtitle">{{$t("solution.videoTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.video.content0ne")}}
                        <br>{{$t("solution.video.contentTwo")}}
                    </p>
                </div>
                <a class="more" href="http://springislandlove.openserver.cn/" target="_blank">
                    <span>{{$t("solution.logistics.more")}}</span>
                </a>
            </div>
        </div>
               <div class="demand" >
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">{{$t("solution.industryProblems")}}</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/movie_pic_01.png" alt="" class="img">
                    <!--  <div class="content_text">   </div>-->
                    <p class="subtitle">{{$t("solution.video.problemOne")}}</p>
                    <p class="text">{{$t("solution.video.problemIntroOne")}}</p>

                </div>
                <div class="item">
                    <img src="../assets/movie_pic_02.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.video.problemTwo")}}</p>
                    <p class="text">{{$t("solution.video.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="../assets/movie_pic_03.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.video.problemThree")}}</p>
                    <p class="text">{{$t("solution.video.problemIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">TURBOCHAIN</div>
                <div class="subtitle">{{$t("solution.programOverview")}}</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="../assets/movie_icon_01.png">
                    <p class="message">{{$t("solution.video.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/movie_icon_02.png">
                    <p class="message">{{$t("solution.video.overviewTwo")}}</p>
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
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.video.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.video.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.video.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.video.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.video.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.video.advantageIntroThree")}}</p>
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
                        <p>{{$t("solution.video.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>{{$t("solution.video.participatingGroup")}}</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>{{$t("solution.video.participatingGroupTurboChain")}}</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>{{$t("solution.video.participatingGroupTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>{{$t("solution.video.transactionInformationTransparency")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.video.transactionInformationTransparencyTurboChain")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.video.transactionInformationTransparencyTraditional")}}</p>
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
        name: "BlockchainVideo"
    }
</script>

<style src="./../assets/css/solution.css" scoped>
</style>
<style scoped lang="scss">
    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
        background: url("./../assets/images/Solution_bg5.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }
</style>