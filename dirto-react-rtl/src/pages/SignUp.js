import React, {Component} from 'react';
import SignUpBox from "../components/other/account/SignUpBox";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class SignUp extends Component {
    state = {
        breadcrumbimg: require('../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="signup-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="سجل" img={this.state.breadcrumbimg} />

                {/* sign up form */}
                <section className="form-shared padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <SignUpBox title="انشئ حساب!" subtitle="مع شبكتك الاجتماعية" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                {/* scroll top button */}
                <ScrollTopBtn />
                
            </main>
        );
    }
}

export default SignUp;