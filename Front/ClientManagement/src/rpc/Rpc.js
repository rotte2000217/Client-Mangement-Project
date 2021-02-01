export class Rpc {
    static fetchGetMethod(serverAddress, path) {
        return fetch(serverAddress + path, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
    }

    static fetchDeleteMethod(serverAddress, path) {
        return fetch(serverAddress + path, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
            },
        });
    }

    static fetchPostMethod(serverAddress, path, data) {
        return fetch(serverAddress + path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }

    static fetchPutMethod(serverAddress, path, data) {
        return fetch(serverAddress + path, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }

    static getResponse(promise) {
        return new Promise((accept, reject) => {
            promise
                .then((response) => {
                    if (response.status === 200) {
                        response
                            .json()
                            .then((body) => accept(body))
                            .catch(() => {
                                accept({message: 'OK'});
                            });
                    } else {
                        console.log('getResponse - response status different of successful code');
                        reject(undefined);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    reject(undefined);
                });
        });
    }
}