import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import("../views/Home"),
        meta: {title: 'IwanaCash - Elige tu tienda, compra y recibe dinero directo a tu bolsillo'}
    },
    {
        path: '/tiendas',
        name: 'ListaTiendas',
        component: () => import("../views/ListaTiendas"),
        meta: {title: 'IwanaCash - Elige tu tienda, compra y recibe dinero directo a tu bolsillo'}
    },
    {
        path: '/:pais/tienda/:nombreTienda',
        name: 'Tienda',
        component: () => import("../views/Tienda"),
        meta: {title: 'IwanaCash - Elige tu tienda, compra y recibe dinero directo a tu bolsillo'}
    },
    {
        path: '/mi-cuenta',
        name: 'MiCuenta',
        component: () => import("../views/MiCuenta"),
        meta: {title: 'IwanaCash - Elige tu tienda, compra y recibe dinero directo a tu bolsillo'}
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