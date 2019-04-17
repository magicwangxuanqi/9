import Home from "@/views/Home";
import City from "@/views/City";
import UserCenter from "@/views/UserCenter";
import Rental from "@/views/Rental";
import Secondary from "@/views/Secondary";
import BridalChamber from "@/views/BridalChamber";
import Rent from "@/views/Rent";
import Detail from "@/views/Detail";
import Admin from "@/views/Admin";
// 按需加载
// import Loadable from 'react-loadable';

let router = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/city/",
    component: City
  },
  {
    path: "/userCenter/",
    component: UserCenter
  },
  {
    path: '/rental/',
    component: Rental
  },
  {
    path: '/secondary/',
    component: Secondary
  },
  {
    path: '/bridalChamber/',
    component: BridalChamber
  },
  {
    path: '/rent/',
    component: Rent
  },
  {
    path: '/detail/',
    component: Detail
  },
  {
    path: '/admin/',
    component: Admin
  }
];
export default router;
