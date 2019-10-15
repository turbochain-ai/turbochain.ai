<template>
    <div class="header">
        <div class="head_img">
            <a class="" href=""><img src="../assets/homepage_logo.png" style="height: 44px;"></a>
        </div>
        <div class="header-web">
            <nav class="nav_left">
                <div class="nav">
                    <ul class="nav_list">
                        <router-link to="/index">
                            <li v-bind:class="{ nav_active: 1 == menuindex }" @click="changeValue(1)">
                                {{$t("header.home")}}
                            </li>
                        </router-link>
                        <li>
                            <Dropdown style="z-index: 9999;position: relative" class="other">
                                <a v-bind:class="{ nav_active1 : 21 == menuindex || 22 == menuindex || 23 == menuindex || 24 == menuindex || 25 == menuindex, nav_active2: 21 != menuindex && 22 != menuindex && 23 != menuindex && 24 != menuindex && 25 != menuindex}"
                                   href="javascript:void(0)">{{$t("header.solution")}} &nbsp;<img class="icon-arrow"
                                                                                                  src="../assets/arrow_down.png">
                                    <!--<Icon type="ios-arrow-down"></Icon>--></a>
                                <DropdownMenu class="menu_list02" slot="list">
                                    <DropdownItem>
                                        <router-link class="nav_list" to="/solution/supplyChainFinance">
                                            <a v-bind:class="{nav_active1 : 21==menuindex, nav_active2: 21!=menuindex}"
                                               @click="changeValue(21)">{{$t("solution.financeName")}}</a>
                                        </router-link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <router-link class="nav_list" to="/solution/bankConfirmation">
                                            <a v-bind:class="{nav_active1 : 22==menuindex, nav_active2: 22!=menuindex}"
                                               @click="changeValue(22)">{{$t("solution.bankName")}}</a>
                                        </router-link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <router-link class="nav_list" to="/solution/blockchainEducation">
                                            <a v-bind:class="{nav_active1 : 23==menuindex, nav_active2: 23!=menuindex}"
                                               @click="changeValue(23)">{{$t("solution.educationName")}}</a>
                                        </router-link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <router-link class="nav_list" to="/solution/blockchainLogistics">
                                            <a v-bind:class="{nav_active1 : 24==menuindex, nav_active2: 24!=menuindex}"
                                               @click="changeValue(24)">{{$t("solution.logisticsName")}}</a>
                                        </router-link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <router-link class="nav_list" to="/solution/blockchainVideo">
                                            <a v-bind:class="{nav_active1 : 25==menuindex, nav_active2: 25!=menuindex}"
                                               @click="changeValue(25)">{{$t("solution.videoName")}}</a>
                                        </router-link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li>
                            <router-link to="/produceAndService">
                                <Dropdown style="z-index: 9999;position: relative" class="other">
                                    <a v-bind:class="{ nav_active1 : 31 == menuindex || 32 == menuindex || 33 == menuindex || 34 == menuindex || 35 == menuindex || 36 == menuindex || 37 == menuindex, nav_active2: 31 != menuindex && 32 != menuindex && 33 != menuindex && 34 != menuindex && 35 != menuindex && 36 != menuindex && 37 != menuindex}"
                                       href="javascript:void(0)">{{$t("header.service")}}&nbsp;<img class="icon-arrow"
                                                                                                    src="../assets/arrow_down.png"></a>
                                    <DropdownMenu class="menu_list02" slot="list">
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 31==menuindex, nav_active2: 31!=menuindex}"
                                               @click="changeValue(31)">teleComm</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 32==menuindex, nav_active2: 32!=menuindex}"
                                               @click="changeValue(32)">RPA</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 33==menuindex, nav_active2: 33!=menuindex}"
                                               @click="changeValue(33)">iOSP</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 34==menuindex, nav_active2: 34!=menuindex}"
                                               @click="changeValue(34)">{{$t("produceAndService.exchange.exchange")}}</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 35==menuindex, nav_active2: 35!=menuindex}"
                                               @click="changeValue(35)">mulechain</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 36==menuindex, nav_active2: 36!=menuindex}"
                                               @click="changeValue(36)">{{$t("produceAndService.enterpriseDataBrowser")}}</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a v-bind:class="{nav_active1 : 37==menuindex, nav_active2: 37!=menuindex}"
                                               @click="changeValue(37)">{{$t("produceAndService.filmAndTelevisionShooting")}}</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <!--                        <li v-bind:class="{ nav_active: 3 == menuindex }"  @click="changeValue(3)" >{{$t("header.service")}}</li>-->
                            </router-link>
                        </li>
                        <router-link to="/news">
                            <li v-bind:class="{ nav_active: 4 == menuindex }" @click="changeValue(4)">
                                {{$t("header.news")}}
                            </li>
                        </router-link>
                        <router-link to="/aboutUs">
                            <li v-bind:class="{ nav_active: 5 == menuindex }" @click="changeValue(5)">
                                {{$t("header.aboutUs")}}
                            </li>
                        </router-link>
                        <!--<router-link to="/joinUs">
                            <li v-bind:class="{ nav_active: 6 == menuindex }"  @click="changeValue(6)" >{{$t("header.joinUs")}}</li>
                        </router-link>-->
                        <li v-bind:class="{ nav_active: 6 == menuindex }">{{$t("header.joinUs")}}</li>
                        <router-link to="/blockChain">
                            <li v-bind:class="{ nav_active: 7 == menuindex }" @click="changeValue(7)">
                                {{$t("header.blockChain")}}
                            </li>
                        </router-link>
                    </ul>
                </div>
            </nav>
            <div class="header-right">
                <ul class="lang">
                    <Dropdown @on-click="changeLanguage">

