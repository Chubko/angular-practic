import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from '../interfaces';

@Pipe({
  name: 'userTransform'
})
export class UserTransformPipe implements PipeTransform {

  transform(value: IUser[], text: string): string[] {
    return value.map(value1 => `${text}` + value1.name + `, email ` + value1.email);
  }

}
