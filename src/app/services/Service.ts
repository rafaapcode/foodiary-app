import axios from 'axios';

export abstract class Service {
  protected static client =  axios.create({
    baseURL: 'https://api.dev.foodiary.rafaapcode.com.br',
  });
}
