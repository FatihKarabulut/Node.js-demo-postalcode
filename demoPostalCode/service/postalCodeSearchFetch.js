
export  const fetchPostalCode = async (code) => {
    const url = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${code}&country=Tr&username=fatihkarabulut`

    try {

        const res = await fetch(url);
        const result = await res.json();
        console.log(result)
        return result

    }
    catch (err) {

    }

}