<template>
    <div>
        <!--<div class="spacer"></div>-->
        <!--style="height: 50px; border: 5px solid black;"-->

        <Head></Head>
        <Logo></Logo>
        <div class='tricorder'>
            <!--<img src="https://res.cloudinary.com/dmglopmul/image/upload/v1544885305/projectPhotos/mariposaweb/tricorder.jpg">-->
            <div class="container gradientMe">
                <p>Contact Us</p>
                <p>mariposaweb.net is here to answer any questions you may have and create an effective
                    solution for your web development needs
                </p>
            </div>
        </div>

        <div class="outer-wrapper">
            <div class="wrap-left">
                <div class="container">
                    <div class="wrapper">
                        <div class="contain">
                            <form action="https://formspree.io/dansimonson@mariposaweb.net" method="POST">
                                <ul class="flex-outer">
                                    <li>
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name" placeholder="" />
                                    </li>
                                    <li>
                                        <label for="email">Email</label>
                                        <input name="email" type="email" id="email" placeholder="" />
                                    </li>
                                    <li>
                                        <label for="message">Message</label>
                                        <!-- style='border: 1px solid #333;' -->
                                        <textarea rows="6" id="message" name="message" placeholder=""></textarea>
                                    </li>
                                    <li><button type="submit">Submit</button></li>
                                </ul>
                            </form>
                        </div>
                        <div class="grid">
                            <div class="box">
                                <img src="../assets/me.jpg" alt="daniel simonson" />
                                <span>
                                    I grew up in silicon valley with a dream to become a computer
                                    programmer. I've spent a great deal of time thinking about the
                                    technical aspects of web development so you don't have to.
                                    Build your brand. Get new business. Email me to get
                                    started.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-right">
                <div class="gmap_canvas">
                    <iframe width="600" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=%20silang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://www.maps-erstellen.de"></a>
                </div>
            </div>

        </div>
        <Footer></Footer>

    </div>


</template>
<script>
    export default {
        data: () => ({
            valid: false,
            name: "",
            nameRules: [
                v => !!v || "Name is required",
                v => v.length <= 10 || "Name must be less than 10 characters"
            ],
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "E-mail must be valid"
            ],
            showLogo: true,
            name: "",
            message: ""
        }),
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
            window.addEventListener("scroll", this.handleScroll);
        }
    };
