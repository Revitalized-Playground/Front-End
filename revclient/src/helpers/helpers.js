import moment from "moment";


export const zipCodeChecker = (e) => {
    if (e.target.value.length === 5 || e.target.value.length === 0) {
        return true;
    }
    return false;
}

export const calculateDueDate = (startDate, duration) => {
    let dueDate = moment(startDate).clone().add(duration, 'month').format("MMMM Do YYYY");
    console.log(dueDate);
    return dueDate;
}

