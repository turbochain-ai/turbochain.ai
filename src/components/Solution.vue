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
            供应链金融基于区块链为底层的金融资产服务平台。
            <br>将区块链和供应链兼容相结合，利用区块链不可篡改，多方共识账本的特性，将企业赊销行为产生的应收账款转化为可流转、可拆分、可融资的债权凭证（通证）。
            <br>进而传递核心企业信用，降低信任成本，优化全链条融资效率，从而进一步推动国家经济转型，共同支持惠普金融的发展。
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
        <div class="subtitle">业务痛点及需求</div>
      </div>
      <div class="content">
        <div class="item">
          <img src="../assets/demand_pic1.png" alt="" class="img">
        <!--  <div class="content_text">   </div>-->
          <p class="subtitle">核心企业信任难以传递</p>
          <p class="text">根据合同法，核心企业是跟一级供应商签订合同，但是一级供应商和二级供应商签订合同时并没有核心企业参与，并不能传递相关的核心企业的信任到多级供应商</p>

        </div>
        <div class="item">
          <img src="../assets/demand_pic2.png" alt="" class="img">
          <p class="subtitle">银行缺乏中小企业的可信数据</p>
          <p class="text">在现存的银行风控体系下，中小企业无法证实贸易关系的存在，难以获得银行资金。相对地，银行业无法渗透入供应链进行获客和放款</p>
        </div>
        <div class="item">
          <img src="../assets/demand_pic3.png" alt="" class="img">
          <p class="subtitle">融资难融资贵现象突出</p>
          <p class="text">在目前赊销模式盛行的市场背景下，供应链上游的供应商往往存在较大资金缺口，然而没有核心企业的背书，他们难以获得银行的优质贷款</p>
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
          <img src="../assets/advantage_icon_a.png">
          <p class="message">供应链金融平台利用区块链技术搭建一个包含制造、供应、分销、零售、物流企业及最终用户在内的联盟链，将物流、资金流等信息记录在链上。</p>
        </li>
        <li class="item">
          <img src="../assets/advantage_icon_b.png">
          <p class="message">链上的数据由多方参与共同维护、共同 享有，并且利用密码学技术实现了数据的不可篡改、不可抵赖及隐私保护。将企业赊销行为产生的应收账款转化为可流转、可拆分、可融资的债权凭证（通证）</p>
        </li>
        <li class="item">
          <img src="../assets/advantage_icon_c.png">
          <p class="message">传递核心企业信用，降低信任成本，优化全链条融资效率</p>
        </li>
      </ul>
    </div>
    <div class="advantage bag1">
      <div class="title-box">
        <div class="title">ADVANTAGES</div>
        <div class="subtitle">优&nbsp;&nbsp;势</div>
      </div>
      <div class="content ">
        <div class="item">
          <div class="subtitle">
            <img src="../assets/sample_icon.png">
            <p>安全可靠</p>
          </div>
          <p class="text">基于区块链技术，将关键信息、资产、资金上链，防止恶意篡改</p>
        </div>
        <div class="item border_lr">
          <div class="subtitle">
          <img src="../assets/sample_icon.png">
          <p>信用传递</p>
        </div>
          <p class="text">核心企业将新用传递给供应链上各级供应商，实现尾部供应商低成本融资</p>
        </div>
        <div class="item">
          <div class="subtitle">
            <img src="../assets/sample_icon.png">
            <p>高效接入</p>
          </div>
          <p class="text">平台采用BaaS化设计，可支持快速对接，费用低廉</p>
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
              <p>传统供应链金融</p>
            </th>
          </tr>
          <tr>
            <td class="border_tb list_01">
              <p>信息传递性</p>
            </td>
            <td class="border_tb list_02">
              <p>信息公开，参与方可查询</p>
            </td>
            <td class="border_tb list_03">
              <p>存在信息孤岛，企业间信息不互通</p>
            </td>
          </tr>
          <tr>
            <td class="list_11">
              <p>企业信任</p>
            </td>
            <td class="list_12">
              <p>核心企业信任可传递到多级供应商</p>
            </td>
            <td class="list_13">
              <p>核心企业信任不能有效传递</p>
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

<style scoped lang="scss">
    @import url(./../assets/css/solution.css);
  .introduce {
      display: flex;
      height: auto;
      min-height: 100vh;
      background: url("./../assets/images/Solution_bg.jpg") no-repeat center;
      position: relative;
      background-size: cover;
  }
</style>
