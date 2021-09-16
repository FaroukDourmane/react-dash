import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import { FaRegEnvelope } from 'react-icons/fa'

class NewsLetter extends Component {
    render() {
        return (
            <>
                <section className="cta-area cta-area2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cta-box d-flex align-items-center">
                                    <div className="col-lg-8">
                                        <SectionsHeading title="اشترك في النشرة الإخبارية!" titleClass="text-white" desc="اشترك للحصول على آخر التحديثات والمعلومات." />
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="contact-form-action">
                                            <form method="post">
                                                <div className="form-group mb-0">
                                                    <span className="form-icon">
                                                        <FaRegEnvelope />
                                                    </span>
                                                    <input className="form-control" type="email" placeholder="أدخل بريدك الإلكتروني" />
                                                        <button className="theme-btn" type="submit">الإشتراك</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default NewsLetter;