import React, {Component} from 'react';
import HeaderTwo from "../../components/common/HeaderTwo";
import Banner3 from "../../components/banner/banner3/Banner3";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategories from "../../components/other/categories/BrowseCategories";
import PlaceOne from "../../components/places/PlaceOne";
import SectionDivider from "../../components/common/SectionDivider";
import DreamPlaces from "../../components/places/DreamPlaces";
import Button from "../../components/common/Button";
import { RiRefreshLine } from 'react-icons/ri';
import InfoBox5 from "../../components/other/infoboxes/InfoBox5";
import HowItWork3 from "../../components/hiw/HowItWork3";
import CtaOne from "../../components/other/cta/CtaOne";
import Testimonial from "../../components/sliders/Testimonial";
import LatestBlog from "../../components/blogs/LatestBlog";
import ClientLogo from "../../components/sliders/ClientLogo";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Home3 extends Component {
    state = {
        bannerImg: require('../../assets/images/hero-bg3.jpg'),
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
            <main className="home-3">
                {/* Header */}
                <HeaderTwo />

                {/* Banner Three */}
                <Banner3 bgImg={this.state.bannerImg} />

                {/* Browse Categories */}
                <section className="hero-catagory section-bg padding-top-100px padding-bottom-80px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="ماذا تحتاج لايجاده؟" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <BrowseCategories />
                    </div>
                </section>

                {/* Most Visited Place */}
                <section className="card-area text-center padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="الأماكن الأكثر زيارة" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

                <SectionDivider />

                {/* Dream Places */}
                <section className="cat-area destination-area padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="استكشف أماكن أحلامك" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح " />
                        </div>

                        <DreamPlaces />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared mt-4 text-center">
                                    <Button text="تحميل المزيد" url="#">
                                        <RiRefreshLine />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* How it work 1 */}
                <section className="hiw-area choose-area padding-top-100px padding-bottom-80px after-none">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="لماذا أخترتنا" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <InfoBox5 />
                    </div>
                </section>

                {/* How it work 2 */}
                <HowItWork3 />

                {/* CTA 2 */}
                <section className="cta-area cta-area3 padding-top-60px padding-bottom-100px">
                    <CtaOne />
                </section>

                <SectionDivider />

                {/* Testimonial */}
                <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.state.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="ماذا قال مستخدمينا" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح الأفضل لك ومتى يكون الأفضل لك. " />
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
                                <SectionsHeading title="أحدث النصائح والمقالات" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح الأفضل لك ومتى يكون الأفضل لك. " />
                        </div>

                        <LatestBlog />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="btn-box text-center mt-4">
                                    <Button text="تصفح المشاركات" url="/blog-grid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Client Logo */}
                <ClientLogo />

                {/* Cta Two */}
                <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="كما سبق هو أفضل طريقة للعثور على الشركات المحلية الرائعة واكتشافها" titleClass=" mb-3 text-white font-size-28" descClass=" font-size-17" desc="كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة" />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box text-right">
                                    <Button text="إنشاء حساب" url="/sign-up" />
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

export default Home3;