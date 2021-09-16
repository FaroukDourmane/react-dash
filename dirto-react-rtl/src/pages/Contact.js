import React, {Component} from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import AskQuestionField from "../components/contact/AskQuestionField";
import ContactSidebar from "../components/sidebars/ContactSidebar";
import GeneralMap from "../components/contact/GeneralMap";
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class Contact extends Component {
    state = {
        breadcrumbimg: require('../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="contact-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="اتصل بنا" MenuPgTitle="الصفحات" img={this.state.breadcrumbimg} />

                {/* contact */}
                <section className="contact-area padding-top-40px padding-bottom-80px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <AskQuestionField title="ابقى على تواصل" />
                            </div>

                            <div className="col-lg-5">
                                <ContactSidebar />
                            </div>
                        </div>
                    </div>
                </section>

                {/* map & details */}
                <div className="gmaps">
                    <GeneralMap />
                    <div className="map-address-box">
                        <ul className="map-address text-left">
                            <li>
                                <span className="la"><GoLocation /></span>
                                <h5 className="map__title">عنوان</h5>
                                <p className="map__desc">
                                    ملبورن ، أستراليا ، 105 جنوب <br /> بارك افينيو
                                </p>
                            </li>
                            <li>
                                <span className="la"><FiPhone /></span>
                                <h5 className="map__title">هاتف</h5>
                                <p className="map__desc">محلي: 2800 256 508</p>
                                <p className="map__desc">محلي: 666 777 888</p>
                            </li>
                            <li>
                                <span className="la"><FaRegEnvelope /></span>
                                <h5 className="map__title">البريد الإلكتروني</h5>
                                <p className="map__desc">needhelp@dirto.com</p>
                                <p className="map__desc">inquiry@dirto.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <Footer />

                {/* scroll top button */}
                <ScrollTopBtn />

            </main>
        );
    }
}

export default Contact;