<template>
    <div class="solution" style="background-color: #003366; color: white;margin: 0 auto; padding: 0px; margin-top: 0px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class=" rotation_style"  src="http://media.openserver.cn/image/creditchainIMG/title_bg.png">
                    <div class="title">{{$t("solution.creditchain.MianTitle")}}</div>
                    <div class="subtitle">{{$t("solution.creditchain.subTitle")}}</div>
                </div>
                <div class="right">
                    <p class="right_title">{{$t("solution.creditchainName")}}</p>
                    <p class="right_content">{{$t("solution.creditchain.Discription")}}</p>
                    <a class="btn_login" href="https://creditchain.openserver.cn/login/application.html">{{$t("solution.creditchain.SysEntry")}}</a>
                </div>
            </div>
            <img class="title_topimg" src="http://media.openserver.cn/image/creditchainIMG/top_bg.png">
            <img class="title_bottomimg" src="http://media.openserver.cn/image/creditchainIMG/top_bottom_bg.png">
          <!--  <div class="title_bottomimg"></div>-->
        </div>
        <div class="image_list">
            <img src="http://media.openserver.cn/image/creditchainIMG/img01.png">
            <img src="http://media.openserver.cn/image/creditchainIMG/img02.png">
            <img src="http://media.openserver.cn/image/creditchainIMG/img03.png">
        </div>
        <div class="demand" >
            <div class="title-box">
                <p class="title">{{$t("solution.creditchain.allianceName")}}</p>
                <p class="subtitle">{{$t("solution.creditchain.allianceIntroduction")}}</p>
                <img src="http://media.openserver.cn/image/creditchainIMG/redheader_file.png" alt="" class="img">
                <p class="submenu">{{$t("solution.creditchain.allianceMemberTitle")}}</p>
                <div class="member_list">
                   <ul>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_pwc.png"><span>{{$t("solution.creditchain.allianceMember01")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_ztkj.png"><span>{{$t("solution.creditchain.allianceMember02")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_po.png"><span>{{$t("solution.creditchain.allianceMember03")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_hbsdb.png"><span>{{$t("solution.creditchain.allianceMember04")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_hbszkj.png"><span>{{$t("solution.creditchain.allianceMember05")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_zzhz.png"><span>{{$t("solution.creditchain.allianceMember06")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_wstq.png"><span>{{$t("solution.creditchain.allianceMember07")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_hjtg.png"><span>{{$t("solution.creditchain.allianceMember08")}}</span></li>
                       <li><img src="http://media.openserver.cn/image/creditchainIMG/member_bjdc.png"><span>{{$t("solution.creditchain.allianceMember09")}}</span></li>
                   </ul>
                </div>
            </div>
            <div class="content">
                <div class="title-box">
                    <p class="menu_title">{{$t("solution.creditchain.SMETitle")}}</p>
                    <img src="http://media.openserver.cn/image/creditchainIMG/SME_Financing-dilemma.jpg" alt="" class="img">
                </div>
                <div class="item">
                    <p class="menu_title">{{$t("solution.creditchain.SMEcontentTitle")}}</p>
                    <div class="card-container">
                        <div class="card">
                            <div class="card_list card_list01">
                                <p class="card-title">{{$t("solution.creditchain.SMEsubTitle01")}}</p>
                                <div class="card-content">
                                    <p>{{$t("solution.creditchain.SMEcontent01_1")}}</p>
                                    <p>{{$t("solution.creditchain.SMEcontent01_2")}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card_list card_list02">
                                <p class="card-title">{{$t("solution.creditchain.SMEsubTitle02")}}</p>
                                <div class="card-content">
                                    <p class="content_title">{{$t("solution.creditchain.SMEcontent02_1")}}</p>
                                    <p>{{$t("solution.creditchain.SMEcontent02_2")}}</p>
                                    <p>{{$t("solution.creditchain.SMEcontent02_3")}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card_list card_list03">
                                <p class="card-title">{{$t("solution.creditchain.SMEsubTitle03")}}</p>
                                <div class="card-content">
                                    <p class="content_title">{{$t("solution.creditchain.SMEcontent03_1")}}</p>
                                    <p>{{$t("solution.creditchain.SMEcontent03_2")}}</p>
                                    <p>{{$t("solution.creditchain.SMEcontent03_3")}}</p>
                                    <p>{{$t("solution.creditchain.SMEcontent03_4")}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="solution_alliance">
                <div class="title-box">
                <p class="solution_title">{{$t("solution.creditchain.solution_title")}}</p>
                    <ul class="Serial_txt">
                        <li>
                            <span>1</span>
                            <p class="solution_subtitle">{{$t("solution.creditchain.solution_content01")}} </p>
                        </li>
                        <li>
                            <span>2</span>
                            <p class="solution_subtitle">{{$t("solution.creditchain.solution_content02")}}</p>
                        </li>
                        <li>
                            <span>3</span>
                            <p class="solution_subtitle">{{$t("solution.creditchain.solution_content03")}}</p>
                        </li>
                        <li>
                            <span>4</span>
                            <p class="solution_subtitle">{{$t("solution.creditchain.solution_content04")}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <div class="title-box">
                    <p class="title ">{{$t("solution.creditchain.ServicePlatform_title")}}智能财税云服务平台</p>
                    <img src="http://media.openserver.cn/image/creditchainIMG/zncsyfwpt.png" alt="" class="img">
                    <p class="menu_title ">{{$t("solution.creditchain.ServicePlatform_subtitle01")}}</p>
                    <img src="http://media.openserver.cn/image/creditchainIMG/wmfwpt.png" alt="" class="img">
                    <p class="menu_title ">
                        {{$t("solution.creditchain.ServicePlatform_subtitle02")}}
                    </p>
                    <table class="table_list">
                        <tr>
                            <td>{{$t("solution.creditchain.subtitle02_list01")}}</td>
                            <td>{{$t("solution.creditchain.subtitle02_list02")}}</td>
                        </tr>
                        <tr>
                            <td>{{$t("solution.creditchain.subtitle02_list03")}}</td>
                            <td>{{$t("solution.creditchain.subtitle02_list04")}}</td>
                        </tr>
                        <tr>
                            <td>{{$t("solution.creditchain.subtitle02_list05")}}</td>
                            <td>{{$t("solution.creditchain.subtitle02_list06")}}</td>
                        </tr>
                        <tr>
                            <td>{{$t("solution.creditchain.subtitle02_list07")}}</td>
                            <td>{{$t("solution.creditchain.subtitle02_list08")}}</td>
                        </tr>
                        <tr>
                            <td>{{$t("solution.creditchain.subtitle02_list09")}}</td>
                            <td>{{$t("solution.creditchain.subtitle02_list10")}}</td>
                        </tr>
                        <tr>
                            <td>{{$t("solution.creditchain.subtitle02_list11")}}</td>
                            <td>...</td>
                        </tr>
                    </table>
                    <p class="menu_title ">{{$t("solution.creditchain.ServicePlatform_subtitle03")}}</p>
                    <img src="http://media.openserver.cn/image/creditchainIMG/sjzxjjfa.png" alt="" class="img">
                    <p class="menu_title ">{{$t("solution.creditchain.ServicePlatform_subtitle04")}}</p>
                    <img src="http://media.openserver.cn/image/creditchainIMG/XBRL_jhbz.png" alt="" class="img">
                    <p class="menu_title">{{$t("solution.creditchain.ServicePlatform_subtitle05")}}</p>
                    <img src="http://media.openserver.cn/image/creditchainIMG/XBRL_jcpt.gif" alt="" class="img">
                </div>
            </div>
        </div>
        <div class="demand">
            <div class="title-box">
                <p class="title ">{{$t("solution.creditchain.SolutionAdvantage")}}</p>
                <span class="advantage_title border_b">{{$t("solution.creditchain.Advantage_title01")}}</span>
                <p class="advantage_txt">{{$t("solution.creditchain.Advantage_content01")}}</p>
                <span class="advantage_title border_b">{{$t("solution.creditchain.Advantage_title02")}}</span>
                <p class="advantage_txt">{{$t("solution.creditchain.Advantage_content02")}}</p>
            </div>
        </div>
        <div class="progress">
            <div class="title-box">
                <p class="title ">{{$t("solution.creditchain.Progress_title")}}</p>
                <p class="solution_title">{{$t("solution.creditchain.Progress_subtitle01")}}</p>
                <ul>
                    <li>
                        <span class="advantage_title">{{$t("solution.creditchain.Progress_conunt_title01")}}</span>
                        <div class="progress_data">
                            <span class="data">16270</span>
                            <span class="unit">{{$t("solution.creditchain.Progress_conunt_unit01")}}</span>
                        </div>

                    </li>
                    <li>
                        <span class="advantage_title">{{$t("solution.creditchain.Progress_conunt_title02")}}</span>
                        <div class="progress_data">
                            <span class="data">134</span>
                            <span class="unit">{{$t("solution.creditchain.Progress_conunt_unit02")}}</span>
                        </div>
                    </li>
                    <li>
                        <span class="advantage_title">{{$t("solution.creditchain.Progress_conunt_title03")}}</span>
                        <div class="progress_data">
                            <span class="data">90</span>
                            <span class="unit">{{$t("solution.creditchain.Progress_conunt_unit03")}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <p class="solution_title">{{$t("solution.creditchain.Progress_subtitle02")}}</p>
            <div class="DevelopmentPath">
                <p class="date">2019.10</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city01")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details01")}}</span>
                    </div>
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city02")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details02")}}</span>
                    </div>
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city03")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details03")}}</span>
                    </div>
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city03")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details04")}}</span>
                    </div>
                </div>
                <p class="date">2019.09</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city04")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details05")}}</span>
                    </div>
                </div>
                <p class="date">2019.08</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city01")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details06")}}</span>
                    </div>
                </div>
                <p class="date">2019.07</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city05")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details07")}}</span>
                    </div>
                </div>
                <p class="date">2019.06</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city02")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details08")}}</span>
                    </div>
                </div>
                <p class="date">2019.03</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city03")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details09")}}</span>
                    </div>
                </div>
                <p class="date">2019.01</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city03")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details10")}}</span>
                    </div>
                </div>
                <p class="date">2018.12</p>
                <div class="content">
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city04")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details11")}}</span>
                    </div>
                    <div class="description">
                        <span class="city">{{$t("solution.creditchain.DevelopmentPath_city03")}}</span>
                        <span class="point">·</span>
                        <span class="details">{{$t("solution.creditchain.DevelopmentPath_details12")}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="demand">
            <div class="title-box">
                <p class="title ">{{$t("solution.creditchain.futurePlan")}}</p>
                <img src="http://media.openserver.cn/image/creditchainIMG/map.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: "creditchain",
}
</script>

<style  src="./../assets/css/creditchain.css" scoped lang="scss">
    .introduce {
        display: flex;
        height: auto;
        min-height: 100vh;
        background: url("http://media.openserver.cn/image/creditchainIMG/top_bg.png") no-repeat top;
        position: relative;
        background-size: cover;
    }


</style>
