import repository from '../repository/repository.js'
import {fetchPostalCode} from './postalCodeSearchFetch.js'

export const savePostalCode = async (postalCode) => {

    try {

        return await  repository.savePostalCodeInfo(postalCode)
    }
    catch (err){
        console.error(err.message);
        throw err;
    }

}

export const getPostalCodeInfo = async (code) => {
    try {

       if (await repository.existsPostalCode(code))
           return await repository.getPostalCodeInfo(code)
        else {
           const result =  await fetchPostalCode(code);

          await savePostalCode(result.postalcodes)

       }
        console.log(code)
        return await repository.getPostalCodeInfo(code)
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}
export const existsPostalCode = async (code) => {
    try {
        return await repository.existsPostalCode(code)
    }
    catch (err){
        console.error(`Error checking if postal code exists: ${err.message}`);
    }
}
export const deleteAll = async () => {
    try {
        return await repository.deleteAll()
    }
    catch (err) {}
}

export default {savePostalCode,getPostalCodeInfo,existsPostalCode,deleteAll}