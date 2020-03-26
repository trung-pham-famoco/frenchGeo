import { IDepartment } from 'app/shared/model/department.model';

export interface ICity {
  id?: number;
  name?: string;
  department?: IDepartment;
}

export class City implements ICity {
  constructor(public id?: number, public name?: string, public department?: IDepartment) {}
}
