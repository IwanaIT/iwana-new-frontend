<template>
    <section class="hero-section full-screen gray-light-bg">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
                <div
                    class="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block"
                >
                    <!-- Image -->
                    <div
                        class="bg-cover vh-100 ml-n3 background-img"
                        style="background-image: url(img/hero-bg-1.jpg)"
                    >
                        <div class="position-absolute login-signup-content">
                            <div
                                class="position-relative text-white col-md-12 col-lg-7"
                            >
                                <h2 class="text-white">Welcome Back !</h2>
                                <p class="lead">
                                    Keep your face always toward the sunshine -
                                    and shadows will fall behind you.
                                    Continually pursue fully researched niches
                                    whereas timely platforms. Credibly parallel
                                    task optimal catalysts for change after
                                    focused catalysts for change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                    <div class="login-signup-wrap px-4 px-lg-5 my-5">
                        <!-- Heading -->
                        <h1 class="text-center mb-1">Sign In</h1>
                        <p class="text-center mb-5">
                            Free access to our dashboard.
                        </p>

                        <!--login form-->
                        <form class="login-signup-form">
                            <div class="form-group">
                                <label class="pb-1">Email Address</label>
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span
                                            class="ti-email color-primary"
                                        ></span>
                                    </div>
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="name@yourdomain.com"
                                    />
                                </div>
                            </div>
                            <!-- Password -->
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label class="pb-1">Password</label>
                                    </div>
                                    <div class="col-auto">
                                        <a
                                            href="password-reset.html"
                                            class="form-text small text-muted"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span
                                            class="ti-lock color-primary"
                                        ></span>
                                    </div>
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            <!-- Submit -->
                            <button
                                class="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                            >
                                Sign in
                            </button>

                            <!-- Link -->
                            <p class="text-center">
                                <small class="text-muted text-center">
                                    Don't have an account yet?
                                    <a href="sign-up.html">Sign up</a>.
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <!-- / .row -->
        </div>
    </section>
</template>