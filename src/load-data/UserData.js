import { TOKEN, USER_API, USER_HISTORY_API, USER_POINTS_API } from './URLEndpoints'

export const getUserData = async () => {
    try {
        const optionsConn = {
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                authorization: `Bearer ${TOKEN}`
            }
        }

        const urlEndpoint = USER_API;
        const res = await fetch(urlEndpoint, optionsConn);

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

export const getUserHistoryData = async () => { 
    try {
        const optionsConn = {
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                authorization: `Bearer ${TOKEN}`
            }
        }

        const urlEndpoint = USER_HISTORY_API;
        const res = await fetch(urlEndpoint, optionsConn);

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

export const addPointsUser = async (points) => {
	const RANGE = 1000
	let error = null
	let response = ''

	const body = {
		amount: RANGE
	}

	for (let i = points / RANGE; i > 0; i--) {
		if (error) return

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
			const url = USER_POINTS_API
			const res = await fetch(url, optionsConn)
			response = res.json()
		} catch (err) {
			console.log(err)
			error = err
		}
	}

	return response
}