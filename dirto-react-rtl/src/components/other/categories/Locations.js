import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Locations extends Component {
    state = {
        locations: [
            {
                img: require('../../../assets/images/flag1.jpg'),
                title: 'الولايات المتحدة (2)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag2.jpg'),
                title: 'لندن (4)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag3.jpg'),
                title: 'أستراليا (7)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag4.jpg'),
                title: 'اليابان (9)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag5.png'),
                title: 'فرنسا (12)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag6.png'),
                title: 'روسيا (14)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag7.jpg'),
                title: 'نيوزيلندا (17)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag8.jpg'),
                title: 'الهند (19)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag9.png'),
                title: 'هولندا (15)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag10.png'),
                title: 'السويد (17)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag11.png'),
                title: 'السعودية (29)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag12.jpg'),
                title: 'اسكتلندا (10)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag13.jpg'),
                title: 'كندا (43)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag14.png'),
                title: 'المكسيك (45)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag15.jpg'),
                title: 'بنغلاديش (50)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag16.jpg'),
                title: 'جنوب افريقيا (60)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag17.jpg'),
                title: 'باكستان (48)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag18.jpg'),
                title: 'كوستاريكا (33)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag19.svg'),
                title: 'إيطاليا (44)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag20.png'),
                title: 'تايلاند (55)',
                titleUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.locations.map((item, index) => {
                        return (
                            <div className="col-lg-3 column-td-6" key={index}>
                                <div className="location-item">
                                    <div className="loc-img">
                                        <img src={item.img} alt="flag" />
                                    </div>
                                    <Link to={item.titleUrl} className="loc-name">
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Locations;