import React, {Component} from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa'
import $ from 'jquery'
import Button from "../../common/Button";
import Select from "react-select";


const timeSlots = [
    {
        value: 0,
        label: 'فتحات الوقت'
    },
    {
        value: 1,
        label: '8:00 صباحًا - 8:30 صباحًا'
    },
    {
        value: 2,
        label: '9:00 صباحًا - 9:30 صباحًا'
    },
    {
        value: 3,
        label: '10:30 صباحًا - 10:00 صباحًا'
    },
    {
        value: 4,
        label: '11:30 صباحًا - 11:00 صباحًا'
    },
    {
        value: 5,
        label: '12:30 صباحًا - 12:00 صباحًا'
    },
    {
        value: 6,
        label: '13:30 صباحًا - 13:00 صباحًا'
    },
    {
        value: 7,
        label: '14:30 صباحًا - 14:00 صباحًا'
    },
    {
        value: 8,
        label: '15:30 صباحًا - 15:00 صباحًا'
    }
]

class WidgetBooking extends Component {
    componentDidMount() {
        $(document).on('click', '.input-number-increment', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val + 1);

        });

        /*==== Quantity number decrement control =====*/
        $(document).on('click', '.input-number-decrement', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            if(val !== 0) {
                $input.val(val - 1);
            }
        });
    }
    state = {
        selectedCatOp: null,
        title: 'الحجز',
    }
    handleChangeTime = () => {
        const { selectedTime } = this.state;
        this.setState(
            { selectedTime }
        );
    }
    render() {
        return (
            <>
                <div className="sidebar-widget date-widget text-left">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="contact-form-action padding-top-35px">
                        <form>
                            <div className="form-group">
                                <span className="form-icon">
                                    <FaRegCalendarAlt />
                                </span>
                                <input className="date-range form-control" type="date" name="daterange" defaultValue="04/08/2019"/>
                            </div>
                        </form>
                    </div>
                    <div className="time-slots padding-bottom-30px">
                        <Select
                            value={this.selectedTime}
                            onChange={this.handleChangeTime}
                            placeholder="فتحات الوقت"
                            options={timeSlots}
                        />
                    </div>
                    <div className="booking-content d-flex align-items-center justify-content-between text-center">
                        <div className="input-number-group">
                            <p>الكبار</p>
                            <div className="input-group-button">
                                <span className="input-number-decrement">-</span>
                            </div>
                            <input className="input-number" type="number" defaultValue="0" min="0" max="1000" />
                            <div className="input-group-button">
                                <span className="input-number-increment">+</span>
                            </div>
                        </div>
                        <div className="input-number-group">
                            <p>الأطفال</p>
                            <div className="input-group-button">
                                <span className="input-number-decrement">-</span>
                            </div>
                            <input className="input-number" type="number" defaultValue="0" min="0" max="1000" />
                            <div className="input-group-button">
                                <span className="input-number-increment">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box text-center padding-top-35px">
                        <Button text="طلب الحجز" url="#" className="d-block" />
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetBooking;