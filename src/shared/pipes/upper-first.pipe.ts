import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class UpperFirstPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.debug('UpperFirstPipe.transform.value', value);
    return {
        ..._.omit(value, ["name"]),
        name: _.upperFirst(_.get(value, "name"))
    };
  }
}