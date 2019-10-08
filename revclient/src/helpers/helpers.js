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



export function donationCount(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
};


export const addUpDonations = (donationArray) => {
    let totalDonations = 0
    donationArray.map(donation => totalDonations = totalDonations + donation.amount);
    return formatMoney(totalDonations);
}



export const calculateDueDate = (startDate, duration) => {
    let dueDate = moment(startDate).clone().add(duration, 'month').format("MMMM Do YYYY");
    console.log(dueDate);
    return dueDate;
}

