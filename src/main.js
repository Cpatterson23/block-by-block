import * as weatherlib from '@cicciosgamino/openweather-apis';
import Input from "input";
const key = '3aad45db1823692854e69062c76be1ad';

async function getClient(zipCode) {
  const client = await (new weatherlib.AsyncWeather());
  client.setLang('en');
  client.setApiKey(key);
  client.setZipCodeAndCountryCode(zipCode, 'US');
  return client;
}


const zipCode = await Input.text("what is the weather")
const client = await getClient(zipCode);
const outside = await client.getDescription();
console.log(rain);

