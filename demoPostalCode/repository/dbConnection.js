import {Client} from 'pg';


const conection = async(client) => {
    try {

        client.connect();
    }
    catch (error){
        console.error(error.message);
        throw error;
    }

}
const clientInfoDevDb = {
    host: 'localhost',
    port: 5432,
    database: 'postal_code_search',
    user: 'postgres',
    password: 'csd1993'
}

const clientInfoDb ={
    // will be arranged
    host: 'localhost',
    port: 5432,
    database: 'postal_code_search',
    user: 'postgres',
    password: 'csd1993'
}

export const clientDev = async () => {
    try {
        const devDb = new Client(clientInfoDevDb)
        await conection(devDb);

        return devDb;
    }
    catch (err){
        console.error(err.message);
        throw err;
    }
}
export const client = async () => {
    try {
        const client = new Client(clientInfoDb)
        await conection(client);
        return client
    }
    catch (err){
        console.error(err.message);
        throw err;
    }
}