// 4. Hozz létre egy Object - et`roles` névvel!
//    Ebben legyen letárolva 3 reguláris kifejezés.Ezek az alábbiak:
// - `visa`: reguláris kifejezés Visa kártyaszámra
//     - `ip`: reguláris kifejezés IP címre
//         - `mac`: reguláris kifejezés MAC címre   

//    Írj egy `validate` nevű függvényt, ami paraméterként két paraméter vár. 
//    Az első egy string, ami egy validálandó érték, a második pedig szintén egy string az alábbiak közül:
// - `visa`
//     - `ip`
//     - `mac` 
//    Ez az érték az, hogy milyen adatot akarunk validálni. 
//    A függvény visszatérési értéke egye`Boolean`. 


const roles = {
    'visa': /^[4][0-9]{15}$/,
    'ip': /^((?:[1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.])((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){2}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/,
    'mac': /^[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]-[0-9|A-F][0-9|A-F]$/
}


const validate = (string, type) => {
    return string.match(roles[type]) ? true : false;

};



    


export default validate;