<!--                        <a href="javascript:void(0)" style="font-size:14px;margin-left: 6px;" class="chengeL">-->
<!--                            简体中文-->
<!--                        </a>-->
                     <a href="javascript:void(0)" style="font-size:14px;margin-left: 6px;" class="chengeL">
                            {{languageValue}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list" id="change_language_theme">
                            <DropdownItem v-if="languageValue=='简体中文'" name="en">English</DropdownItem>
                            <DropdownItem v-else name="cn">简体中文</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
            </div>
        </div>
        <img :class="[rotate?'fa fa-arrow-down go':'fa fa-arrow-down aa']" id="nav_rotate" src="../assets/nav_btn.png"
             class="nav-btn" @click="showMenu">
        <div v-bind:style="{ display: isShow }" class="nav_phone">
            <ul>
                <!--<img class="icon-arrow" src="../assets/arrow_down.png" @click="showMenu">-->
                <router-link to="/index">
                    <li v-bind:class="{ nav_active: 1 == menuindex }" @click="changeValue(1)">{{$t("header.home")}}</li>
                </router-link>
                <a class="nac_list02" @click="showSolutionChildMenu"
                   v-bind:class="{ nav_active1 : 21 == menuindex || 22 == menuindex || 23 == menuindex || 24 == menuindex || 25 == menuindex, nav_active2: 21 != menuindex && 22 != menuindex && 23 != menuindex && 24 != menuindex && 25 != menuindex}">
                    {{$t("header.solution")}} &nbsp;
                    <img class="arrow" :class="[rotate_arrow?'fa fa-arrow-down arrow_down':'fa fa-arrow-down arrow_up']"
                         src="@/assets/arrow_down.png"> <!--<Icon type="ios-arrow-down"></Icon>-->
                    <div v-bind:style="{display: isShowSolutionChildMenu}">
                        <router-link class="nav_list" to="/solution/supplyChainFinance">
                            <a v-bind:class="{nav_active1 : 21==menuindex, nav_active2: 21!=menuindex}"
                               @click="changeValue(21)">{{$t("solution.financeName")}}</a>
                        </router-link>
                        <router-link class="nav_list" to="/solution/bankConfirmation">
                            <a v-bind:class="{nav_active1 : 22==menuindex, nav_active2: 22!=menuindex}"
                               @click="changeValue(22)">{{$t("solution.bankName")}}</a>
                        </router-link>
                        <router-link class="nav_list" to="/solution/blockchainEducation">
                            <a v-bind:class="{nav_active1 : 23==menuindex, nav_active2: 23!=menuindex}"
                               @click="changeValue(23)">{{$t("solution.educationName")}}</a>
                        </router-link>
                        <router-link class="nav_list" to="/solution/blockchainLogistics">
                            <a v-bind:class="{nav_active1 : 24==menuindex, nav_active2: 24!=menuindex}"
                               @click="changeValue(24)">{{$t("solution.logisticsName")}}</a>
                        </router-link>
                        <router-link class="nav_list" to="/solution/blockchainVideo">
                            <a v-bind:class="{nav_active1 : 25==menuindex, nav_active2: 25!=menuindex}"
                               @click="changeValue(25)">{{$t("solution.videoName")}}</a>
                        </router-link>
                    </div>
                </a>
                <a class="nac_list02" @click="showProduceChildMenu"
                   v-bind:class="{ nav_active1 : 31 == menuindex || 32 == menuindex || 33 == menuindex || 34 == menuindex || 35 == menuindex || 36 == menuindex || 37 == menuindex, nav_active2: 31 != menuindex && 32 != menuindex && 33 != menuindex && 34 != menuindex && 35 != menuindex && 36 != menuindex && 37 != menuindex}">
                    {{$t("header.service")}}&nbsp;
                    <img class="arrow"
                         :class="[rotate_arrow02?'fa fa-arrow-down arrow_down':'fa fa-arrow-down arrow_up']"
                         src="@/assets/arrow_down.png">
                    <div v-bind:style="{display: isShowProduceChildMenu}"><!-- :class="[rotate_arrow02?'fa fa-arrow-down arrow_down':'fa fa-arrow-down arrow_up']"-->
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 31==menuindex, nav_active2: 31!=menuindex}"
                               @click="changeValue(31)">teleComm</a>
                        </router-link>
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 32==menuindex, nav_active2: 32!=menuindex}"
                               @click="changeValue(32)">RPA</a>
                        </router-link>
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 33==menuindex, nav_active2: 33!=menuindex}"
                               @click="changeValue(33)">iOSP</a>
                        </router-link>
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 34==menuindex, nav_active2: 34!=menuindex}"
                               @click="changeValue(34)">{{$t("produceAndService.exchange.exchange")}}</a>
                        </router-link>
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 35==menuindex, nav_active2: 35!=menuindex}"
                               @click="changeValue(35)">mulechain</a>
                        </router-link>
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 36==menuindex, nav_active2: 36!=menuindex}"
                               @click="changeValue(36)">{{$t("produceAndService.enterpriseDataBrowser")}}</a>
                        </router-link>
                        <router-link class="nav_list" to="/produceAndService">
                            <a v-bind:class="{nav_active1 : 37==menuindex, nav_active2: 37!=menuindex}"
                               @click="changeValue(37)">{{$t("produceAndService.filmAndTelevisionShooting")}}</a>
                        </router-link>
                    </div>
                </a>
                <router-link to="/news">
                    <li v-bind:class="{ nav_active: 4 == menuindex }" @click="changeValue(4)">{{$t("header.news")}}</li>
                </router-link>
                <router-link to="/aboutUs">
                    <li v-bind:class="{ nav_active: 5 == menuindex }" @click="changeValue(5)">{{$t("header.aboutUs")}}
                    </li>
                </router-link>
                <a v-bind:class="{ nav_active: 6 == menuindex }">{{$t("header.joinUs")}}</a>
                <!--  <router-link>
                      <li v-bind:class="{ nav_active: 6 == menuindex }"  @click="changeValue(6)" >{{$t("header.joinUs")}}</li>
                  </router-link>
  -->
                <router-link to="/blockChain">
                    <li v-bind:class="{ nav_active: 7 == menuindex }" @click="changeValue(7)">
                        {{$t("header.blockChain")}}
                    </li>
                </router-link>
            </ul>
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
                menuindex:1,
                isShow: 'none',

                isShowSolutionChildMenu: 'none',
                isShowProduceChildMenu: 'none',

                isShowTwoMenu: 'none',
                rotate:false

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

                this.rotate=!this.rotate;
                console.log(this.rotate)
                this.menuindex = index;
                if (this.isShow == '') {
                    this.isShow = 'none'
                }
            },
            init() {
                this.$store.commit("initLang");
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
            },
            showMenu: function(event) {
                this.rotate=!this.rotate;
                console.log(this.rotate)

                let el1 = event.currentTarget;
                let el2 = event.target;
                console.log('el1: ', el1);
                console.log('el2: ', el2);
                console.log('isShow: ', this.isShow);
                console.log('是否相等：', this.isShow == 'none')
                if (this.isShow == 'none') {
                    this.isShow = ''

                    console.log("this.isShow1: ", this.isShow)
                } else {
                    this.isShow = 'none'
                }
            },
            showSolutionChildMenu() {
                this.rotate_arrow=!this.rotate_arrow;
                console.log(this.rotate_arrow);
                console.log('this.isShowSolutionChildMenu: ',this.isShowSolutionChildMenu);
                if (this.isShow == '') {
                    if (this.isShowSolutionChildMenu == '') {
                        this.isShowSolutionChildMenu = 'none'
                    } else {
                        this.isShowSolutionChildMenu = ''
                    }
                } else {
                    this.isShowSolutionChildMenu = 'none'
                }
            },
            showProduceChildMenu() {
                this.rotate_arrow02=!this.rotate_arrow02;
                console.log(this.rotate_arrow02)
                console.log('this.isShowProduceChildMenu: ',this.isShowProduceChildMenu);
                if (this.isShow == '') {
                    if (this.isShowProduceChildMenu == '') {
                        this.isShowProduceChildMenu = 'none'
                    } else {
                        this.isShowProduceChildMenu = ''
                    }
                } else {
                    this.isShowProduceChildMenu = 'none'
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .phone {
        width: 150px;
        margin-top:10px;
        margin-left:20px;
    }

    .aa{
        transition: all 0.5s;
    }
    .go{
        transform:rotate(-90deg);
        transition: all 0.5s;
    }
    .arrow{
        display: inline-block;
        float: right;
        margin-top: 3vh;
        margin-right: 4vw;
    }
    .arrow_up{
        transition: all 0.5s;

    }
    .arrow_down{
        transform:rotate(-180deg);
        transition: all 0.5s;

    }
    .nac_list02{
        display: inline-block;
        width: 100%;
    }
.nav_phone{
    display: none;
    position: absolute;
    width: 90vw;
    background-color: #000;
    height: 100vh;
    margin: 0 auto;
    margin-left: -5vw;
    margin-top: 64px;
    line-height: 8vh;
    padding: 5vw;
    a{
        color: #ffffff;
    }
}

    .nav-btn{
        display: none;
    }
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
    .chengeL{
        background-color: #000;
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
        padding: 0vw 1.5625vw;
        /*padding: 0px 20px;*/
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
     /*   padding: 0em 2em;*/
   /*     background-color: rgb(0, 0, 0);*/
    }

    .lang {
        line-height: 64px;
        background-color: #000000;
    }

    .lang li {
        border-bottom-color: transparent;
        color: rgb(140, 141, 140);

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
    @media screen and (min-width: 1100px) {
        .nav_left{
            display: inline-block;
        }
    }
    @media screen and (max-width: 1100px) {
       .nav_left{
              display: none;
          }
        .nav_phone{
            display: block;
        }
        .nav-btn {
              display: inline-block;
              position: fixed;
              top: 15px;
              right: 15px;
              z-index: 99999;
              padding: 5px 5px 3px;
              cursor: pointer;
          }
        .header-right{
            position: fixed;
            right: 48px;
            margin-right: 4vw;
            text-align: right;
        }
    }
    @media all and (min-width: 900px) {
        nav > .nav-item > .dropdown{
            padding-top: 20px;
        }
    }
    @media all and (max-width: 1000px) {

        nav {
            position: absolute;
            display: none;
            width: 100%;
            top: 0;
            right: 0;
            z-index: 99998;
            padding: 0 15px 30px;
        }

    }
    @media all and (min-width: 768px) {
        nav > .nav-item > .dropdown {
            padding-top: 20px;
        }
    }

</style>