const codes = {
    "001": "Pending data from server",

    "101": "Missing maps key",
    "102": "Missing phone number",
    "103": "Missing email",
    "104": "Missing translations for namespace",
    "105": "Missing instagram url",
    "106": "Missing control in NumberInput",
    "107": "Missing children element",

    "201": "Fetching data rejected",
    "202": "Missing newsletter email",
    "203": "Newsletter email is not valid",
    "204": "Check-out date cannot be before check-in date",
    "205": "Check-in date cannot be in the past"
};

const isProduction = process.env.REACT_APP_TYPE === 'production';

const logger = (type = 'log', input, text = '') => {
    if (isProduction) return;

    const message = codes[input] || input;

    if (type === 'error') {
        console.error(`[ERROR] ${message} ${text}`);
    } else if (type === 'assert') {
        console.assert(false, `[ASSERT] ${message} ${text}`);
    } else {
        console.log(`[LOG] ${message} ${text}`);
    }
}

export default logger;