import { TOKEN, PRODUCTS_API, REDEEM_API } from './URLEndpoints';

export const getAllProducts = async () => {
    try {
        const optionsConn = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        }

        const urlEndpoint = PRODUCTS_API;
        const res = await fetch(urlEndpoint, optionsConn);

        return res.json();       

    } catch (error) {
        console.log(error);
    }
}

export const getRedeemProduct = async (id) => {
    const body = {
		productId: id
	}
    
    try {
        const optionsConn = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        }

        const urlEndpoint = REDEEM_API;
        const res = await fetch(urlEndpoint, optionsConn);

        return res.json();

    } catch (error) {
        console.log(error);
    }
}