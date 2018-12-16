<template>
    <div class='slides'>
        <!--transition group not used-->
        <!--<transition-group name="fade" tag="div" id="slides">-->
        <div class="slideParent" :key="image.id">
            <div class='slide-image' :style="setBackgroundImage">
                <div class='slide-title gradientMe rotating'>
                    <p>{{image.title}} </p>
                </div>
            </div>
        </div>
        <!--</transition-group>-->
    </div>
</template>
<script>
    export default {
        name: 'Slides',
        props: ["image"],
        data() {
            return {

            }
        },
        computed: {
            setBackgroundImage() {
                return {
                    backgroundImage: "url(" + this.image.url + ")"
                };
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import "../../public/styles.scss";

    .slides {
        /*overflow-x: hidden;*/
    }

    .slide-parent {}

    .slide-image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation-fill-mode: forwards;
        animation-name: zoom;
        animation-duration: 2s;
        animation-iteration-count: 1;
    }

    .slide-title {
        font-family: "Gravitas One", cursive;
        color: $Yellow;
        font-weight: bold;
        font-size: 1.5em;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            padding: 20px;
        }
    }


    /*transition-group animation not used*/

    /*.fade {
        transition: all .5s;

    }

    .fade-enter,
    .fade-leave-to

    /* .card-leave-active for <2.1.8 
        {
        opacity: 0;
        /*transform: scale(0);
    }

    .fade-enter-to {
        opacity: 1;
        /*transform: scale(1);
    }

    .fade-leave-active {
        /*position: absolute;
    }

    .fade-move {
        opacity: 1;
        transition: all .5s;
    }*/


    @keyframes zoom {
        from {
            /*transform: scale(.99);*/
            opacity: .8;
        }

        to {
            /*transform: scale(1);*/
            opacity: 1;
        }
    }

    /*not using this class to rotate title
    .rotating p {
        transition: transform 2s ease-in;
    }

    .rotating p:hover {
        transform: rotateX(360deg);
    }*/

    /*scaling and changing color of title on hover*/
    .slide-title p:hover {
        animation-name: wow;
        animation-duration: 2s;
        animation-delay: .5s;
        cursor: crosshair;
    }

    @keyframes wow {
        0% {
            transform: scale(0);
            color: aqua;
        }

        50% {
            transform: scale(1.5);
            color: red;
        }

        100% {
            transform: scale(1);
            color: $Yellow;
        }
    }
</style>