import { IPerson } from "app";

export class FilterValueConverter{
  toView(list: IPerson[], search: string ){
    if(
      list && list.length > 0 && search
    ){
    return list.filter(x => x.name.toUpperCase().includes(search.toUpperCase()))}

    else {
      return list;
    }
  }
}
