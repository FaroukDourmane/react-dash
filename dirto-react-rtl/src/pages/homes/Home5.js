import React, {Component} from 'react';
import HeaderTwo from "../../components/common/HeaderTwo";
import BannerOneSearchInput from "../../components/banner/banner1/BannerOneSearchInput";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategoriesTwo from "../../components/other/categories/BrowseCategoriesTwo";
import IconBoxTwo from "../../components/other/iconboxes/IconBoxTwo";
import PlaceOne from "../../components/places/PlaceOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import Button from "../../components/common/Button";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MapViewCluster from "../../components/contact/MapViewCluster";

class Home5 extends Component {
    state = {
        tmimage: [
            {
                tmimg: require('../../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img6.jpg')
            }
        ]
    }
    render() {
        return (
            <main className="home-5">
                {/* Header */}
                <HeaderTwo />

                {/* Mapview */}
                <MapViewCluster />

                {/* Popular Categories */}
                <section className="hero-wrapper5 section-bg padding-top-50px padding-bottom-40px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BannerOneSearchInput />

                                <div className="hero-catagory after-none text-center mt-4">
                                    <PopularCategoriesTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Browse Categories */}
                <section className="cat-area padding-top-100px padding-bottom-90px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="تصفح حسب الفئات" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <BrowseCategoriesTwo />
                    </div>
                </section>

                {/* How it work */}
                <section className="hiw-area text-center padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="كيف يعمل كما سبق" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <IconBoxTwo />
                    </div>
                </section>

                {/* Most Visited Place */}
                <section className="card-area text-center padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="الأماكن الأكثر زيارة" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

                {/* FunFacts */}
                <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                    <div className="container">
                        <div className="row section-title-width">
                            <SectionsHeading title="الأرقام تقول كل شيء" titleClass=" text-white before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <FunFactsOne />
                    </div>
                </section>

                {/* Testimonial */}
                <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.state.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="ماذا قال مستخدمينا" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto mt-4">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Blog */}
                <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="أحدث النصائح والمقالات" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <LatestBlog />

                    </div>
                </section>

                {/* CTA 2 */}
                <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
                    <CtaOne />
                </section>

                {/* Client Logo */}
                <ClientLogo />

                {/* Cta Two */}
                <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="كما سبق هو أفضل طريقة للعثور على الشركات المحلية الرائعة واكتشافها" titleClass=" before-none pt-0 mb-3 text-white font-size-28" descClass=" font-size-17" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box text-right">
                                    <Button text="إنشاء حساب" className=" bg-white color-text-2" url="/sign-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

                {/* scroll top button */}
                <ScrollTopBtn />

            </main>
        );
    }
}

export default Home5;