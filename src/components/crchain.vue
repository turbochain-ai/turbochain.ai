<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px; margin-top: 0px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.crchainTitle")}}</div>
                    <!--<div class="title_bg"></div>-->
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.crchain.content0ne")}}
                        <br>{{$t("solution.crchain.contentTwo")}}
                        <br>{{$t("solution.crchain.contentThree")}}
                    </p>




                     <!--   <a class="btn_login" to="/login">系统入口</a>-->

                    <router-link class="news-item" to="login">
                     <!--   <img class="news-img-item" src="https://media.openserver.cn/turbochain/assets/Financing_logo.jpg">-->
                        <p class="btn_login">
                           系统入口
                        </p>
                        <!--<span class="right-link">{{$t("news.more")}}</span>-->
                    </router-link>

                </div>
               <!-- <a class="more" href="">
                    <span>查看更多</span>
                </a>-->
            </div>
        </div>
        <div class="demand" >
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">{{$t("solution.industryProblems")}}</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/demand_bqgs_pic1.jpg" alt="" class="img">
                    <!--  <div class="content_text">   </div>-->
                    <p class="subtitle">{{$t("solution.crchain.problemOne")}}</p>
                    <p class="text">{{$t("solution.crchain.problemIntroOne")}}</p>

                </div>
                <div class="item">
                    <img src="../assets/demand_bqgs_pic2.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.crchain.problemTwo")}}</p>
                    <p class="text">{{$t("solution.crchain.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="../assets/demand_bqgs_pic3.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.crchain.problemThree")}}</p>
                    <p class="text">{{$t("solution.crchain.problemIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">版权链</div>
                <div class="subtitle">{{$t("solution.programOverview")}}</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="../assets/bqgs_icon_01.png">
                    <p class="message">{{$t("solution.crchain.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/bqgs_icon_02.png">
                    <p class="message">{{$t("solution.crchain.overviewTwo")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/bqgs_icon_03.png">
                    <p class="message">{{$t("solution.crchain.overviewThree")}}</p>
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
                        <p>{{$t("solution.crchain.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.crchain.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.crchain.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.crchain.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.crchain.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.crchain.advantageIntroThree")}}</p>
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
                        <p>{{$t("solution.crchainTitle")}}</p>
                    </th>
                    <th>
                        <p>{{$t("solution.crchain.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>{{$t("solution.crchain.correspondenceEfficiency")}}</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>{{$t("solution.crchain.correspondenceEfficiencyTurboChain")}}</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>{{$t("solution.crchain.correspondenceEfficiencyTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>{{$t("solution.crchain.correspondence")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.crchain.correspondenceTurboChain")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.crchain.correspondenceTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_21">
                        <p>{{$t("solution.crchain.correspondence2")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.crchain.correspondenceTurboChain2")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.crchain.correspondenceTraditiona2")}}</p>
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
        name: "BankConfirmation",

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
      /*  background: url("./../assets/images/SolutionBg_crchain.jpg") no-repeat center;*/
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./../assets/images/SolutionBg_crchain.jpg");
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

</style>
