import React, {Component} from 'react';
import { FaRegEnvelope } from 'react-icons/fa'

class WidgetSubscribe extends Component {
    state = {
        title: 'الإشتراك',
        subtitle: 'يمكنك إلغاء الاشتراك في أي وقت',
        btnText: 'اذهب'
    }
    render() {
        return (
            <>
                <div className="sidebar-widget text-left">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="subscribe-form padding-top-30px">
                        <div className="contact-form-action">
                            <form>
                                <div className="form-group mb-1">
                                    <span className="form-icon">
                                        <FaRegEnvelope />
                                    </span>
                                    <input className="form-control" type="email" name="text" placeholder="أدخل بريدك الإلكتروني" />
                                    <button type="submit" className="theme-btn submit-btn border-0">
                                        {this.state.btnText}
                                    </button>
                                </div>
                                <p className="font-size-14 font-weight-medium">
                                    {this.state.subtitle}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetSubscribe;