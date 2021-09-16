import React, {Component} from 'react';
import {FiMap, FiMail} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

class InfoBoxOne extends Component {
    states = {
        items: [
            {
                id: '1',
                icon: <FiMap />,
                title: 'ابحث عن مكان ممتع',
                description: 'اغتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            },
            {
                id: '2',
                icon: <FiMail />,
                title: 'تواصل مع عدد قليل من المؤلفين',
                description: 'اغتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            },
            {
                id: '3',
                icon: <AiOutlineUser />,
                title: 'احجز',
                description: 'اغتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map(item => {
                    return (
                        <div className="col-lg-4 column-td-6" key={item.id}>
                            <div className="icon-box">
                                <div className="info-icon">
                                    {item.icon}
                                    <span className="info-number">{item.id}</span>
                                </div>
                                <div className="info-content">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc">
                                        {item.description}
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

export default InfoBoxOne;