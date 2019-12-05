import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Solution from "../components/Solution";
import ProduceAndService from "../components/ProduceAndService";
import AboutUs from "../components/AboutUs";
import BlockChain from "../components/BlockChain";
import News from "../components/News";
import JoinUs from "../components/JoinUs";
import BankConfirmation from "../components/BankConfirmation";
import BlockchainEducation from "../components/BlockchainEducation";
import BlockchainLogistics from "../components/BlockchainLogistics";

import creditchain from "../components/creditchain";
/*import billchain from "../components/billchain";
import fachain from "../components/fachain";
import crchain from "../components/crchain";
import Gis from "../components/Gis";*/


import BlockchainVideo from "../components/BlockchainVideo";
import NavigationBar from "../components/NavigationBar";
import VideoNews from "../news/VideoNews";
import ExchangeNews from "../news/ExchangeNews";
import Financing from "../news/Financing";

Vue.use(Router)

export default [
  { path: '/', name: 'Index', component: Index },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/solution/supplyChainFinance',
    name: 'Solution',
    component: Solution
  },
  {
    path: '/produceAndService',
    name: 'ProduceAndService',
    component: ProduceAndService
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/joinUs',
    name: 'JoinUs',
    component: JoinUs
  },
  {
    path: '/blockChain',
    name: 'BlockChain',
    component: BlockChain
  },
  {
    path: '/solution/bankConfirmation',
    name: 'BankConfirmation',
    component: BankConfirmation
  },


/*
  {
    path: '/solution/creditchain',
    name: 'creditchain',
    component: creditchain
  },
  {
    path: '/solution/billchain',
    name: 'BillChain',
    component: billchain
  },
  {
    path: '/solution/fachain',
    name: 'fachain',
    component: fachain
  },
  {
    path: '/solution/crchain',
    name: 'crchain',
    component: crchain
  },
{
  path: '/solution/Gis',
      name: 'Gis',
    component: Gis
},*/





  {
    path: '/solution/blockchainEducation',
    name: 'BlockchainEducation',
    component: BlockchainEducation
  },
  {
    path: '/solution/blockchainLogistics',
    name: 'BlockchainLogistics',
    component: BlockchainLogistics
  },
  {
    path: '/solution/blockchainVideo',
    name: 'BlockchainVideo',
    component: BlockchainVideo
  },
  {
    path: '/solution/creditchain',
    name: 'creditchain',
    component: creditchain
  },
  {
    path: '/navigationBar',
    name: 'NavigationBar',
    component: NavigationBar
  },
  {
    path: '/news/videoNews',
    name: 'VideoNews',
    component: VideoNews
  },
  {
    path: '/news/exchangeNews',
    name: 'ExchangeNews',
    component: ExchangeNews
  },
  {
    path: '/news/Financing',
    name: 'Financing',
    component: Financing
  }
];
