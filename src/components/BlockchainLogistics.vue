<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                        <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                        <div class="title">SOLUTION</div>
                        <div class="subtitle">{{$t("solution.logisticsTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        TURBOCHAIN将通过重新定义全球点对点物流来帮助数百万人参与全球共享经济。
                        <br> 我们正在使用区块链技术创建一个去中心化的网络，用户可以在其中创建对本地和跨境交付服务的请求。
                        <br>用户还可以为网络上的请求执行存储和交付功能，从而获得额外收入作为提供服务的付款。
                    </p>
                </div>
                <a class="more" href="https://mulechain.com/" target="_blank">
                    <span>查看更多</span>
                </a>
            </div>
        </div>


        <div class="demand">
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">业务痛点及需求</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/mulechain_pic_01.png" alt="" class="img">
                    <p class="subtitle">效率低</p>
                    <p class="text">传统的点对点物流，由于运输成本，利润等原因，会采用整车发货，导致发货时间不定，运输耗时长</p>
                </div>
                <div class="item">
                    <img src="../assets/mulechain_pic_02.png" alt="" class="img">
                    <p class="subtitle">货物安全无法保证</p>
                    <p class="text">点对点物流风险高，一般是中小型企业，货物易发生丢失、破损等问题</p>
                </div>
                <div class="item">
                    <img src="../assets/mulechain_pic_03.png" alt="" class="img">
                    <p class="subtitle">物流管理混乱</p>
                    <p class="text">物流从业人事普遍文化不高，公司专业管理混乱</p>
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
                    <img src="../assets/mulechain_icon_01.png">
                    <p class="message">TURBOCHAIN使用区块链技术创建一个去中心化的网络，用户可以在其中创建对本地和跨境交付服务的请求。</p>
                </li>
                <li class="item">
                    <img src="../assets/mulechain_icon_02.png">
                    <p class="message">用户还可以为网络上的请求执行存储和交付功能，从而获得额外收入作为提供服务的付款。</p>
                </li>
            </ul>
        </div>
        <div class="advantage">
            <div class="title-box">
                <div class="title">ADVANTAGES</div>
                <div class="subtitle">优&nbsp;&nbsp;势</div>
            </div>
            <div class="content bag1">
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>效率高</p>
                    </div>
                    <p class="text">骡友根据旅行的地点和日期匹配货物，可快速高效的运输货物</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>安全可靠</p>
                    </div>
                    <p class="text">骡友捎带货物量少，可保证货物安全</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>物流管理</p>
                    </div>
                    <p class="text">增强了溯源的技术能力，实现了信息的有效记录，信息的全流程跟踪</p>
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
                        <p>传统点对点物流</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>时效性</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>时效性好</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>时效性差</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>安全性</p>
                    </td>
                    <td class="list_12">
                        <p>放丢失，可溯源</p>
                    </td>
                    <td class="list_13">
                        <p>易丢失，损坏</p>
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
        background:url("./../assets/images/Solution_bg4.jpg") no-repeat center;
        position: relative;
        background-size: cover;
    }
</style>
