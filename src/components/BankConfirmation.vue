<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px; margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.bankTitle")}}</div>
                    <!--<div class="title_bg"></div>-->
                </div>
                <div class="right">
                    <p>
                        区块链银行询证系统建设在国内自主可控、安全性达标的区块链平台上，具备去中心化、信息无法篡改、信息安全等特征。
                        <br>允许经过安全和身份认证的企业、银行、会计师事务所和其他相关方接入。
                        <br>由多个参与方共同完成基于区块链和XBRL的银行函证审计工作。
                    </p>
                </div>
               <!-- <a class="more" href="">
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
                    <img src="../assets/demand_yhxz_pic1.png" alt="" class="img">
                    <!--  <div class="content_text">   </div>-->
                    <p class="subtitle">无法合理保证审计效果</p>
                    <p class="text">实际的函证过程中易受到客户方面的干扰，独立性低，存在客户与银行员工串通造假的风险，致使注册会计师无法通过函证验证银行账户信息的真实性、准确性和完整性，影响审计效果，同时对银行的公信力和声誉也带来不利影响。</p>

                </div>
                <div class="item">
                    <img src="../assets/demand_yhxz_pic2.png" alt="" class="img">
                    <p class="subtitle">效率低下</p>
                    <p class="text">在实务中，通过邮寄的方式实施函证，函证的回复率很低，并且不同的银行对于函证的要求各不相同，导致审计效率低下。</p>
                </div>
                <div class="item">
                    <img src="../assets/demand_yhxz_pic3.png" alt="" class="img">
                    <p class="subtitle">函证公信力不可靠</p>
                    <p class="text">目前，对银行询证函回函使用印章没有明确规定。有些银行使用不具有法律效力的柜台受理章，致使询证函回函丧失证明力，增加审计风险。
                        部分银行将询证函寄回给被审计单位，影响了函证的效果和效率。</p>
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
                    <img src="../assets/yhxz_icon_01.png">
                    <p class="message">建设在国内自主可控、安全性达标的区块链平台上，具备去中心化、信息无法篡改、信息安全等特征。允许经过安全和身份认证的企业、银行、会计师事务所和其他相关方接入。</p>
                </li>
                <li class="item">
                    <img src="../assets/yhxz_icon_02.png">
                    <p class="message">在平台上会计师事务所可以发起针对其被审计企业的银行函证请求，经企业认证后形成区块链函证请求。银行接收处理相关区块链函证请求，通过对接行内信息系统，生成区块链函证结果智能合约，其中的函证电子化数据以XBRL数据格式标记，记录在区块链上。</p>
                </li>
                <li class="item">
                    <img src="../assets/yhxz_icon_03.png">
                    <p class="message">发起该请求的会计师事务所具备读取该智能合约的权限，从而获得相关数据，完成基于区块链和XBRL的银行函证审计工作。</p>
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
                        <p>交易信息透明化</p>
                    </div>
                    <p class="text">基于区块链技术，用户均只能在受限的权限范围内进行必要的处理和确认，无任何其他信息的修改权限，实现了链上交易信息的透明化，并有效降低了交易信息被篡改的可能性</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>高效率</p>
                    </div>
                    <p class="text">支持审计机构登录平台查询函证的状态，对函证的处理过程进行追踪，极大的提高了函证效率且降低函证成本</p>
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
                        <p>传统银行询证</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>函证效率</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>提高了函证效率且降低函证成本</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>函证效率低且函证成本高</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>函证公信力</p>
                    </td>
                    <td class="list_12">
                        <p>交易信息透明化，公信力高</p>
                    </td>
                    <td class="list_13">
                        <p>易受客户干扰，影响函证的公信力</p>
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

<style scoped lang="scss">
    @import url(./../assets/css/solution.css);
    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
        background: url("./../assets/images/Solution_bg2.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }

</style>
