<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                        <img  class="Rotation rotation_style"  src="https://media.openserver.cn/turbochain/assets/solution_title_bg.png">
                        <div class="title">SOLUTION</div>
                        <div class="subtitle">{{$t("solution.logisticsTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.logistics.content0ne")}}
                        <br>{{$t("solution.logistics.contentTwo")}}
                        <br>{{$t("solution.logistics.contentThree")}}
                    </p>
                </div>
                <a class="more" href="https://mulechain.com/" target="_blank">
                    <span>{{$t("solution.logistics.more")}}</span>
                </a>
            </div>
        </div>


        <div class="demand">
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">{{$t("solution.industryProblems")}}</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/mulechain_pic_01.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.logistics.problemOne")}}</p>
                    <p class="text">{{$t("solution.logistics.problemIntroOne")}}</p>
                </div>
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/mulechain_pic_02.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.logistics.problemTwo")}}</p>
                    <p class="text">{{$t("solution.logistics.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/mulechain_pic_03.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.logistics.problemThree")}}</p>
                    <p class="text">{{$t("solution.logistics.problemIntroThree")}}</p>
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
                    <img src="https://media.openserver.cn/turbochain/assets/mulechain_icon_01.png">
                    <p class="message">{{$t("solution.logistics.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/mulechain_icon_02.png">
                    <p class="message">{{$t("solution.logistics.overviewTwo")}}</p>
                </li>
            </ul>
        </div>
        <div class="advantage">
            <div class="title-box">
                <div class="title">ADVANTAGES</div>
                <div class="subtitle">{{$t("solution.advantage")}}</div>
            </div>
            <div class="content bag1">
                <div class="item">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.logistics.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.logistics.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.logistics.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.logistics.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.logistics.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.logistics.advantageIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="m_contrast">
            <div class="contrast_list">
                <p class="contrast_list_title">TURBOCHAIN</p>
                <div class="contrast_th">
                    <p>{{$t("header.solution")}}</p>
                    <p>{{$t("solution.logistics.traditional")}}</p>
                </div>
                <p class="list_01 list_title">{{$t("solution.logistics.timeliness")}}</p>
                <div class="contrast_td">
                    <p class="list_02 text_left">{{$t("solution.logistics.timelinessTurboChain")}}</p>
                    <p class="list_03">{{$t("solution.logistics.timelinessTraditional")}}</p>
                </div>
                <p class="list_11 list_title">{{$t("solution.logistics.safety")}}</p>
                <div class="contrast_td">
                    <p class="list_02 text_left">{{$t("solution.logistics.safetyTurboChain")}}</p>
                    <p class="list_03">{{$t("solution.logistics.safetyTraditional")}}</p>
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
                        <p>{{$t("solution.logistics.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb">
                        <p class="list_01">{{$t("solution.logistics.timeliness")}}</p>
                    </td>
                    <td class="border_tb">
                        <p class="list_02">{{$t("solution.logistics.timelinessTurboChain")}}</p>
                    </td>
                    <td class="border_tb">
                        <p class="list_03">{{$t("solution.logistics.timelinessTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="list_11">{{$t("solution.logistics.safety")}}</p>
                    </td>
                    <td>
                        <p class="list_12">{{$t("solution.logistics.safetyTurboChain")}}</p>
                    </td>
                    <td>
                        <p class="list_13">{{$t("solution.logistics.safetyTraditional")}}</p>
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

<style src="./../assets/css/solution.css" scoped>
</style>
<style scoped lang="scss">
    .introduce{
        display: flex;
        height: auto;
        min-height: 100vh;
        background:url("https://media.openserver.cn/turbochain/assets/images/Solution_bg4.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }
</style>
