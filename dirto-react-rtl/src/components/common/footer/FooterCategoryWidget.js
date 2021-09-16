import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FooterCategoryWidget extends Component {
    state = {
        title: 'التصنيفات',
        links: [
            {
                path: '#',
                text: 'محلات'
            },
            {
                path: '#',
                text: 'الفنادق'
            },
            {
                path: '#',
                text: 'مطاعم'
            },
            {
                path: '#',
                text: 'الحانات'
            },
            {
                path: '#',
                text: 'الأحداث'
            },
            {
                path: '#',
                text: 'اللياقه البدنيه'
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
                                        <Link to={link.path}>{link.text}</Link>
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

export default FooterCategoryWidget;