import React, {Component} from 'react';
import { FaSearchPlus, FaRegMap, FaSort } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'

class IconBoxTwo extends Component {
    state = {
        items: [
            {
                id: 1,
                icon: <FaSearchPlus />,
                title: 'ابحث عن مكان',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            },
            {
                id: 2,
                icon: <FaRegMap />,
                title: 'اختر موقعا',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            },
            {
                id: 3,
                icon: <FaSort />,
                title: 'اختر تصنيف',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            },
            {
                id: 4,
                icon: <FiCheckCircle />,
                title: 'انظر النتيجة',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row padding-top-100px">
                    {this.state.items.map(item => {
                        return (
                            <div className="col-lg-3 column-td-6" key={item.id}>
                                <div className="icon-box">
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

export default IconBoxTwo;