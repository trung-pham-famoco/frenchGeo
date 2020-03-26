import { ICity } from 'app/shared/model/city.model';
import { IDepartment } from 'app/shared/model/department.model';

export interface IRegion {
  id?: number;
  name?: string;
  prefecture?: ICity;
  departments?: IDepartment[];
}

export class Region implements IRegion {
  constructor(public id?: number, public name?: string, public prefecture?: ICity, public departments?: IDepartment[]) {}
}
