<template>
    <header class="header">
        <!--start navbar-->
        <nav
            class="navbar navbar-expand-lg fixed-top"
            v-bind:class="{
                affix: hasAffix,
                'custom-nav': coloredLogo,
                'bg-transparent': !coloredLogo,
                'white-bg': coloredLogo,
            }"
        >
            <div class="container">
                <a class="navbar-brand" href="/"
                    ><img
                        :src="
                            coloredLogo
                                ? 'img/logo-color-1x.png'
                                : 'img/logo-white-1x.png'
                        "
                        width="120"
                        alt="logo"
                        class="img-fluid"
                /></a>

                <button
                    class="navbar-toggler"
                    type="button"
                    @click="mobileNavClicked"
                    v-bind:class="{ collapsed: collapsed }"
                >
                    <span class="ti-menu"></span>
                </button>

                <div
                    class="collapse navbar-collapse main-menu h-auto"
                    v-bind:class="{ show: !collapsed }"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link page-scroll dropdown-toggle"
                                href="#"
                                id="navbarDropdownHome"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Home
                            </a>
                            <div
                                class="dropdown-menu submenu"
                                aria-labelledby="navbarDropdownHome"
                            >
                                <router-link to="/"
                                    >Demo Template 1</router-link
                                >

                                <router-link
                                    to="index-2"
                                    v-scroll-to="'#index-2'"
                                    >Demo Template 2</router-link
                                >
                                <router-link
                                    to="index-3"
                                    v-scroll-to="'#index-3'"
                                    >Demo Template 3</router-link
                                >

                                <router-link
                                    to="index-4"
                                    v-scroll-to="'#index-4'"
                                    >Demo Template 4</router-link
                                >

                                <router-link
                                    to="index-5"
                                    v-scroll-to="'#index-5'"
                                    >Demo Template 5</router-link
                                >

                                <router-link
                                    to="index-6"
                                    v-scroll-to="'#index-6'"
                                    >Demo Template 6</router-link
                                >

                                <router-link
                                    to="index-7"
                                    v-scroll-to="'#index-7'"
                                    >Demo Template 7</router-link
                                >
                            </div>
                        </li>
                        <li class="nav-item nav-link page-scroll">
                            <router-link to="#about" v-scroll-to="'#about'"
                                >About</router-link
                            >
                        </li>

                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#features"
                                v-scroll-to="'#features'"
                                >Features</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#pricing"
                                v-scroll-to="'#pricing'"
                                >Pricing</router-link
                            >
                        </li>

                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#screenshots"
                                v-scroll-to="'#screenshots'"
                                >Screenshots</router-link
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link page-scroll dropdown-toggle"
                                href="#"
                                id="navbarDropdownPage"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Pages
                            </a>
                            <div
                                class="dropdown-menu submenu"
                                aria-labelledby="navbarDropdownPage"
                            >
                                <router-link
                                    class="dropdown-item"
                                    to="login-1"
                                    v-scroll-to="'#login-1'"
                                    >Login Page 1</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="login-2"
                                    v-scroll-to="'#login-2'"
                                    >Login Page 2</router-link
                                >

                                <router-link
                                    class="dropdown-item"
                                    to="signup-1"
                                    v-scroll-to="'#signup-1'"
                                    >Signup Page 1</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="signup-2"
                                    v-scroll-to="'#signup-2'"
                                    >Signup Page 2</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="reset-password"
                                    v-scroll-to="'#reset-password'"
                                    >Password Reset</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="change-password"
                                    v-scroll-to="'#change-password'"
                                    >Change Password</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="download"
                                    v-scroll-to="'#download'"
                                    >Download Page</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="review"
                                    v-scroll-to="'#review'"
                                    >Review Page</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="faq"
                                    v-scroll-to="'#faq'"
                                    >FAQ Page</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="404"
                                    v-scroll-to="'#404'"
                                    >404 Page</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="coming-soon"
                                    v-scroll-to="'#coming-soon'"
                                    >Coming Soon</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="thank-you"
                                    v-scroll-to="'#thank-you'"
                                    >Thank You</router-link
                                >

                                <router-link
                                    class="dropdown-item"
                                    to="team-1"
                                    v-scroll-to="'#team-1'"
                                    >Team Page</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="team-2"
                                    v-scroll-to="'#team-2'"
                                    >Team Single</router-link
                                >
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link page-scroll dropdown-toggle"
                                href="#"
                                id="navbarBlogPage"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Blog
                            </a>

                            <div
                                class="dropdown-menu submenu"
                                aria-labelledby="navbarBlogPage"
                            >
                                <router-link
                                    class="dropdown-item"
                                    to="blog-grid"
                                    v-scroll-to="'#blog-grid'"
                                    >Blog Grid</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="blog-left-sidebar"
                                    v-scroll-to="'#blog-left-sidebar'"
                                    >Blog Left Sidebar</router-link
                                >
                                <router-link
                                    class="dropdown-item"
                                    to="blog-right-sidebar"
                                    v-scroll-to="'#blog-right-sidebar'"
                                    >Details Right Sidebar</router-link
                                >
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#team"
                                v-scroll-to="'#team'"
                                >Team</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#contact"
                                v-scroll-to="'#contact'"
                                >Contact</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--end navbar-->
    </header>
</template>

<script>
export default {
    props: {
        coloredLogo: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            windowTop: 0,
            collapsed: true,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll: function () {
            this.windowTop = window.top.scrollY;
        },
        mobileNavClicked: function () {
            this.collapsed = !this.collapsed;
        },
    },
    computed: {
        hasAffix: function () {
            return this.windowTop > 0;
        },
    },
};
</script>

