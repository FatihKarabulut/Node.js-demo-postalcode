import dataService from './dataService.js';
import {expect} from "chai";
/*
    postalcode: "72050",
    admincode1: "76",
    adminname2: "Batman",
    lng: 41.2028417724138,
    countrycode: "TR",
    adminname1: "Batman",
    placename: "Çarşi",
    lat: 37.88287287931035
 */

const testPostalCodeInfo = [{

    "postalcode": "72500",
    "adminCode2": "8630819",
    "adminCode1": "76",
    "adminName2": "Sason",
    "lng": 41.423283,
    "countryCode": "TR",
    "adminName1": "Batman",
    "placeName": "Geçitli",
    "lat": 38.388314


}];

const TrueSaveTestDataService = async () => {
    try {
        expect(await dataService.savePostalCode(testPostalCodeInfo)).to.be.true
    }
    catch (err){
        console.error(err.message);
    }
}

const deleteAllTest = async () => {
    try {
        expect(await dataService.deleteAll()).to.be.true
    }
    catch (err) {
        console.error(err.message);
    }
}
const existsPostalCodeTest = async () => {
    try {
        const bool = await dataService.existsPostalCode("72500")
        expect(bool).to.be.true
    }
    catch (err){
        console.error(err.message);
    }
}
const getPostalCodeInfoTest = async () => {
    try {
        const res = await dataService.getPostalCodeInfo("72300")
        const len = res.rows.length;
        expect(len).to.be.equal(1);
    }
    catch (err){}
}


const createTest = async () => {

    it(`delete all test`,deleteAllTest)
    it(`true save test`,TrueSaveTestDataService)
    it(`get postal code info test`,getPostalCodeInfoTest)
    it(`exists postal code test`,existsPostalCodeTest)


}

describe(`data service testing`,createTest)




