import Home from '../views/Home'
import City from '../views/City'
let router = [{
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/city',
        component: City
    }
]
export default router