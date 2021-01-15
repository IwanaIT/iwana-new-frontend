<template>
    <div
        class="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-5"
    >
        <div class="sign-up-form-header text-center mb-4">
            <h4 class="mb-0">Get a quote today</h4>
            <p>Get response within 24 hours</p>
        </div>
        <div
            class="message-box d-none"
            v-bind:class="{
                'd-none': !isSuccess && !hasError,
                'd-block': isSuccess || hasError,
            }"
        >
            <div
                class="alert"
                v-bind:class="{
                    'alert-danger': hasError,
                    'alert-success': isSuccess,
                }"
            >
                {{ alertText }}
            </div>
        </div>

        <form
            v-on:submit="submit"
            method="post"
            id="getQuoteFrm"
            class="sign-up-form"
            novalidate="true"
        >
            <div class="form-group input-group">
                <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter your name"
                    required="required"
                />
            </div>
            <div class="form-group input-group">
                <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required="required"
                />
            </div>
            <div class="form-group input-group">
                <input
                    type="text"
                    name="subject"
                    class="form-control"
                    placeholder="Enter subject"
                    required="required"
                />
            </div>
            <div class="form-group">
                <input
                    type="submit"
                    name="submit"
                    id="submit"
                    class="btn solid-btn btn-block disabled"
                    value="Send"
                    style="pointer-events: all; cursor: pointer"
                />
            </div>
            <div class="form-check d-flex align-items-center text-center">
                <input
                    type="checkbox"
                    class="form-check-input mt-0 mr-3"
                    id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                    >I agree your <a href="#">terms &amp; conditions</a></label
                >
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SubmitQuote",
    data() {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
            agree: false,
            alertText: "",
            hasError: false,
            isSuccess: false,
        };
    },
    methods: {
        submit: function (e) {
            e.preventDefault();

            let formData = new FormData();
            formData.append("name", this.name);
            formData.append("message", this.message);
            formData.append("subject", this.subject);
            formData.append("email", this.email);

            fetch("/php/quote-form-process.php", {
                body: formData,
                method: "POST",
            })
                .then((response) => {
                    if (response.status === 200) {
                        this.name = "";
                        this.message = "";
                        this.subject = "";
                        this.email = "";
                        this.alertText = "Form submitted successfully";
                        this.hasError = false;
                        this.isSuccess = true;
                    } else {
                        this.alertText =
                            "Found error in the form. Please check again.";
                        this.isSuccess = false;
                        this.hasError = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.alertText =
                        "Found error in the form. Please check again.";
                    this.isSuccess = false;
                    this.hasError = true;
                });
        },
        mounted() {
            this.alertText = "";
            this.hasError = false;
            this.isSuccess = false;
        },
    },
};
</script>

<style scoped>
</style>