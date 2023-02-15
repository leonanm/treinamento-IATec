export class Variables {
  public strings: string;
  public numbers: number;
  public boolean: boolean;
  public array:[];
  public object: {nome:string, idade:number};


  public strings1 = "ABC";
  public numbers1 = 1;
  public boolean1 = true;
  public array1 = [1, 2, 3];
  public object1 = {
    nome : "Jorge",
    idade : 15
 };

 log(){
   this.object = {nome: 'kyn', idade: 1,}
  }
}
