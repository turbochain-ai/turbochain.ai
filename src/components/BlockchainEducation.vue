<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class="Rotation rotation_style"  src="https://media.openserver.cn/turbochain/assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.educationTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.education.content0ne")}}
                        <br>{{$t("solution.education.contentTwo")}}</p>
                </div>
              <!--  <a class="more" href="">
                    <span>查看更多</span>
                </a>-->
            </div>
        </div>
        <div class="demand">
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">{{$t("solution.industryProblems")}}</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/BlockchainEducation_pic1.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.education.problemOne")}}</p>
                    <p class="text">{{$t("solution.education.problemIntroOne")}}</p>
                </div>
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/BlockchainEducation_pic2.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.education.problemTwo")}}</p>
                    <p class="text">{{$t("solution.education.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/BlockchainEducation_pic3.png" alt="" class="img">
                    <p class="subtitle">{{$t("solution.education.problemThree")}}</p>
                    <p class="text">{{$t("solution.education.problemIntroThree")}}</p>
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
                    <img src="https://media.openserver.cn/turbochain/assets/solution_education_icon_01.png">
                    <p class="message">{{$t("solution.education.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/solution_education_icon_02.png">
                    <p class="message">{{$t("solution.education.overviewTwo")}}</p>
                </li>
                <li class="item">
                    <img src="https://media.openserver.cn/turbochain/assets/solution_education_icon_03.png">
                    <p class="message">{{$t("solution.education.overviewThree")}}</p>
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
                        <p>{{$t("solution.education.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.education.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.bank.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.education.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="https://media.openserver.cn/turbochain/assets/sample_icon.png">
                        <p>{{$t("solution.education.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.education.advantageIntroThree")}}</p>
                </div>
            </div>

        </div>
        <div class="m_contrast">
            <div class="contrast_list">
                <p class="contrast_list_title">TURBOCHAIN</p>
                <div class="contrast_th">
                    <p>{{$t("header.solution")}}</p>
                    <p>{{$t("solution.education.traditional")}}</p>
                </div>
                <p class="list_01 list_title">{{$t("solution.education.copyrightProtection")}}</p>
                <div class="contrast_td">
                    <p class="list_02 text_left">{{$t("solution.education.copyrightProtectionTurboChain")}}</p>
                    <p class="list_03">{{$t("solution.education.copyrightProtectionTraditional")}}</p>
                </div>
                <p class="list_11 list_title">{{$t("solution.education.academicCreditSystem")}}</p>
                <div class="contrast_td">
                    <p class="list_02 text_left">{{$t("solution.education.academicCreditSystemTurboChain")}}</p>
                    <p class="list_03">{{$t("solution.education.academicCreditSystemTraditional")}}</p>
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
                        <p>{{$t("solution.education.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb ">
                        <p class="list_01">{{$t("solution.education.copyrightProtection")}}</p>
                    </td>
                    <td class="border_tb">
                        <p class="list_02">{{$t("solution.education.copyrightProtectionTurboChain")}}</p>
                    </td>
                    <td class="border_tb">
                        <p class="list_03">{{$t("solution.education.copyrightProtectionTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p class="list_11">{{$t("solution.education.academicCreditSystem")}}</p>
                    </td>
                    <td>
                        <p class="list_12">{{$t("solution.education.academicCreditSystemTurboChain")}}</p>
                    </td>
                    <td>
                        <p class="list_13">{{$t("solution.education.academicCreditSystemTraditional")}}</p>
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
        name: "BlockchainEducation"
    }
</script>


<style src="./../assets/css/solution.css" scoped>
</style>
<style scoped lang="scss">
    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
        background: url("https://media.openserver.cn/turbochain/assets/images/Solution_bg3.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }
</style>

