<template>
  <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
 <div class="introduce">
      <div class="introduce_box">
        <div class="left">
            <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
            <div class="title">SOLUTION</div>
            <div class="subtitle">{{$t("solution.financeTitle")}}</div>
        </div>
        <div class="right">
          <p>
            {{$t("solution.finance.content0ne")}}
            <br>{{$t("solution.finance.contentTwo")}}
            <br>{{$t("solution.finance.contentThree")}}
          </p>
        </div>
      <!--  <a class="more" href="">
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
          <img src="../assets/demand_pic1.png" alt="" class="img">
        <!--  <div class="content_text">   </div>-->
          <p class="subtitle">{{$t("solution.finance.problemOne")}}</p>
          <p class="text">{{$t("solution.finance.problemIntroOne")}}</p>

        </div>
        <div class="item">
          <img src="../assets/demand_pic2.png" alt="" class="img">
          <p class="subtitle">{{$t("solution.finance.problemTwo")}}</p>
          <p class="text">{{$t("solution.finance.problemIntroTwo")}}</p>
        </div>
        <div class="item">
          <img src="../assets/demand_pic3.png" alt="" class="img">
          <p class="subtitle">{{$t("solution.finance.problemThree")}}</p>
          <p class="text">{{$t("solution.finance.problemIntroThree")}}</p>
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
          <img src="../assets/advantage_icon_a.png">
          <p class="message">{{$t("solution.finance.overviewOne")}}</p>
        </li>
        <li class="item">
          <img src="../assets/advantage_icon_b.png">
          <p class="message">{{$t("solution.finance.overviewTwo")}}</p>
        </li>
        <li class="item">
          <img src="../assets/advantage_icon_c.png">
          <p class="message">{{$t("solution.finance.overviewThree")}}</p>
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
            <p>{{$t("solution.finance.advantageOne")}}</p>
          </div>
          <p class="text">{{$t("solution.finance.advantageIntroOne")}}</p>
        </div>
        <div class="item border_lr">
          <div class="subtitle">
          <img src="../assets/sample_icon.png">
          <p>{{$t("solution.finance.advantageTwo")}}</p>
        </div>
          <p class="text">{{$t("solution.finance.advantageIntroTwo")}}</p>
        </div>
        <div class="item">
          <div class="subtitle">
            <img src="../assets/sample_icon.png">
            <p>{{$t("solution.finance.advantageThree")}}</p>
          </div>
          <p class="text">{{$t("solution.finance.advantageIntroThree")}}</p>
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
              <p>{{$t("solution.finance.traditional")}}</p>
            </th>
          </tr>
          <tr>
            <td class="border_tb list_01">
              <p>{{$t("solution.finance.informationTransfer")}}</p>
            </td>
            <td class="border_tb list_02">
              <p>{{$t("solution.finance.informationTransferTurboChain")}}</p>
            </td>
            <td class="border_tb list_03">
              <p>{{$t("solution.finance.informationTransferTraditional")}}</p>
            </td>
          </tr>
          <tr>
            <td class="list_11">
              <p>{{$t("solution.finance.businessTrust")}}</p>
            </td>
            <td class="list_12">
              <p>{{$t("solution.finance.businessTrustTurboChain")}}</p>
            </td>
            <td class="list_13">
              <p>{{$t("solution.finance.businessTrustTraditional")}}</p>
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
        name: "Solution"
    }
</script>

<style src="./../assets/css/solution.css" scoped>
</style>

<style scoped lang="scss">
    .introduce {
  display: flex;
  height: auto;
  min-height: 100vh;
  background: url("./../assets/images/Solution_bg.jpg") no-repeat center;
  position: relative;
  background-size: cover;
    }

</style>
