import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
button.disabled = true;
let userSelectedDate;


const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
    onClose(selectedDates) {
        button.disabled = true;
        if (selectedDates[0] < new Date()) {
        iziToast.warning({
                message: "Please choose a date in the future"
            });
        } else if(selectedDates[0] >=  new Date()){
            button.disabled = false;
        userSelectedDate=selectedDates[0]
    }
},
};

const datePicker =  flatpickr(input, options);
datePicker.selectedDates[0]
const day = document.querySelector(".value[data-days]");
const minute = document.querySelector(".value[data-minutes]");
const hour = document.querySelector(".value[data-hours]");
const second = document.querySelector(".value[data-seconds]");


button.addEventListener("click", onclick);
function onclick() {
    
    setInterval(() => {
        let currentTime = new Date().getTime()
        const userTime = userSelectedDate.getTime();
        let difTime = userTime - currentTime;
        const result = convertMs(difTime);
        
        day.textContent = `${result.days}`
        hour.textContent = `${result.hours}`
        minute.textContent = `${result.minutes}`
        second.textContent=`${result.seconds}`
    },1000)
}

function addLeadingZero(value) {
    return String(value).padStart(2,"0");;
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};
