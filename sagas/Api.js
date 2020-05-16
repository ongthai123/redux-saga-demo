const urlGetDog = "https://dog.ceo/api/breeds/image/random";

function* getDogFromApi(){
    // const response = yield fetch(urlGetDog, {
    //     method: "GET",
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     }
    // })
    // const dog = yield response.status === 200 ? JSON.parse(response._bodyInit) : {}

    return {
        "message" : "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
        "success" : true
    };
}

export const Api = {
    getDogFromApi
}
