<template>
    <div class="main">
        <section
            class="hero-section ptb-100 background-img full-screen banner-1-bg"
            
        >
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-9 col-lg-7">
                        <div class="error-content text-center text-white">
                            <div class="notfound-404">
                                <h1 class="text-white">404</h1>
                            </div>
                            <h3 class="text-white">
                                Sorry, something went wrong
                            </h3>
                            <p>
                                The page you are looking for might have been
                                removed had its name changed or is temporarily
                                unavailable.
                            </p>
                            <a class="btn app-store-btn" href="index.html"
                                >Go to Homepage</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>


export default {
    name: "Page404",
    
};
</script>
<style lang="scss" scoped>
.banner-1-bg {
    background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>