<script>
    export default {
        data: () => ({
            icons: ['fab fa-github', 'fab fa-facebook', 'fab fa-linkedin', 'fab fa-twitter'],
            rows: [{
                    title: 'Company Name',
                    children: [
                        'Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                    ]
                },
                {
                    title: 'Products',
                    children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
                },
                {
                    title: 'Useful Links',
                    children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
                }
            ]
        }),
        methods: {
            show(anIcon) {
                console.log(anIcon.link)
                if (anIcon === 'fa fa-github') {
                    var win = window.open('https://github.com/DanSimonson/', '_blank');
                    win.focus();
                } else if (anIcon === 'fa fa-facebook-square fa-fw') {
                    var win = window.open("https://www.facebook.com/mariposaweb.net/", '_blank');
                    win.focus();
                } else if (anIcon === 'fa fa-linkedin') {
                    var win = window.open('https://www.linkedin.com/in/dansimonsonmariposaweb/', '_blank');
                    win.focus();
                } else if (anIcon === 'fa fa-twitter') {
                    var win = window.open("https://twitter.com/simonsondan?lang=en", '_blank');
                    win.focus();
                }
            }
        }
    }
</script>

<template>
    <div>
        <section class="info">
            <!--<p><i class="fab fa-facebook"></i>here</p>-->
            <p>This site is powered with <a class='special-link' href="https://buttercms.com/" target="_blank">Buttercms</a>
                and <a class='special-link' href="https://vuejs.org/" target="_blank">Vue</a>.
                Get connected with me on social networks!</p>
        </section>
        <section class="social">
            <ul class="social-set">
                <li><a class="sociali" href="https://twitter.com/simonsondan?lang=en" target="_blank" aria-label="
                        Twitter">
                        <i class="fab fa-twitter lg" title="Twitter"></i></a></li>
                <li><a class="sociali" href="https://github.com/DanSimonson/" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github-square lg" title="GitHub"></i></a></li>
                <li><a class="sociali" href="https://www.facebook.com/mariposaweb.net/" target="_blank" aria-label="Facebook">
                        <i class="fab fa-facebook-square lg" title="Facebook"></i></i></a></li>
                <li><a class="sociali" href="https://www.linkedin.com/in/dansimonsonmariposaweb/" target="_blank"
                        aria-label="LinkedIn">
                        <i class="fab fa-linkedin lg" title="LinkedIn"></i></a></li>
            </ul>
        </section>
        <section class="copyright">
            <p>&copy;2018 — mariposaweb</p>
        </section>
    </div>
</template>
<style scoped lang='scss'>
    .social {
        background: #01579B;
    }

    #show {
        background-color: #1B5E20;
    }

    .myBtn {
        color: #BDBDBD;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;
    }

    i.fab.fa-github-square {
        color: #1565C0;
    }

    i.fab.fa-twitter {
        color: #1565C0;
    }

    i.fab.fa-facebook-square {
        color: #1565C0;
        /*black;*/
    }

    i.fab.fa-linkedin {
        color: #1565C0;
    }

    .info {
        background: #01579B;
        text-align: center;
    }

    p {
        text-align: center;
        padding-top: 1em;
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

        a {
            text-decoration: none;
            /*style="color:#BDBDBD;text-decoration: none;font-weight: 900;"*/
            /*myBtn*/
            color: #BDBDBD;
            font-weight: 900;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

            &:hover {
                color: lightslategray;
            }
        }
    }

    .copyright {
        background: #01579B;
        text-align: center;
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        padding-bottom: 10px;
    }

    /* social icons*/
    /*********************/
    /* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
                    prefixes courtesy of autoprefixer*/
    ul.social-set {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
        height: auto;
        width: auto;
    }

    ul.social-set li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    a.sociali {
        font-size: 2em;
        line-height: 1.2em;
        padding: 10px;
        background: white;
        /*background: #00ACC1;
                    #accfc0;*/
        color: #fff;
        margin-right: 10px;
        margin-bottom: 10px !important;
        padding-bottom: 10px !important;
        margin-top: 10px;
        /*border-radius: 50%;*/
    }

    a.sociali:hover,
    a.sociali:focus {
        background: #2193b0;
    }

    @media(max-width:768px) {

        .info,
        .social,
        .copyright {
            /*width: 768px;*/
        }
    }
</style>