import Home from "@/views/Home";
import City from "@/views/City";
import UserCenter from "@/views/UserCenter";
import Rental from "@/views/Rental";
import Secondary from "@/views/Secondary";
import BridalChamber from "@/views/BridalChamber";
import Rent from "@/views/Rent";
// import Loadable from 'react-loadable';按需加载

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
  }
];
export default router;
