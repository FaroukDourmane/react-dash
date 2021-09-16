import React, {Component} from 'react';

class FooterQuickLinkWidget extends Component {
    state = {
        title: 'روابط سريعة',
        links: [
            {
                path: '/about',
                text: 'معلومات عنا'
            },
            {
                path: '/sign-up',
                text: 'سجل'
            },
            {
                path: '/login',
                text: 'تسجيل الدخول'
            },
            {
                path: '/add-listing',
                text: 'إضافة قائمة'
            },
            {
                path: '/contact',
                text: 'اتصل بنا'
            },
            {
                path: '/pricing',
                text: 'التسعير'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item text-left">
                        <h4 className="footer__title">
                            {this.state.title}
                        </h4>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.path}>{link.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterQuickLinkWidget;