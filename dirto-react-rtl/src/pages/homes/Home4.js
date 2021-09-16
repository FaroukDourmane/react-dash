import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner4 from "../../components/banner/banner4/Banner4";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategoriesTwo from "../../components/other/categories/BrowseCategoriesTwo";
import IconBoxTwo from "../../components/other/iconboxes/IconBoxTwo";
import PlaceOne from "../../components/places/PlaceOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import InfoBox2 from "../../components/other/infoboxes/InfoBox2";
import Button from "../../components/common/Button";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Home4 extends Component {
    state = {
        videoSrc: require('../../assets/video/slice-video.mp4'),
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
            <main className="home-4">
                {/* Header */}
                <GeneralHeader />

                {/* Banner */}
                <Banner4 videoUrl={this.state.videoSrc} />

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
                            <SectionsHeading title="كيف يعمل كما سبق" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
                        </div>

                        <IconBoxTwo />
                    </div>
                </section>

                {/* Most Visited Place */}
                <section className="card-area text-center padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="الأماكن الأكثر زيارة" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

                {/* FunFacts */}
                <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                    <div className="container">
                        <div className="row section-title-width">
                            <SectionsHeading title="الأرقام تقول كل شيء" titleClass=" text-white before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
                        </div>

                        <FunFactsOne />
                    </div>
                </section>

                {/* How It Word */}
                <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="ماذا نقدم" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
                        </div>

                        <InfoBox2 />
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="كما سبق هو أفضل طريقة للعثور على الشركات المحلية الرائعة واكتشافها" titleClass=" before-none pt-0 mb-3 font-size-28" descClass=" font-size-17" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box text-right">
                                    <Button text="إنشاء حساب" url="/sign-up" />
                                </div>
                            </div>
                        </div>
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
                            <SectionsHeading title="ماذا قال مستخدمينا" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
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
                            <SectionsHeading title="أحدث النصائح والمقالات" titleClass=" before-none pt-0" desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك." />
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

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                {/* scroll top button */}
                <ScrollTopBtn />

            </main>
        );
    }
}

export default Home4;