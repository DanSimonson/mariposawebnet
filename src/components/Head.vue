<template>
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="#" class="navigation__link"><span>&nbsp</span>
                        <router-link to="/" tag="a" exact><strong>Home </strong>
                        </router-link>
                    </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>&nbsp</span>
                        <router-link to="/about" tag="a" exact><strong>About </strong>
                        </router-link>
                    </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>&nbsp</span>
                        <router-link to="/blog/" tag="a" exact><strong>Blog </strong>
                        </router-link>
                    </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>&nbsp</span>
                        <router-link to="/cards" tag="a" exact><strong>Portfolio </strong>
                        </router-link>
                    </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>&nbsp</span>
                        <router-link to="/contact" tag="a" exact><strong>Contact </strong>
                        </router-link>
                    </a></li>
                <!--<li class="navigation__item"><a href="#" class="navigation__link"><span>05</span></a></li>-->
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'Head',
        components: {

        },
        data() {
            return {}
        }
    }
</script>
<style scoped lang='scss'>
    @import "../../public/styles.scss";
    $color-primary: #55c57a;
    $color-primary-light: #7ed56f;
    $color-primary-dark: #28b485;
    $color-grey-dark-3: #333;
    $color-white: #fff;
    $color-black: #000;

    .navigation {

        &__checkbox {
            display: none;
        }

        &__button {
            background-color: $color-white;
            height: 3.5rem;
            /*7rem;*/
            width: 3.5rem;
            /*7rem;*/
            position: fixed;
            top: 2.5rem;
            /*6rem;*/
            right: 2rem;
            /*5rem;
            6rem;*/
            border-radius: 50%;
            z-index: 2000;
            box-shadow: 0 1rem 3rem rgba($color-black, .1);
            text-align: center;
            cursor: pointer;


            /* @include respond(tab-port) {
                top: 4rem;
                right: 4rem;
            }

            @include respond(phone) {
                top: 3rem;
                right: 3rem;
            }*/
        }

        &__background {
            height: 2.5rem;
            /*6rem;*/
            width: 2.5rem;
            /*6rem;*/
            border-radius: 50%;
            position: fixed;
            top: 2.5rem;
            /*6.5rem;*/
            right: 2.5rem;
            /*5.5rem;
            6.5rem;*/
            /*background-image: radial-gradient($color-primary-light, $color-primary-dark);*/
            background-image: radial-gradient(#0083B0, #00B4DB);
            z-index: 1000;
            transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

            /*transform: scale(80);*/

            /*@include respond(tab-port) {
                top: 4.5rem;
                right: 4.5rem;
            }*/

            /*@include respond(phone) {
                top: 3.5rem;
                right: 3.5rem;
            }*/
        }

        &__nav {
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1500;
            /*border: 5px solid magenta;*/
            opacity: 0;
            width: 0;
            transition: opacity .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

        }

        &__list {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            list-style: none;
            text-align: center;
            width: 100%;
            line-height: .8;
            margin-top: 30px;
            /*border: 5px solid red;*/
        }

        &__item {
            margin: 2.5rem;
        }

        &__link {
            a {
                text-decoration: none;
                color: $color-white;
            }

            &:link,
            &:visited {
                font-size: 3rem;
                font-weight: 300;
                padding: 1rem 2rem;
                color: $color-white;
                text-decoration: none;
                text-transform: uppercase;
                background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
                background-size: 225%;
                transition: all 2s;



            }

            &:hover,
            &:active {
                background-position: 100%;
                transform: translateX(1rem);

                a {
                    color: $Black;
                }
            }
        }

        //nav functionality
        &__checkbox:checked~&__background {
            transform: scale(150);
        }

        &__checkbox:checked~&__nav {
            opacity: 1;
            width: 100%;
            transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        //icon
        &__icon {
            position: relative;
            margin-top: 1.8rem;

            &,
            &::before,
            &::after {
                width: 2rem;
                height: 2px;
                background-color: $color-grey-dark-3;
                display: inline-block;
            }

            &::before,
            &::after {
                content: "";
                position: absolute;
                left: 0;
                transition: all .2s;

            }

            &::before {
                top: -.8rem;
            }

            &::after {
                top: .8rem
            }

        }

        &button:hover &__icon::before {
            top: -1rem;
        }

        &button:hover &__icon::before {
            top: 1rem;
        }

        &__checkbox:checked+&__button &__icon {
            background-color: transparent;

        }

        &__checkbox:checked+&__button &__icon::before {
            top: 0;
            transform: rotate(135deg);
        }

        &__checkbox:checked+&__button &__icon::after {
            top: 0;
            transform: rotate(-135deg)
        }
    }
</style>