<template>
    <div class='slider'>
        <!-- <h1>this is the Slider </h1>-->
        <Slides :image="images[imageIndex]"></Slides>
    </div>
</template>
<script>
    import Slides from '@/components/Slides.vue'
    export default {
        name: 'Slider',
        components: {
            //HelloWorld
            Slides
        },
        data() {

            return {
                images: [{
                        id: 0,
                        url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539010600/projectPhotos/mariposaweb/ufo.jpg",
                        title: "We Focus on solving complex problems with clear and effective solutions.",
                        description: "Lorem ipsum dolor sit amet, consectetur"
                    },
                    {
                        id: 1,
                        url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539023410/projectPhotos/mariposaweb/syntax.jpg",
                        title: "We create custom solutions – be it during design, development or deployment.",
                        description: "Lorem ipsum dolor sit amet, consectetur"

                    },
                    {
                        id: 2,
                        url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539010572/projectPhotos/mariposaweb/network.jpg",
                        title: "We build a digital E-Commerce bridge between products and customers. ",
                        description: "Lorem ipsum dolor sit amet, consectetur"
                    },
                    {
                        id: 3,
                        url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539022882/projectPhotos/mariposaweb/internet.jpg",
                        title: "We leverage the capabilities of Vue.js and JavaScript to fit needs.",
                        description: "Lorem ipsum dolor sit amet, consectetur"
                    },
                    {
                        id: 4,
                        url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539024962/projectPhotos/mariposaweb/code.jpg",
                        title: "Transforming ideas. Digitally. We look for ways to provide better solutions.",
                        description: "Lorem ipsum dolor sit amet, consectetur"
                    }
                ],
                imageIndex: 0

            }
        },
        methods: {
            move() {
                let indexFlag = this.imageIndex;
                indexFlag++;
                if (indexFlag >= this.images.length) {
                    indexFlag = 0
                }
                this.imageIndex = indexFlag;
            }

        },
        created() {
            let self = this;
            setInterval(() => {
                self.move();
            }, 4000)

        }
    }
</script>
<style scoped lang='scss'>
    @import "../../public/styles.scss";
</style>