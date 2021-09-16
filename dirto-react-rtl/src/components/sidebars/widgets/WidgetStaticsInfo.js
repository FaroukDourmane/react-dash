import React, {Component} from 'react';
import { BsListCheck, BsBookmark, BsEye } from 'react-icons/bs'
import { MdStarBorder } from 'react-icons/md'
import { FiExternalLink, FiHeart } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa'

class WidgetStaticsInfo extends Component {
    state = {
        title: 'معلومات احصائية',
        lists: [
            {
                icon: <BsListCheck />,
                text: '12 القوائم'
            },
            {
                icon: <MdStarBorder />,
                text: '4.4 التقييمات'
            },
            {
                icon: <BsBookmark />,
                text: '24 المرجعية'
            },
            {
                icon: <BsEye />,
                text: 'المشاهدات 745'
            },
            {
                icon: <FiExternalLink />,
                text: '120 مشاركة'
            },
            {
                icon: <FaRegComment />,
                text: '20 تعليق'
            },
            {
                icon: <FiHeart />,
                text: '120 الإعجابات'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget text-left">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="info-list static-info padding-top-35px">
                        <ul>
                            {this.state.lists.map((item, index) => {
                                return (
                                    <li className="mb-2" key={index}>
                                        <i className="la">{item.icon}</i> {item.text}
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

export default WidgetStaticsInfo;