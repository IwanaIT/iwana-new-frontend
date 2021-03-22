import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexOne from '../pages/indices/IndexOne.vue';
import IndexTwo from '../pages/indices/IndexTwo.vue';
import IndexThree from '../pages/indices/IndexThree.vue';
import IndexSix from '../pages/indices/IndexSix.vue';
import IndexFour from '../pages/indices/IndexFour.vue';
import IndexFive from '../pages/indices/IndexFive.vue';
import IndexSeven from '../pages/indices/IndexSeven.vue';
import LoginPageOne from '../pages/auth/LoginPageOne.vue';
import LoginPageTwo from '../pages/auth/LoginPageTwo.vue';
import SignupPageOne from '../pages/auth/SignupPageOne.vue';
import SignupPageTwo from '../pages/auth/SignupPageTwo.vue';
import PasswordRest from '../pages/auth/PasswordReset.vue';
import ChangePassword from '../pages/auth/ChangePassword.vue';
import DownloadPage from '../pages/utilities/DownloadPage';
import ReviewPage from '../pages/utilities/ReviewPage.vue';
import FaqPage from '../pages/utilities/FaqPage.vue';
import Page404 from '../pages/utilities/Page404.vue';
import ComingsoonPage from '../pages/utilities/ComingsoonPage.vue';
import ThankyouPage from '../pages/ThankyouPage.vue';
import TeamPage from '../pages/team/TeamPage.vue';
import TeamOne from '../pages/team/TeamOne.vue';
import BlogGrid from '../pages/blogs/BlogGrid.vue';
import BlogLeftSidebar from '../pages/blogs/BlogLeftSidebar.vue';
import DetailsRightSidebar from '../pages/blogs/DetailsRightSidebar.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: () => import("../views/Home"),
        meta: {title: 'Home 1 - Appco - App Landing Page Template'}
    },
    {
        path: '/tiendas',
        name: 'ListaTiendas',
        component: () => import("../views/ListaTiendas"),
        meta: {title: 'Home 1 - Appco - App Landing Page Template'}
    },
    {
        path: '/tienda',
        name: 'Tienda',
        component: () => import("../views/Tienda"),
        meta: {title: 'Home 1 - Appco - App Landing Page Template'}
    },
    {
        path: '/mi-cuenta',
        name: 'MiCuenta',
        component: () => import("../views/MiCuenta"),
        meta: {title: 'Home 1 - Appco - App Landing Page Template'}
    },
    {
        path: '/',
        name: 'IndexOne',
        component: IndexOne,
        meta: {title: 'Home 1 - Appco - App Landing Page Template'}
    },
    {
        path: '/index-2',
        name: 'IndexTwo',
        component: IndexTwo,
        meta: {title: 'Home 2 - Appco - App Landing Page Template'}
    },
    {
        path: '/index-3',
        name: 'IndexThree',
        component: IndexThree,
        meta: {title: 'Home 3 - Appco - App Landing Page Template'}
    },
    {

        path: '/index-4',
        name: 'IndexFour',
        component: IndexFour,
        meta: {title: 'Home 4 - Appco - App Landing Page Template'}
    },
    {
        path: '/index-5',
        name: 'IndexFive',
        component: IndexFive,
        meta: {title: 'Home 5 -Appco - App Landing Page Template'}

    },
    {
        path: '/index-6',
        name: 'IndexSix',
        component: IndexSix,
        meta: {title: 'Home 6 -Appco - App Landing Page Template'}

    },
    {
        path: '/index-7',
        name: 'IndexSeven',
        component: IndexSeven,
        meta: {title: 'Home 7 -Appco - App Landing Page Template'}

    },
    {
        path: '/about',
        name: 'IndexOne#about',
        component: IndexOne,
        meta: {anchor: 'about'}
    },
    {
        path: '/features',
        name: 'IndexOne#features',
        component: IndexOne,
        meta: {anchor: 'features'}
    },
    {
        path: '/screenshots',
        name: 'IndexOne#screenshots',
        component: IndexOne,
        meta: {anchor: 'screenshots'}
    },
    {
        path: '/pricing',
        name: 'IndexOne#pricing',
        component: IndexOne,
        meta: {anchor: 'pricing'}
    },
    {
        path: '/team',
        name: 'IndexOne#team',
        component: IndexOne,
        meta: {anchor: 'team'}
    },
    {
        path: '/contact',
        name: 'IndexOne#contact',
        component: IndexOne,
        meta: {anchor: 'contact'}
    },
    {
        path: '/login-1',
        name: 'login-one',
        component: LoginPageOne,
        meta: {title: 'login page 1 -Appco -App Landing Page Template'}
    },
    {
        path: '/login-2',
        name: 'login-two',
        component: LoginPageTwo,
        meta: {title: 'login page 2 -Appco -App Landing Page Template'}
    },
    {
        path: '/signup-1',
        name: 'signup-1',
        component: SignupPageOne,
        meta: {title: 'signup page 1 -Appco -App Landing Page Template'}
    },
    {
        path: '/signup-2',
        name: 'signup-2',
        component: SignupPageTwo,
        meta: {title: 'signup page 2 -Appco -App Landing Page Template'}
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: PasswordRest,
        meta: {title: 'password reset -Appco -App Landing Page Template'}
    },
    {
        path: '/change-password',
        name: 'change-password',
        component: ChangePassword,
        meta: {title: 'change password -Appco -App Landing Page Template'}
    },
    {
        path: '/download',
        name: 'download',
        component: DownloadPage,
        meta: {title: 'download -Appco -App Landing Page Template'}
    },
    {
        path: '/review',
        name: 'review',
        component: ReviewPage,
        meta: {title: 'review -Appco -App Landing Page Template'}
    },
    {
        path: '/faq',
        name: 'faq',
        component: FaqPage,
        meta: {title: 'faq page -Appco -App Landing Page Template'}
    },
    {
        path: '/404',
        name: '404',
        component: Page404,
        meta: {title: '404 -Appco -App Landing Page Template'}
    },
    {
        path: '/coming-soon',
        name: 'coming-soon',
        component: ComingsoonPage,
        meta: {title: 'Coming Soon -Appco -App Landing Page Template'}
    },
    {
        path: '/thank-you',
        name: 'thank-you',
        component: ThankyouPage,
        meta: {title: 'Thank you -Appco -App Landing Page Template'}
    },
    {
        path: '/team-1',
        name: 'team-1',
        component: TeamPage,
        meta: {title: 'Team 1 -Appco -App Landing Page Template'}
    },
    {
        path: '/team-2',
        name: 'team-2',
        component: TeamOne,
        meta: {title: 'Team 2 -Appco -App Landing Page Template'}
    },
    {
        path: '/blog-grid',
        name: 'blog-grid',
        component: BlogGrid,
        meta: {title: 'Blog Grid -Appco -App Landing Page Template'}
    },
    {
        path: '/blog-left-sidebar',
        name: 'blog-left-sidebar',
        component: BlogLeftSidebar,
        meta: {title: 'Blog left -Appco -App Landing Page Template'}
    },
    {
        path: '/blog-right-sidebar',
        name: 'blog-right-sidebar',
        component: DetailsRightSidebar,
        meta: {title: 'Details Right Sidebar -Appco -App Landing Page Template'}
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            const element = document.getElementById(to.meta.anchor);
            if (element) {
                return window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0}
        }
    }
});

router.beforeEach((to, from, next) => {

    // Si la página está marcada como 'requiresAuth' y no posee un token, se redirigirá a la página de inicio. (y tampoco puede ingresar a ella)
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (JwtService.getToken() == null) {
    //         next({
    //             path: '/',
    //             params: {nextUrl: to.fullPath}
    //         })
    //     }
    // } else {
    //     next()
    // }

    if (to.meta && to.meta.title)
        document.title = to.meta.title;
    next();
});

export default router