</script>
<style scoped lang='scss'>
    /*google Fonts*/
    @import url("https://fonts.googleapis.com/css?family=Kalam");
    @import url("https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat");
    @import "../../public/styles.scss";

    .tricorder {
        height: 26vw;
        width: 90vw;
        /*border: 5px solid firebrick;*/
        margin: 130px auto 0 auto;
        background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544885305/projectPhotos/mariposaweb/tricorder.jpg");
        background-position: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;




        .container {
            /*border: 5px solid orange;*/
            color: $White;
            font-size: 2rem;
            margin-top: 10px;
            display: flex;

            p {
                margin: 0 auto;
            }
        }
    }

    .outer-wrapper {
        /*border: 5px solid black;*/
        display: flex;
        flex-direction: column;

    }

    .wrap-left {
        width: 100%;
        /*border: 5px solid green;*/
    }

    .wrap-right {
        width: 100%;
        height: 100%;
        margin-bottom: 5px;
        /*border: 5px solid red;*/
        display: block
    }

    .container {
        /*border: 5px solid blue;*/
        width: 100%;
        margin-top: 0;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        text-align: center;

    }

    /*wrap my form and image/text sections*/
    .wrapper {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border: 1px solid $Grey;
        max-width: 100%;
        /*margin: 80px auto 0 auto;*/
        margin: 80px 20px 10px 20px;
        padding-left: 25px;
        background: url("../assets/wrinkle.jpg");
        background-repeat: no-repeat;
        background-position: cover;
        border-radius: 50px;
    }

    /*form*/
    .contain {
        /*border: 5px solid black;*/
        grid-column: 1/4;
        max-width: 500px;
        padding: 5px 0;
        margin-bottom: 50px;
    }

    textarea {
        width: 350px;
    }

    .flex-outer li {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        flex: 0 1 auto;
        flex-direction: column;
        font-family: "Kalam", cursive;
    }

    .flex-outer li button {
        border: none;
        background: #333;
        color: #f2f2f2;
        text-transform: uppercase;
        letter-spacing: 0.09em;
        border-radius: 2px;
        font-family: "Kalam", cursive;
    }

    .flex-outer li button:active,
    .flex-outer li button:hover {
        /*border: none;*/
        color: #333;
        background: white;
        /*text-transform: uppercase;
          letter-spacing: .09em;
          border-radius: 2px;
          font-family: 'Kalam', cursive;*/
    }

    /*image and text*/
    .grid {
        grid-column: 1/4;
        margin-bottom: 50px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        flex-wrap: wrap;
        /*border: 5px solid green;*/
    }

    .box {
        display: flex;
        align-items: center;
        /*border: 5px solid deeppink;*/
        height: 100%;
        width: 100%;
        margin: 5px;
        padding: 0 30px 0 2px;
        /*padding: 10px 2px 2px 10px;*/
        text-align: justify;
    }

    .box img {
        flex-grow: 0;
        flex-shrink: 0;
        border-radius: 50%;
        max-width: 100px;
        max-height: 100px;
    }

    span {
        padding-left: 5px;
        font-family: "Kalam", cursive;
        font-size: 1.2em;
    }

    #divfix {
        font-family: "Great Vibes", cursive;
        top: 6px;
        left: 75px;
        position: fixed;
        z-index: 3000;
        color: #ffe082;
        padding: 5px;
        font-size: 2em;
    }

    #name,
    #email {
        border: 1px solid #333;
        width: 80%;
    }

    #message {
        border: 1px solid #333;
        width: 95%;
    }

    .gmap_canvas {
        position: relative;
        /*padding-bottom: calc(height / width);*/
        padding-bottom: 75%;
        height: 0;
        overflow: hidden;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 2%
    }

    .wrap-right {
        margin-top: 90px;
        margin-right: 10px;
        margin-bottom: 10px;
        /*border: 5px solid black;*/

    }

    .gmap_canvas iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
    }

    /*media Queries*/
    @media only screen and (max-width: 360px) {
        .container {

            p {

                /*font-size: 1rem;
                line-height: 1.5;*/
            }

        }

    }

    @media only screen and (max-width: 500px) {
        .container {
            /*border: 5px solid red;*/
            margin-top: 0;
            margin-bottom: 0;

            p {
                line-height: 1;
                font-size: 1rem;

            }

        }

        .box {
            flex-direction: column;
        }

    }

    @media only screen and (max-width: 768px) {
        .container {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 1800px) {
        .tricorder {
            background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544922900/projectPhotos/mariposaweb/tricorderbig.jpg");
        }

        .wrapper {
            background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544923408/projectPhotos/mariposaweb/wrinklebig.jpg");

        }

    }





    /*@media only screen and (max-width: 768px) {

            .outer-wrapper {
                flex-direction: column;
            }

            .wrapper {
                display: grid;
                grid-template-columns: 1fr;
                margin-bottom: 5px;

            }

            .gmap_canvas {
                padding-bottom: 100%;
            }
        }

        @media only screen and (min-width: 768px) {
            .gmap_canvas {
                padding-bottom: 150%;
            }
        }

        @media only screen and (min-width: 1024px) {
            .gmap_canvas {
                padding-bottom: 112%;
            }
        }

        @media only screen and (min-width: 1440px) {
            .gmap_canvas {
                padding-bottom: 72%;
            }
        }

        @media only screen and (min-width: 1600px) {
            .gmap_canvas {
                padding-bottom: 65%;
            }
        }

        @media only screen and (min-width: 2560px) {
            .gmap_canvas {
                padding-bottom: 40%;
            }
        }*/
</style>