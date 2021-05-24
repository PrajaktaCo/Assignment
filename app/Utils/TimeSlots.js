import moment from 'moment';

const daySlots = [
    {
        icon: { type: 'feather', name: 'sun' },
        label: 'Morning'
    },
    {
        icon: { type: 'simpleLine', name: 'cup' },
        label: 'Lunch'
    },
    {
        icon: { type: 'feather', name: 'sun' },
        label: 'AfterNoon'
    },
    {
        icon: { type: 'materialCommunity', name: 'silverware-variant' },
        label: 'Dinner'
    }
]

const getSlotForDay = (day) => {
    return daySlots.map((item) => ({
        ...item, day
    }))
}
const getTimeSlots = () => {
    const crrInSecs = moment.duration(moment().format('HH:mm:ss')).asSeconds()
    let timeSlots = [];
    let today = moment().format('dddd');
    let tomorrow = moment().add(1, 'days').format('dddd');
    let dayAfter2morow = moment().add(2, 'days').format('dddd');
    const slotForTommorow = getSlotForDay(tomorrow)
    const slotFordayAfterTommorow = getSlotForDay(dayAfter2morow)
    if (crrInSecs >= 41400 && crrInSecs <= 45000) {
        timeSlots.push({
            icon: { type: 'feather', name: 'sun' },
            day: today,
            label: 'Morning'
        },
            {
                icon: { type: 'simpleLine', name: 'cup' },
                day: today,
                label: 'Lunch'
            })
    }
    else if (crrInSecs >= 63000 && crrInSecs <= 66600) {
        timeSlots.push({
            icon: { type: 'feather', name: 'sun' },
            day: today,
            label: 'AfterNoon'
        },
            {
                icon: { type: 'materialCommunity', name: 'silverware-variant' },
                day: today,
                label: 'Dinner'
            })
    }
    else if (crrInSecs >= 32400 && crrInSecs <= 45000) {
        timeSlots.push({
            key: 1,
            icon: { type: 'feather', name: 'sun' },
            day: today,
            label: 'Morning'
        })
    }
    else if (crrInSecs >= 41400 && crrInSecs <= 48600) {
        timeSlots.push({
            icon: { type: 'simpleLine', name: 'cup' },
            day: today,
            label: 'Lunch'
        })
    }
    else if (crrInSecs > 59400 && crrInSecs <= 66600) {
        timeSlots.push({
            icon: { type: 'feather', name: 'sun' },
            day: today,
            label: 'AfterNoon'
        })
    }
    else if (crrInSecs >= 63000 && crrInSecs <= 72000) {
        timeSlots.push({
            icon: { type: 'materialCommunity', name: 'silverware-variant' },
            day: today,
            label: 'Dinner'
        })
    }
    else if (crrInSecs > 48600 && crrInSecs < 59400) {
        timeSlots.push({
            icon: { type: 'feather', name: 'sun' },
            day: today,
            label: 'AfterNoon'
        }, {
            icon: { type: 'materialCommunity', name: 'silverware-variant' },
            day: today,
            label: 'Dinner'
        })
    }
    else if (crrInSecs > 72000 && crrInSecs < 32400) {
        timeSlots = getSlotForDay(today)
    }
    return [...timeSlots, ...slotForTommorow, ...slotFordayAfterTommorow]
    // setTimeSlots([...timeSlots, ...slotForTommorow, ...slotFordayAfter2morow])
}


export default getTimeSlots;