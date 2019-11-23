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
import creditchain from "../components/creditchain";
import BlockchainLogistics from "../components/BlockchainLogistics";
import BlockchainVideo from "../components/BlockchainVideo";
import NavigationBar from "../components/NavigationBar";
import VideoNews from "../news/VideoNews";
import ExchangeNews from "../news/ExchangeNews";
import Financing from "../news/Financing";

/*const Index = () => import('../components/Index');
const Solution = () => import('../components/Solution');
const ProduceAndService = () => import('../components/ProduceAndService');
const AboutUs = () => import('../components/AboutUs');
const BlockChain = () => import('../components/BlockChain');
const News = () => import('../components/News');
const JoinUs = () => import('../components/JoinUs');
const BankConfirmation = () => import('../components/BankConfirmation');
const BlockchainEducation = () => import('../components/BlockchainEducation');
const BlockchainLogistics = () => import('../components/BlockchainLogistics');
const BlockchainVideo = () => import('../components/BlockchainVideo');
const NavigationBar = () => import('../components/NavigationBar');
const VideoNews = () => import('../news/VideoNews');
const ExchangeNews = () => import('../news/ExchangeNews');
const Financing = () => import('../news/Financing');*/

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
