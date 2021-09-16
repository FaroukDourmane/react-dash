import React, {Component} from 'react';
import { BsPencil } from 'react-icons/bs'
import { GiPositionMarker } from 'react-icons/gi'
import { TiArrowUnsorted } from 'react-icons/ti'
import { FiCheck } from 'react-icons/fi'

class IconBoxOne extends Component {
    state = {
        items: [
            {
                id: 1,
                icon: <BsPencil />,
                title: 'اختر كلمة رئيسية',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.',
            },
            {
                id: 2,
                icon: <GiPositionMarker />,
                title: 'اختر موقعا',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.',
            },
            {
                id: 3,
                icon: <TiArrowUnsorted />,
                title: 'اختر الفئة',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.',
            },
            {
                id: 4,
                icon: <FiCheck />,
                title: 'عرض النتائج',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.',
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.items.map(item => {
                        return (
                            <div className="col-lg-3 column-td-6" key={item.id}>
                                <div className="icon-box icon-box-hover-effect">
                                    <div className="info-icon">
                                        <span className="d-inline-block">
                                            {item.icon}
                                        </span>
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

export default IconBoxOne;