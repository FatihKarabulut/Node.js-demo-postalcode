import query from "./queryDb.js";
import {client, clientDev} from "./dbConnection.js";
import queryDb from "./queryDb.js";

const db = await clientDev();
const _getArrayPostalInfo = (p) => {
    return [
        p.postalcode,
        p.adminCode2,
        p.adminCode1,
        p.adminName2,
        p.lng,
        p.countryCode,
        p.adminName1,
        p.placeName,
        p.lat
    ];

}
export const SavePostalCodeInsert = async (postalInfo) => {

    try {

        await db.query(queryDb.insertPostalCodeInfo,postalInfo)

    }
    catch (err){
        console.error(`Error saving postal code: ${err.message}`);
    }
}
export const savePostalCodeInfo = async (postalInfo) => {
    try {
        const code = postalInfo[0].postalcode;
        console.log(code)
        await db.query(queryDb.insertPostalCodes, [code])
        postalInfo.map(x => _getArrayPostalInfo(x)).forEach( async i => await SavePostalCodeInsert(i) )

        return true
    }
    catch (err)
    {
        console.error(`Error saving postal code: ${err.message}`);
        return false
    }
}

export const getPostalCodeInfo = async (code) => {

    try {
       const postalcodes = await db.query(queryDb.getPostalCodeInfo,[code])
        return {count:postalcodes.rowCount,
                postalcodes:postalcodes.rows

       }
    }
    catch (err){
        console.error(`Error getting postal code info: ${err.message}`);
        throw err;
    }
}

export const existsPostalCode = async (code) => {
    try {
         const exists = await db.query(queryDb.existsPostalCodes,[code])
        return exists.rows[0].exists

    }
    catch (err){
        console.error(`Error checking if postal code exists: ${err.message}`);
        return false
    }
}

export const deleteAll = async () => {

    try {
      await db.query('TRUNCATE TABLE postal_codes restart identity cascade')
        return true
    }
    catch (err){
        console.error(`Error deleting all postal codes: ${err.message}`);

        return false
    }
}



export default {savePostalCodeInfo, getPostalCodeInfo,existsPostalCode,deleteAll}

