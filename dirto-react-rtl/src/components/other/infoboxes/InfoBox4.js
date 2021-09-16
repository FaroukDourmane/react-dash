import React, {Component} from 'react';
import {BsMap} from "react-icons/bs";
import {GiChickenOven} from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri";
import {AiOutlineEllipsis} from "react-icons/ai";
import Button from "../../common/Button";

class InfoBox4 extends Component {
    infoboxState = {
        items: [
            {
                active: false,
                icon: <BsMap />,
                title: 'أماكن رائعة',
                description: 'هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم.',
            },
            {
                active: false,
                icon: <GiChickenOven />,
                title: 'مطاعم رائعة',
                description: 'هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم.'
            },
            {
                active: false,
                icon: <RiHotelBedLine />,
                title: 'فنادق رائعة',
                description: 'هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم.'
            },
            {
                active: true,
                icon: <AiOutlineEllipsis />,
                title: 'و اكثر...',
                description: 'هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم.'
            }
        ]
    }
    render() {
        return (
            <div className="row mt-5">
                {this.infoboxState.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className={item.active ? 'icon-box icon-box-layout info-more-content' : 'icon-box icon-box-layout'}>
                                <div className="info-icon">
                                    <span>
                                        {item.icon}
                                    </span>
                                </div>
                                <div className="info-content">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc mb-4">
                                        {item.description}
                                    </p>
                                    <Button text="البدء" url="#" className="radius-rounded" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default InfoBox4;