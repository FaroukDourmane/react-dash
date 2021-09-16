import React, {Component} from 'react';
import { FaRegMoneyBillAlt ,FaRegHeart } from 'react-icons/fa'
import { FcLineChart } from 'react-icons/fc'

class InfoBox3 extends Component {
    state = {
        items: [
            {
                id: '1',
                icon: <FaRegMoneyBillAlt />,
                title: 'القوائم المدفوعة',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل.'
            },
            {
                id: '2',
                icon: <FcLineChart />,
                title: 'الترويج القوائم',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل.'
            },
            {
                id: '3',
                icon: <FaRegHeart />,
                title: 'قوائم المطالبات المدفوعة',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل.'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.items.map(item => {
                        return (
                            <div className="col-lg-4 column-td-6" key={item.id}>
                                <div className="icon-box icon-box-hover-effect">
                                    <div className="info-icon">
                                        {item.icon}
                                        <span className="info-number">{item.id}</span>
                                    </div>
                                    <div className="info-content">
                                        <h4 className="info__title">
                                            {item.title}
                                        </h4>
                                        <p className="info__desc">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </>
        );
    }
}

export default InfoBox3;