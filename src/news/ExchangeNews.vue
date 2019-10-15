<template>
    <div class="news">
        <div class="banner">
            <p class="title">NEWS</p>
        </div>
        <div class="content">
            <div class="title">
                <h1 class="content-title">星际数字加密资产交易平台试运营</h1>
                <h1 class="content-subtitle">发稿人: turbochain  2019-06-06 14:08:26</h1>
            </div>
            <div class="text">
                <p class="content-text">
                    在无安全漏洞运营和扎实的技术积累后，星际数字加密资产交易平台于2019年6月推出基于区块链的全新交易平台，旨在汇聚全球优质区块链资产，为全球用户提供值得信赖的数字资产投资机会，同时也为优质区块链项⽬的应用落地提供坚实的支撑。
                </p>
                <p class="content-text">
                    星际数字加密资产交易平台目前支持USDT、ETH、BTC等当前多种主流的数字货币交易。可以实现基础的交易所功能，钱包转入转出功能等。之后会陆续开放经筛选审核的资产交易对。
                </p>
                <p class="content-text">
                    星际数字加密资产交易平台特有的全接口化的快速充值、提现、充币、提币功能为客户提供最便捷的资金转账手段。深入磨合安全可靠的限价、市价两种交易模式，多种交易模式自由组合完全覆盖用户的需求，利用专属高级算法自动撮合完成交易。
                    平台后台专有的核算机制来监听所有用户的资金，以及多维度的专属报表，以保证资金是准确无误的。
                </p>
                <p class="content-text">
                    <img src="../assets/new_item_02.jpg">
                </p>
                <p class="content-text">
                    星际数字加密资产交易平台专有的强大日志管理来全方位的掌握系统状态，确保系统的稳定性和安全性。特有的自由灵活的系统配置和对前台网站进行的动态管理给平台的使用带来极大的方便。平台可以交易现有市面上已经存在的虚拟数字货币，也可以利用平台定制发行多种不同算法的虚拟数字货币。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExchangeNews"
    }
</script>

<style scoped lang="scss">
    .news {
        margin-top: 64px;
    }
    .banner {
        background-color: #191d28;
        height: 40vh;
        background: url("../assets/banner-news.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
        .title {
            width:1200px;
            padding-top: 10vh;
            font-family: 'Oswald_font';
            font-size: 80px;
            color: #ffffff;
        }
    }
    .content {
        padding: 0vw 10vw 5vw;
        .title {
            padding: 5vw 0vw;
            .content-title {
                text-align: center;
                letter-spacing: 0.2vw;
            }
            .content-subtitle {
                text-align: center;
                letter-spacing: 0.2vw;
                color: #8C8D8C;
            }
        }
        .text {
            .content-text {
                text-indent: 2em;
                font-size: 1vw;
                line-height: 2vw;
                padding: 1vw 0vw;
            }
        }
    }
</style>