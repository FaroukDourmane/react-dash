import React, {Component} from 'react';
import { FiUsers, FiBookOpen } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

class IconBoxThree extends Component {
    state = {
        items: [
            {
                id: 1,
                icon: <FiUsers />,
                title: 'اسأل المجتمع',
                subtitle: 'احصل على مساعدة من مليون مستخدم + ثورة'
            },
            {
                id: 2,
                icon: <FiBookOpen />,
                title: 'اقرأ مدونتنا',
                subtitle: 'تابع آخر الأخبار والقصص'
            },
            {
                id: 3,
                icon: <AiOutlineQuestionCircle />,
                title: 'احصل على المساعدة في التطبيق',
                subtitle: 'ما عليك سوى التوجه إلى المساعدة في التطبيق'
            },
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map(item => {
                    return (
                        <div className="col-lg-4 column-td-6" key={item.id}>
                            <div className="icon-box icon-box-layout-4">
                                <div className={'info-icon bg-' + item.id + ' text-center'}>
                                    <span>{item.icon}</span>
                                </div>
                                <div className="info-content text-left">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default IconBoxThree;