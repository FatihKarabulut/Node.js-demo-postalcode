const getPostalCodeInfo = `SELECT *  FROM postal_code_info  where postalcode = $1`

const insertPostalCodes = `INSERT INTO postal_codes(code) values ($1)`
const insertPostalCodeInfo = ` 
    INSERT INTO postal_code_info(
        postalcode,
        adminCode2,
        adminCode1,
        adminName2,
        lng,
        countryCode,
        adminName1,
        placeName,
        lat
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9)
`;

export const existsPostalCodes = `SELECT EXISTS(SELECT postalcode from postal_code_info where postalcode = $1)`

export default {getPostalCodeInfo, insertPostalCodes, insertPostalCodeInfo,existsPostalCodes}


