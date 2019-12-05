<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px; margin-top: 0px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img class="Rotation rotation_style" src="../assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.billchainTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.billchain.content0ne")}}
                        <br>{{$t("solution.billchain.contentTwo")}}
                        <br>{{$t("solution.billchain.contentThree")}}
                    </p>
                    <router-link class="news-item" to="login">
                        <p class="btn_login">
                            系统入口
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="demand" >
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">{{$t("solution.industryProblems")}}</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/demand_pjl_pic1.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.billchain.problemOne")}}</p>
                    <p class="text">{{$t("solution.billchain.problemIntroOne")}}</p>

                </div>
                <div class="item">
                    <img src="../assets/demand_pjl_pic2.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.billchain.problemTwo")}}</p>
                    <p class="text">{{$t("solution.billchain.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="../assets/demand_pjl_pic3.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.billchain.problemThree")}}</p>
                    <p class="text">{{$t("solution.billchain.problemIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">{{$t("solution.billchainName")}}</div>
                <div class="subtitle">{{$t("solution.programOverview")}}</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="../assets/pjgs_icon_01.png">
                    <p class="message">{{$t("solution.billchain.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/pjgs_icon_02.png">
                    <p class="message">{{$t("solution.billchain.overviewTwo")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/pjgs_icon_03.png">
                    <p class="message">{{$t("solution.billchain.overviewThree")}}</p>
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
                        <p>{{$t("solution.billchain.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.billchain.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.billchain.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.billchain.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.billchain.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.billchain.advantageIntroThree")}}</p>
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
                        <p>{{$t("solution.billchainTitle")}}</p>
                    </th>
                    <th>
                        <p>{{$t("solution.billchain.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>{{$t("solution.billchain.correspondenceEfficiency")}}</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>{{$t("solution.billchain.correspondenceEfficiencyTurboChain")}}</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>{{$t("solution.billchain.correspondenceEfficiencyTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>{{$t("solution.billchain.correspondence")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.billchain.correspondenceTurboChain")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.billchain.correspondenceTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_21">
                        <p>{{$t("solution.billchain.correspondence2")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.billchain.correspondenceTurboChain2")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.billchain.correspondenceTraditiona2")}}</p>
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
        name: "BillChain",

      /*  created: function() {
            this.init();
        },
        methods: {
            init() {
                this.$store.commit("initLang");
                let url = this.$route.path;
                if (url.indexOf("creditChain") != -1) {
                    this.menuindex = 20;
                }
            },
        }*/
    }
</script>

<style src="./../assets/css/solution.css" scoped>
</style>

<style scoped lang="scss">
    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
      /*  background: url("./../assets/images/SolutionBg_billchain.jpg") no-repeat center;*/
        background-image: linear-gradient(to top, rgba(0, 40, 99, 0.85), rgba(0, 40, 99, 0.85)), url("./../assets/images/SolutionBg_billchain.jpg");
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

</style>
