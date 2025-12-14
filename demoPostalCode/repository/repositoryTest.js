import repository from './repository.js';
import {expect} from 'chai';

const testPostalCodeInfo = [{
    postalcode: "72050",
    adminCode2: "8630819",
    adminCode1: "76",
    adminName2: "Batman",
    lng: 41.2028417724138,
    countryCode: "TR",
    adminName1: "Batman",
    placeName: "Çarşi",
    lat: 37.88287287931035
}];
const TrueSaveTest = async () => {
        try {
            return await repository.savePostalCodeInfo(testPostalCodeInfo)
        }
        catch (err){
            console.error(err.message);
        }
}

const deleteAllTest = async () => {
    try {
        expect(await repository.deleteAll()).to.be.true
    }
    catch (err) {
        console.error(err.message);
    }
}

const existsPostalCodeTest = async () => {
    try {
        const bool = await repository.existsPostalCode(testPostalCodeInfo.postalcode)
        console.log(bool.rows[0].exists)
            expect(bool).to.be.true
    }
    catch (err) {}
}

const createTest = async () => {
    it(`true save test`,async () => TrueSaveTest())

    it(`get postal code info test`,async () => {

        const res = await repository.getPostalCodeInfo(testPostalCodeInfo[0].postalcode);
        const len = res.rows.length;
        expect(len).to.be.equal(1);
    })

    it(`exists postal code test`,async () => existsPostalCodeTest())

    it(`delete all test`,async () => deleteAllTest())
}


describe(`repository testing`,createTest)