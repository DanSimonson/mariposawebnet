<template>
    <div v-if="showLogo" id="divfix" class='gradientMe'>MariposaWeb</div>
</template>
<script>
    export default {
        name: 'Logo',
        data() {
            return {
                showLogo: true
            }
        },
        methods: {
            handleScroll() {
                if (window.scrollY > 30) {
                    this.showLogo = false;
                } else {
                    this.showLogo = true;
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>
<style scoped lang='scss'>
    @import "../../public/styles.scss";

    #divfix {
        font-family: 'Great Vibes', cursive;
        top: 6px;
        left: 75px;
        position: fixed;
        z-index: 3000;
        color: #FFE082;
        padding: 5px;
        font-size: 2em;
    }
</style>