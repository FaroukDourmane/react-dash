import React from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import BannerOneSearchInput from "../banner1/BannerOneSearchInput";
import HighlightedCategory from "../../other/categories/HighlightedCategory";

export default function BannerTwo({bgImg}) {
    return (
        <>
            <section className="hero-wrapper hero-wrapper2" style={{backgroundImage: 'url('+bgImg+')'}}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionsHeading title="ابحث عن أفضل مكان في مدينتك" desc="كما سبق يساعدك في معرفة ما يحدث في مدينتك ، دعنا نستكشف." />

                            <BannerOneSearchInput />

                            <HighlightedCategory />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}