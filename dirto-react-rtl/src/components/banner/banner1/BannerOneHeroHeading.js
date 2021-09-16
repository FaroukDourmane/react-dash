import React, {Component} from 'react'

export default class BannerOneHeroHeading extends Component {
    state  = {
        title: 'ماالذي تهتم به ',
        titleHighlight: [
            {
                active: true,
                text: 'الفنادق'
            },
            {
                active: false,
                text: 'مطاعم'
            },
            {
                active: false,
                text: 'محلات'
            },
            {
                active: false,
                text: 'صالونات'
            },
            {
                active: false,
                text: 'شقق سكنية'
            },
            {
                active: false,
                text: 'يسافر'
            },
            {
                active: false,
                text: 'اعمال'
            },
            {
                active: false,
                text: 'اللياقه البدنيه'
            }
        ],
        desc: 'اكتشف أفضل الأماكن للإقامة وتناول الطعام والتسوق وزيارة أقرب مدينة إليك.'
    }
    render() {
        return (
            <>
                <div className="hero-heading">
                    <div className="section-heading">
                        <h2 className="sec__title cd-headline zoom">
                            {this.state.title}
                            <span className="cd-words-wrapper">
                                {this.state.titleHighlight.map((item, index) => {
                                    return (
                                        <b className={item.active ? 'is-visible' : ' '} key={index}> {item.text}</b>
                                    )
                                })}
                            </span>
                        </h2>
                        <p className="sec__desc">
                            {this.state.desc}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
