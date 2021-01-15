<template>
    <section class="customer-review-section ptb-100 gray-light-bg">
        <div class="container">
            <div class="row">
                <div
                    v-for="(review, i) in reviews"
                    v-bind:key="i"
                    class="col-md-6 col-sm-6 col-lg-6"
                >
                    <review-blog
                        :image-url="review.imageUrl"
                        :review="review.review"
                        :name="review.name"
                        :org="review.org"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ReviewBlog from "../../components/ReviewBlog";
export default {
    name: "Review",
    components: { ReviewBlog },

    data: function () {
        return {
            reviews: [
                {
                    imageUrl: "img/client-1.jpg",
                    review:
                        "Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.",
                    name: "Arabella Orin",
                    org: "AppCo",
                },
                {
                    imageUrl: "img/client-2.jpg",
                    review:
                        "Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.",
                    name: "Runu Mondol",
                    org: "Bizbite",
                },
                {
                    imageUrl: "img/client-3.jpg",
                    review:
                        "Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.",
                    name: "Orko Arif",
                    org: "Bizbite",
                },
                {
                    imageUrl: "img/client-4.jpg",
                    review:
                        "Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.",
                    name: "Rando Trump",
                    org: "Bizbite",
                },

                {
                    imageUrl: "img/client-5.jpg",
                    review:
                        "Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.",
                    name: "Rana Tabik",
                    org: "AppCo Ltd",
                },
                {
                    imageUrl: "img/client-2.jpg",
                    review:
                        "Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.",
                    name: "Jon Deoa",
                    org: "BitBite",
                },
            ],
        };
    },
};
</script>

