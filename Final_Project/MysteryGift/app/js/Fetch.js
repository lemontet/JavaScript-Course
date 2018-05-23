const API_TOKEN = process.env.API_TOKEN;
const baseURL = "https://api.sandbox.ebay.com";
const path = '/buy/browse/v1/item_summary/search';

// The call does not require a request body.
// Instead, all parameters for the call are passed as query parameters in the URL

let mysteryGift;

function getMysterGift(giftName, minPrice, maxPrice, currency) {
  const giftQuery = `?q=${giftName}`;
  const limitQuery = `&limit=1` // Can change number of items returned
  const priceRangeQuery = `&filter=price:${minPrice}..${maxPrice}`;
  const currencyQuery = `&filter=priceCurrency:${currency}`;
  const token = '';

    // Fetch data from a specific URL
  const fullURL = baseURL.concat(path, giftQuery, limitQuery, priceRangeQuery, currencyQuery);

  return fetch(fullURL, {
    method: 'GET',
    'Content-Type': 'application/json',
    headers: {
      Authorization: token
      }
    })
    // Turn data into JSON
    .then(response => response.json())
    .then(data => {
      console.log(data.itemSummaries[0]);
      return mysteryGift = data;
    })

    // Return a promise
  }

// const searchResult = function dummyFetch () {
//   return dummyGiftObject
// }

export default getMysterGift;
