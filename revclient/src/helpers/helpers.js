import moment from "moment";

export const zipCodeChecker = (e) => {
    if (e.target.value.length === 5 || e.target.value.length === 0) {
        return true;
    }
    return false;
}

export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
    } catch (e) {
        console.log(e)
    }
};

export function removeCommas(stringNumberWithCommas) {
    const regex = /,/gi;
    let removedChar = stringNumberWithCommas.replace(regex, "");
    return removedChar;
}



export function donationCount(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
};


export const addUpDonations = (donationArray) => {
    let totalDonations = 0
    donationArray.forEach(donation => totalDonations = totalDonations + donation.amount);
    // console.log(totalDonations, formatMoney(totalDonations))
    return formatMoney(totalDonations); 
    // return totalDonations;
}



export const calculateDueDate = (startDate, duration) => {
    let dueDate = moment(startDate).clone().add(duration, 'month').format("MMMM Do YYYY");
    // console.log(dueDate);
    return dueDate;
}


export const addWeeksDueDate = (startDate, duration) => {
    let dueDate = moment(startDate).clone().add(duration, 'week').format();
    // console.log(dueDate);
    return dueDate;
}


export const formatDate = (date) => {
    let prettyDate = moment(date).format("MMMM Do YYYY");
    // console.log(dueDate);
    return prettyDate;
}

export const formatDateSmall = (date) => {
    let prettyDate = moment(date).format("MMMM Do");
    // console.log(dueDate);
    return prettyDate;
}


export const formatDateForDateInput = (date) => {
    let prettyDate = moment(date).format("YYYY-MM-DD");
    return prettyDate;
}

export const formatDateForMutation = (date) => {
    let prettyDate = moment(date).format();
    return prettyDate;
}




export const inLastWeek = (startDate) => {
    let lastWeek = moment(startDate).clone().subtract(1, 'week').format();
    // console.log(lastWeek);
    return lastWeek;
}