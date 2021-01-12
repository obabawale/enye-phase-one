const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

let apiRes;

const getRate = async (base, currency) => {
    const Rate = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}&currency=${currency}`);
    const data = await Rate.json();
    apiRes = data;
    return apiRes   
}

router.get('/rates', (req, res) => {
    // add the logic to query the external api and return the json result
    let base = req.query.base;
    let currencies = req.query.currency;
    let currency_array = currencies.split(",");
    let results = {}
    let rates = {};
    getRate(base=base,currency=currencies).then(data => {
        results.base = data.base;
        results.date = data.date;
        for (let currency of currency_array){
            rates[currency] = data.rates[currency];
        }
        results.rates = rates;
        res.json({"results": results})
    }).catch(err => {
        console.log("Error "+ err)
    });
});

module.exports = router;