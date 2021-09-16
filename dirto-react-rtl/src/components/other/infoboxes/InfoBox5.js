import React, {Component} from 'react';
import { FiCheck } from 'react-icons/fi'

class InfoBox5 extends Component {
    state = {
        items: [
            {
                icon: <FiCheck />,
                title: 'نحن محترفون',
                desc: 'هناك العديد من الاختلافات المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية قد تعرضت للتغيير في شكل ما ، عن طريق إدخال الدعابة ،'
            },
            {
                icon: <FiCheck />,
                title: 'ضمان أفضل خدمة',
                desc: 'هناك العديد من الاختلافات المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية قد تعرضت للتغيير في شكل ما ، عن طريق إدخال الدعابة ،'
            },
            {
                icon: <FiCheck />,
                title: 'نحن موثوقون ومضمونون',
                desc: 'هناك العديد من الاختلافات المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية قد تعرضت للتغيير في شكل ما ، عن طريق إدخال الدعابة ،'
            },
            {
                icon: <FiCheck />,
                title: 'دعم عبر الإنترنت 24/7 ',
                desc: 'هناك العديد من الاختلافات المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية قد تعرضت للتغيير في شكل ما ، عن طريق إدخال الدعابة ،'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.items.map((item, index) => {
                        return (
                            <div className="col-lg-6 column-td-6" key={index}>
                                <div className="icon-box icon-box-layout-2">
                                    <div className="info-icon text-center">
                                        <span className="d-inline-block">
                                            {item.icon}
                                        </span>
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

export default InfoBox5;