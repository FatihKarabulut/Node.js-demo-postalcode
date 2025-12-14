import dataService from "../service/dataService.js";
const getPostalCodeSearch = async (req,res) => {
    try {
        const postalCode = req.query.code
        if (postalCode === undefined)
           return res.status(400).send({message: `invalid postal code`})
        return res.status(200).send(await dataService.getPostalCodeInfo(postalCode))

    }
    catch (err) {
        console.error(`Error getting postal code search: ${err.message}`);
    }
}


export const run = async (port,app) => {

    try{
        app.listen(port, () => console.log(`Server running on port localhost:${port}`))
        app.get('/postalcode',(req,res) => getPostalCodeSearch(req,res))

    }
    catch (err){
        console.error(err.message);
    }

}