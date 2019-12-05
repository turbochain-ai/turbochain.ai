<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px; margin-top: 0px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img class="Rotation rotation_style" src="../assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.GisTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        {{$t("solution.Gis.content0ne")}}
                        <br>{{$t("solution.Gis.contentTwo")}}
                        <br>{{$t("solution.Gis.contentThree")}}
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
                    <img src="../assets/demand_gis_pic1.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.Gis.problemOne")}}</p>
                    <p class="text">{{$t("solution.Gis.problemIntroOne")}}</p>

                </div>
                <div class="item">
                    <img src="../assets/demand_gis_pic2.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.Gis.problemTwo")}}</p>
                    <p class="text">{{$t("solution.Gis.problemIntroTwo")}}</p>
                </div>
                <div class="item">
                    <img src="../assets/demand_gis_pic3.jpg" alt="" class="img">
                    <p class="subtitle">{{$t("solution.Gis.problemThree")}}</p>
                    <p class="text">{{$t("solution.Gis.problemIntroThree")}}</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">{{$t("solution.GisName")}}</div>
                <div class="subtitle">{{$t("solution.programOverview")}}</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="../assets/Gis_icon_01.png">
                    <p class="message">{{$t("solution.Gis.overviewOne")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/Gis_icon_02.png">
                    <p class="message">{{$t("solution.Gis.overviewTwo")}}</p>
                </li>
                <li class="item">
                    <img src="../assets/Gis_icon_03.png">
                    <p class="message">{{$t("solution.Gis.overviewThree")}}</p>
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
                        <p>{{$t("solution.Gis.advantageOne")}}</p>
                    </div>
                    <p class="text">{{$t("solution.Gis.advantageIntroOne")}}</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.Gis.advantageTwo")}}</p>
                    </div>
                    <p class="text">{{$t("solution.Gis.advantageIntroTwo")}}</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>{{$t("solution.Gis.advantageThree")}}</p>
                    </div>
                    <p class="text">{{$t("solution.Gis.advantageIntroThree")}}</p>
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
                        <p>{{$t("solution.GisTitle")}}</p>
                    </th>
                    <th>
                        <p>{{$t("solution.Gis.traditional")}}</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>{{$t("solution.Gis.correspondenceEfficiency")}}</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>{{$t("solution.Gis.correspondenceEfficiencyTurboChain")}}</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>{{$t("solution.Gis.correspondenceEfficiencyTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>{{$t("solution.Gis.correspondence")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.Gis.correspondenceTurboChain")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.Gis.correspondenceTraditional")}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>{{$t("solution.Gis.correspondence2")}}</p>
                    </td>
                    <td class="list_12">
                        <p>{{$t("solution.Gis.correspondenceTurboChain2")}}</p>
                    </td>
                    <td class="list_13">
                        <p>{{$t("solution.Gis.correspondenceTraditional2")}}</p>
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
      /*  background: url("./../assets/images/SolutionBg_Gis.jpg") no-repeat center;*/
        background-image: linear-gradient(to top, rgba(9, 6, 23, 0.7), rgba(9, 6, 23, 0.7)), url("./../assets/images/SolutionBg_Gis.jpg");
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

</style>
