
import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
@autoinject
export class Services {

  public loading = false;
  public url: 'Person/Services/';

  constructor(private httpClient: HttpClient) {
  }

  async getPerson(id: string) {
    this.loading = true;
    let person : any;
    try {
      let request = await this.httpClient.createRequest(this.url)
        .asGet()
        .withParams({id:id})
        .send()

        if(request.isSuccess){  
          person = JSON.parse(request.response)
        }

    } catch (error) {
      console.error(error);
  } finally{
    this.loading = false;
    return person;
  }
  }

  async postPerson(person: any) {
    this.loading = true;
    let people : any;
    try {
      let request = await this.httpClient.createRequest(this.url)
        .asPost()
        .withContent(person)
        .send()

        if(request.isSuccess){  
          person = JSON.parse(request.response)
        }

    } catch (error) {
      console.error(error);
  } finally{
    this.loading = false;
    return people;
  }
  }

  async deletePerson(id: string) {
    this.loading = true;
    let person : any;
    try {
      let request = await this.httpClient.createRequest(this.url + id)
        .asDelete()
        .send()

        if(request.isSuccess){  
          person = JSON.parse(request.response)
        }

    } catch (error) {
      console.error(error);
  } finally{
    this.loading = false;
    return person;
  }
  }

  async putPerson(person: any) {
    this.loading = true;
    let people : any;
    try {
      let request = await this.httpClient.createRequest(this.url)
        .asPut()
        .withContent(person)
        .send()

        if(request.isSuccess){  
          person = JSON.parse(request.response)
        }

    } catch (error) {
      console.error(error);
  } finally{
    this.loading = false;
    return people;
  }
  }
}
