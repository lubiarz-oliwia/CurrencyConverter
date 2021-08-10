export const API_URL = "https://api.nbp.pl/api/exchangerates/rates/c/eur/today?format=json"

export const getRate = (successCallback) => {
    return fetch(API_URL)
        .then((d) => d.json())
        .then((f) => {
            successCallback((f.rates[0].ask).toFixed(2))
        })
        .catch(err => console.log(err));
};
