<template>
    <section class="our-blog-section ptb-100 gray-light-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="section-heading mb-5">
                        <h2>Our Latest News</h2>
                        <p>
                            Enthusiastically drive revolutionary opportunities
                            before emerging leadership. Distinctively transform
                            tactical methods of empowerment via resource sucking
                            core.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(blog, i) in blogs" class="col-md-4" v-bind:key="i">
                    <small-blog-item
                        :categories="blog.categories"
                        :image-url="blog.imageUrl"
                        :comments="blog.comments"
                        :shares="blog.shares"
                        :month="blog.month"
                        :day="blog.day"
                        :year="blog.year"
                        :title="blog.title"
                        :desc="blog.desc"
                        :is-category-primary="blog.isPrimary"
                        :is-category-danger="blog.isDanger"
                        :is-category-warning="blog.isWarning"
                    />
                </div>
            </div>

            <!--pagination start-->
            <div class="row">
                <div class="col-md-12">
                    <nav class="custom-pagination-nav mt-4">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#"
                                    ><span class="ti-angle-left"></span
                                ></a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">4</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#"
                                    ><span class="ti-angle-right"></span
                                ></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!--pagination end-->
        </div>
    </section>
</template>

<script>
import SmallBlogItem from "../../components/SmallBlogItem";
export default {
    name: "LatestNews",
    components: { SmallBlogItem },
    data() {
        return {
            blogs: [
                {
                    imageUrl: "img/blog/1.jpg",
                    categories: "Lifestyle",
                    day: "21",
                    month: "Jan",
                    year: "2019",
                    comments: 45,
                    shares: 10,
                    title: "Appropriately productize fully",
                    desc:
                        "Some quick example text to build on the card title and make up the bulk.",
                    isPrimary: true,
                    isDanger: false,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/2.jpg",
                    categories: "Technology",
                    day: "26",
                    month: "May",
                    year: "2019",
                    comments: 30,
                    shares: 5,
                    title: "Quickly formulate backend",
                    desc:
                        "Synergistically engage effective ROI after customer directed partnerships.",
                    isPrimary: false,
                    isDanger: true,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/3.jpg",
                    categories: "Science",
                    month: "Apr",
                    day: "25",

                    year: "2019",
                    comments: 41,
                    shares: 30,
                    title: "Objectively extend extensive",
                    desc:
                        "Holisticly mesh open-source leadership rather than proactive users.",
                    isPrimary: true,
                    isDanger: false,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/4.jpg",
                    categories: "Lifestyle",
                    month: "Jan",
                    day: "21",

                    year: "2019",
                    comments: 45,
                    shares: 10,
                    title: "Appropriately re-engineer high ",
                    desc:
                        "Some quick example text to build on the card title and make up the bulk. ",
                    isPrimary: true,
                    isDanger: false,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/5.jpg",
                    categories: "Technology",
                    month: "May",
                    day: "26",

                    year: "2019",
                    comments: 30,
                    shares: 5,
                    title: "Progressively visualize enabled",
                    desc:
                        "Synergistically engage effective ROI after customer directed partnerships. ",
                    isPrimary: false,
                    isDanger: true,
                    isWarning: false,
                },
                {
                    imageUrl: "img/blog/6.jpg",
                    categories: "Science",
                    month: "Apr",
                    day: "25",

                    year: "2019",
                    comments: 41,
                    shares: 30,
                    title: "Credibly implement users",
                    desc:
                        "Holisticly mesh open-source leadership rather than proactive users. ",
                    isPrimary: true,
                    isDanger: false,
                    isWarning: false,
                },
            ],
        };
    },
};
</script>

<style>
</style>