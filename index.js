import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_oELKRbbtxsiO1zk3TEtpLn3jxxrBDiirPMiZ98QS');

converCurrency("USD","INR", 5);

export async function converCurrency(fromCurrency, toCurrency, uints){
    const res = await  freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
const multiplier = res.data[toCurrency];
console.log(multiplier)
}

