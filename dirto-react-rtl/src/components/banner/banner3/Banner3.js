import React from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import Banner3Tab from "./Banner3Tab";
import BannerParticle from "../../other/BannerParticle";

function Banner3({bgImg}) {
    return (
        <>
            <section className="hero-wrapper hero-wrapper3" id="home" style={{backgroundImage: 'url('+bgImg+')'}}>
                <BannerParticle />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-heading">
                                <SectionsHeading title="ما هو برنامجك اليوم؟" desc="جميع المواقع المتميزة - من المطاعم والنوادي إلى صالات العرض والأماكن الشهيرة والمزيد ..." />
                            </div>

                            <Banner3Tab />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner3;