import { ICity } from 'app/shared/model/city.model';
import { IRegion } from 'app/shared/model/region.model';

export interface IDepartment {
  id?: number;
  name?: string;
  population?: number;
  departmentNumber?: string;
  cities?: ICity[];
  region?: IRegion;
}

export class Department implements IDepartment {
  constructor(
    public id?: number,
    public name?: string,
    public population?: number,
    public departmentNumber?: string,
    public cities?: ICity[],
    public region?: IRegion
  ) {}
}
