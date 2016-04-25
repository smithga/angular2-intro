import {Pipe} from 'angular2/core';

@Pipe({
    name: 'lowercase'
})
export class RemoveVowelsPipe {
    transform(message: string) {
        return message.replace(/[aeiou]/ig,'');
    }
}