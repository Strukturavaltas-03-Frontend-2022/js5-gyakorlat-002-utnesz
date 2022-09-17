// 3. Írj  egy függvényt`validateMACAddress`, ami paraméterként egy MAC címet vár stringként!   
// A függvény egy `bollean` értékben visszaadja, hogy a paraméterként megadott MAC cím megfelelő formátumú e, vagy sem.

const validateMACAddress = (mAddress) => {
    const MACPattern = /^[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]$/;
    if (MACPattern.exec(mAddress)) {
        return true
    } else {
        return false
    }
}

export default validateMACAddress;
