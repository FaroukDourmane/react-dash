import React, { Component } from 'react'
import { RiBuilding4Line, RiHotelBedLine, RiPlaneLine } from 'react-icons/ri';
import { GiChickenOven } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { MdFitnessCenter } from 'react-icons/md';

export default class BannerOneCategories extends Component {
    state = {
        connector: 'أو',
        title: 'تصفح الفئات المميزة:',
        items: [
            {
                path: "#",
                title: "شقق سكنية",
                icon: <RiBuilding4Line />
            },
            {
                path: "#",
                title: "مطاعم",
                icon: <GiChickenOven />
            },
            {
                path: "#",
                title: "السفر",
                icon: <RiPlaneLine />
            },
            {
                path: "#",
                title: "الأحداث",
                icon: <BsMusicNoteBeamed />
            },
            {
                path: "#",
                title: "اللياقه البدنيه",
                icon: <MdFitnessCenter />
            },
            {
                path: "#",
                title: "الفنادق",
                icon: <RiHotelBedLine />
            }
        ]
    };
    render() {
        return (
            <>
                <div className="highlighted-categories">
                    <h4 className="highlighted-element">{this.state.connector}</h4>
                    <h5 className="highlighted__title">
                        {this.state.title}
                    </h5>
                    <div className="highlight-lists d-flex justify-content-center mt-4">
                        {this.state.items.map((item, index) => {
                            return (
                                <div className="category-item" key={index}>
                                    <a href={item.path} className="d-block">
                                        <span className="icon-element">{item.icon}</span>
                                        {item.title}
                                    </a>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </>
        )
    }
}
