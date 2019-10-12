<template>
    <div class="header">
        <div class="head_img">
            <a class="" href=""><img src="../assets/homepage_logo.png" style="height: 44px;"></a>
        </div>
        <div class="header-web">
            <div class="nav">
                <ul class="nav_list">
                    <router-link to="/index">
                        <li v-bind:class="{ nav_active: 1 == menuindex }"  @click="changeValue(1)" >{{$t("header.home")}}</li>
                    </router-link>
                    <li>
                        <Dropdown style="z-index: 9999;position: relative" class="other">
                            <a  v-bind:class="{ nav_active1 : 21 == menuindex || 22 == menuindex || 23 == menuindex || 24 == menuindex || 25 == menuindex, nav_active2: 21 != menuindex && 22 != menuindex && 23 != menuindex && 24 != menuindex && 25 != menuindex}" href="javascript:void(0)">{{$t("header.solution")}} &nbsp;<img class="icon-arrow" src="../assets/arrow_down.png"> <!--<Icon type="ios-arrow-down"></Icon>--></a>
                            <DropdownMenu class="menu_list02" slot="list">
                                <DropdownItem>
                                    <router-link class="nav_list" to="/solution/supplyChainFinance">
                                        <a v-bind:class="{nav_active1 : 21==menuindex, nav_active2: 21!=menuindex}" @click="changeValue(21)" >供应链金融</a>
                                    </router-link>
                                </DropdownItem>
                                <DropdownItem>
                                    <router-link class="nav_list" to="/solution/bankConfirmation">
                                        <a v-bind:class="{nav_active1 : 22==menuindex, nav_active2: 22!=menuindex}" @click="changeValue(22)" >银行询证</a>
                                    </router-link>
                                </DropdownItem>
                                <DropdownItem>
                                    <router-link class="nav_list" to="/solution/blockchainEducation">
                                       <a v-bind:class="{nav_active1 : 23==menuindex, nav_active2: 23!=menuindex}" @click="changeValue(23)" >区块链教育</a>
                                    </router-link>
                                </DropdownItem>
                                <DropdownItem>
                                    <router-link class="nav_list" to="/solution/blockchainLogistics">
                                        <a v-bind:class="{nav_active1 : 24==menuindex, nav_active2: 24!=menuindex}" @click="changeValue(24)" >区块链物流</a>
                                    </router-link>
                                </DropdownItem>
                                <DropdownItem>
                                    <router-link class="nav_list" to="/solution/blockchainVideo">
                                        <a v-bind:class="{nav_active1 : 25==menuindex, nav_active2: 25!=menuindex}" @click="changeValue(25)" >区块链影视</a>
                                    </router-link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <router-link to="/produceAndService">
                        <!--<Dropdown style="z-index: 9999;position: relative" class="other">
                            <li v-bind:class="{ nav_active1 : 31 == menuindex || 32 == menuindex || 33 == menuindex || 34 == menuindex || 35 == menuindex || 36 == menuindex || 37 == menuindex, nav_active2: 31 != menuindex && 32 != menuindex && 33 != menuindex && 34 != menuindex && 35 != menuindex && 36 != menuindex && 37 != menuindex}" href="javascript:void(0)">{{$t("header.service")}}&nbsp;<img class="icon-arrow" src="../assets/arrow_down.png"></li>
                            <DropdownMenu class="menu_list02" slot="list">
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 31==menuindex, nav_active2: 31!=menuindex}" @click="changeValue(31)"  href="https://telecomm.io">teleComm</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 32==menuindex, nav_active2: 32!=menuindex}" @click="changeValue(32)" href="http://rpa.openserver.cn/">RPA</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 33==menuindex, nav_active2: 33!=menuindex}" @click="changeValue(33)">iOSP</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 34==menuindex, nav_active2: 34!=menuindex}" @click="changeValue(34)" href="https://ipex.openserver.cn/#/">交易所</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 35==menuindex, nav_active2: 35!=menuindex}" @click="changeValue(35)" href="https://mulechain.com/">mulechain</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 36==menuindex, nav_active2: 36!=menuindex}" @click="changeValue(36)">企业数据浏览器</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a v-bind:class="{nav_active1 : 37==menuindex, nav_active2: 37!=menuindex}" @click="changeValue(37)" href="http://springislandlove.openserver.cn/">影视拍摄</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>-->
<!--                        <li v-bind:class="{ nav_active: 3 == menuindex }"  @click="changeValue(3)" >{{$t("header.service")}}</li>-->
                        <li v-bind:class="{ nav_active: 3 == menuindex }"  @click="changeValue(3)" >{{$t("产品与服务")}}</li>
                    </router-link>
                    <li v-bind:class="{ nav_active: 4 == menuindex }" >新闻</li>
                    <!--<router-link to="/news">
                        <li v-bind:class="{ nav_active: 4 == menuindex }"  @click="changeValue(4)" >{{$t("header.news")}}</li>
                    </router-link>-->
                    <router-link to="/aboutUs">
                        <li v-bind:class="{ nav_active: 5 == menuindex }"  @click="changeValue(5)" >{{$t("header.aboutUs")}}</li>
                    </router-link>
                    <li v-bind:class="{ nav_active: 6 == menuindex }" >加入我们</li>
                    <!--<router-link to="/joinUs">
                        <li v-bind:class="{ nav_active: 6 == menuindex }"  @click="changeValue(6)" >{{$t("header.joinUs")}}</li>
                    </router-link>-->
                    <router-link to="/blockChain">
                        <li v-bind:class="{ nav_active: 7 == menuindex }"  @click="changeValue(7)" >{{$t("header.blockChain")}}</li>
                    </router-link>
                </ul>
            </div>
            <div class="header-right">
                <ul class="lang">
                    <!--                          <li>简体中文</li>
                                              <li>English</li>
                                  <Dropdown @on-click="changeLanguage">
                                      <a href="javascript:void(0)" style="font-size:14px;margin-left: 6px;">
                                          {{languageValue}}
                                          <Icon type="arrow-down-b"></Icon>
                                      </a>
                                      <DropdownMenu slot="list" id="change_language_theme">
                                          <DropdownItem v-if="languageValue=='简体中文'" name="en" >English</DropdownItem>
                                          <DropdownItem v-else name="cn">简体中文</DropdownItem>
                                      </DropdownMenu>
                                  </Dropdown>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import 'iview/dist/styles/iview.css'
    export default {
        name: "NavigationBar",
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true,
                menuindex:1
            }
        },
        computed: {
            languageValue: function() {
                let curlang = this.$store.getters.lang;
                if (curlang == "English") this.$i18n.locale = "en";
                return curlang;
            },
        },
        created: function() {
            this.init();
        },
        methods: {
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true;
                });
            },
            changeValue(index){
                // alert(index)
                // alert("111");
                // console.log("index: ", index)
                this.menuindex = index;
            },
            init() {
                let url = this.$route.path;
                if (url.indexOf("index") != -1) {
                    this.menuindex = 1;
                } else if (url.indexOf("solution") != -1) {
                    if (url.indexOf("supplyChainFinance") != -1) {
                        this.menuindex = 21;
                    } else if (url.indexOf("bankConfirmation") != -1) {
                        this.menuindex = 22;
                    } else if (url.indexOf("blockchainEducation") != -1) {
                        this.menuindex = 23;
                    } else if (url.indexOf("blockchainLogistics") != -1) {
                        this.menuindex = 24;
                    } else if (url.indexOf("blockchainVideo") != -1){
                        this.menuindex = 25;
                    }
                } else if (url.indexOf("produceAndService") != -1) {
                    this.menuindex = 3;
                } else if (url.indexOf("news") != -1) {
                    this.menuindex = 4;
                } else if (url.indexOf("aboutUs") != -1) {
                    this.menuindex = 5;
                } else if (url.indexOf("joinUs") != -1) {
                    this.menuindex = 6;
                } else if (url.indexOf("blockChain") != -1) {
                    this.menuindex = 7;
                }
            },
            changeLanguage(name) {
                console.log('111111111');
                if (name == "en") {
                    this.reload();
                    this.$store.commit("setlang", "English");
                    this.$i18n.locale = "en";
                }
                if (name == "cn") {
                    this.reload();
                    this.$store.commit("setlang", "简体中文");
                    this.$i18n.locale = "zh";
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .menu_list02{
        float: none;
        width: 10vw;
        position: absolute;
        margin-left: -5vw;
        top: 0px;
        text-align: center;
        transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        background-color: rgba(0,0,0,0.9);
        .nav_list{
            color: #ffffff;
            display: block;
            /*
                width: 100%;
                height: 4vh;
                line-height: 4vh;*/
        }
    }
    .nav_list .nav_active {
        border-bottom: 2px solid #fff;
        color: #ffffff;
    }
    .nav_list .nav_active1 {
        color: white;
    }
    .icon-arrow{
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }
    .other:hover .icon-arrow {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
    }
    .nav_list .nav_active2 {
        color: #8C8D8C;
        display: block;
    }
    a {
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }

    ul, li, p {
        margin: 0 auto;
        padding: 0px;
    }

    #app {
        /*width: 100vw;*/
        height: 64px;
        background-color: #000;
        display: block;
    }
    .ivu-dropdown-item{
        width: 10vw;
    }
    .header {
        width: 100vw;
        height: 64px;
        background-color: #000;
        margin: 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: fixed;
        padding: 0 5vw;
        top: 0;
        z-index: 9999;
        /* .head{
           width: 90vw;
         }*/
    }

    .head_img {
        width: 20vw;
    }

    .head_img img {
        padding-top: 8px;
    }

    .nav {
        display: inline-block;
    }

    .header-web {
        width: 70vw;
        display: inline-block;
    }

    .nav_list {
        left: 64px;
    }

    .nav_list li {
        background-color: #000000;
        display: inline-block;
        color: #8C8D8C;
        font-size:14px;
        padding: 0px 20px;
        height: 62px;
        line-height: 62px;
        transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
    }
    .nav_list a:hover {
        color: #ffffff;
    }
  /*  .nav_list li:hover {
        color: #ffffff;
    }*/

    .header-right {
        float: right;
        height: 64px;
        line-height: 64px;
        padding: 0em 2em;
        background-color: rgb(0, 0, 0);
    }

    .lang {
        line-height: 64px;
    }

    .lang li {
        border-bottom-color: transparent;
        color: rgb(140, 141, 140);
        background-color: rgb(0, 0, 0);
        padding: 0em 2em;
        border-radius: 8px;
        margin-bottom: 0.5em;
        font-size: 0.8em;
    }
    @media screen and (max-width: 1280px) and (min-width: 768px){
        .nav_list li {
            font-size:1vw;
        }
    }
</style>