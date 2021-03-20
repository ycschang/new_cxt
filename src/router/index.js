import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage/HomePage'
import EnterBusiness from '@/views/enterBusiness/EnterBusiness'
import Contact from '@/components/contact/Contact'
import PensionTrends from '@/components/pensionTrends/PensionTrends'
import HomeCare from '@/views/homeCare/HomeCare'
import Company from '@/components/company/Company'
import Community from "../components/community/Community";
import HomePension from "../views/homePension/HomePension";
import InstitutionalPension from "../views/InstitutionalPension/InstitutionalPension";
import SmartPension from "../views/smartPension/SmartPension";
import Index from "@/views/index/Index";
// import Element from 'element-ui'
// import $ from 'jquery'

// Vue.use(Element)
Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
		path: '/',
		name: 'Index',
		component: Index,
		hidden: true
	},
	{
		path: '/HomePage',
		name: 'HomePage',
		component: HomePage,
		hidden: true,
	},
	{
		path: '/EnterBusiness',
		name: 'EnterBusiness',
		component: EnterBusiness,
		hidden: true,
	},
	{
		path: '/Contact',
		name: 'Contact',
		component: Contact,
		hidden: true,
	},
	{
		path: '/PensionTrends',
		name: 'PensionTrends',
		component: PensionTrends,
		hidden: true
	},
	{
		path: '/HomeCare',
		name: 'HomeCare',
		component: HomeCare,
		hidden: true,
	},
	{
		path: '/Company',
		name: 'Company',
		component: Company,
		hidden: true,
		children:[
			{
				path: '/',
				name: 'Company',
				component: Community
			},
			{
				path: 'Community',
				name: 'Community',
				component: Community,
			},
			{
				path: 'HomePension',
				name: 'HomePension',
				component: HomePension,
			},
			{
				path: 'InstitutionalPension',
				name: 'InstitutionalPension',
				component: InstitutionalPension,
			},
			{
				path: 'SmartPension',
				name: 'SmartPension',
				component: SmartPension,
			}
		]
	}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

]

const createRouter = () => new Router({
	// mode: 'history',
	// require service support
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router
