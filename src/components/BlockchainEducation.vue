<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.educationTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        区块链教育是基于区块链为底层的教育服务平台。
                        <br>将区块链和教育兼容相结合，利用区块链去中心化，开放性，信息不可篡改性，时间戳，匿名性的特性，解决教育领域中出现的几大难题。
                        进而推进教育行业的发展。
                    </p>
                </div>
              <!--  <a class="more" href="">
                    <span>查看更多</span>
                </a>-->
            </div>
        </div>
        <div class="demand">
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">业务痛点及需求</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/BlockchainEducation_pic1.png" alt="" class="img">
                    <p class="subtitle">学术领域问题</p>
                    <p class="text">在学术领域中，存在着学术造假，论文造假，实验数据造假等现象，如何确权，成为学术领域亟待解决的问题</p>
                </div>
                <div class="item">
                    <img src="../assets/BlockchainEducation_pic2.png" alt="" class="img">
                    <p class="subtitle">教育资源问题</p>
                    <p class="text">教育资源分布不均，师资、教研成果无法共享，很难实现全球教育资源的共享配置，教育受到地域、经济条件等客观活主观因素限制</p>
                </div>
                <div class="item">
                    <img src="../assets/BlockchainEducation_pic3.png" alt="" class="img">
                    <p class="subtitle">学信体系问题</p>
                    <p class="text">现阶段由于各方面因素，导致学生信用体系存在信息不完整，证书造假、缺乏验证手段等痛点，即使有国家统一的学信网存在，依然无法杜绝学历造假现象。</p>
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
                    <img src="../assets/solution_education_icon_01.png">
                    <p class="message">区块链教育利用区块链非对称加密算法保护的安全性和可靠性能够加强对资源版权的保护，同时利用区块链透明性的特点，可对学术资源的创建信息查询、追踪和获取，进而能够从源头上杜绝剽窃事件的发生。</p>
                </li>
                <li class="item">
                    <img src="../assets/solution_education_icon_02.png">
                    <p class="message">区块链教育使用区块链为知识的共享提供去中心化的验证和分布式的存储，在保障发布者的权益的同时，又构建出一个更为灵活而自由的全球开放知识库</p>
                </li>
                <li class="item">
                    <img src="../assets/solution_education_icon_03.png">
                    <p class="message">区块链教育利用区块链的去中心化的、可验证的、防篡改的存储系统，将学位证等文凭放到链上，保证其真实性</p>
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
                        <p>溯源确权</p>
                    </div>
                    <p class="text">基于区块链技术，将学术资料、论文、实验数据等关键信息上链，保证原创者的知识产权</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>资源共享</p>
                    </div>
                    <p class="text">基于区块链技术，将教育资源上链，在保证原创者权限的同时，构建灵活而自由的知识库</p>
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
                        <p>传统教育行业</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>版权保障</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>可快速溯源确权</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>信息混乱，耗时，耗力，无法确权</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>学信体系</p>
                    </td>
                    <td class="list_12">
                        <p>保障信息真实性</p>
                    </td>
                    <td class="list_13">
                        <p>信息不完善，存在学历造假现象</p>
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
    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
        background: url("./../assets/images/Solution_bg3.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }
</style>
