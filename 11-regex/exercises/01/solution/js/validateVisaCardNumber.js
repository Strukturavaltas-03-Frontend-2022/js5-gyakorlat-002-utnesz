
// 1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy visa kártyaszámot vár stringként, szóközök nélkül!   
// A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.

const validateVisaCardNumber = (visaNr) => {
    const visaPattern = /^[4][0-9]{15}$/;
    if (visaPattern.exec(visaNr)) {
        return true
    } else {
        return false
    }
};

export default validateVisaCardNumber;
