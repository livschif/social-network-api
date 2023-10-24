const moment = require ('moment')

const formatDate = (date) =>  {
    // const year = date.slice(0,4);
    // const month = date.slice(5,7);
    // const day = date.slice(8,10);
    // const time = date.slice(11,16);
    // const formatted = `${month}/${day}/${year} at ${time}`
    // return formatted;
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
}

module.exports = formatDate