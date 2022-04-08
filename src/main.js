import * as weatherlib from '@cicciosgamino/openweather-apis';

const key = '3aad45db1823692854e69062c76be1ad';

async function getClient(zipCode) {
  const client = await (new weatherlib.AsyncWeather());
  client.setLang('en');
  client.setApiKey(key);
  client.setZipCodeAndCountryCode(zipCode, 'US');
  return client;
}


const zip = await input.text("what is your zipcode");
const client = await getClient(64134);
const rain = await client.getDescription();
console.log("rain");


