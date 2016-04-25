import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {RemoveVowelsPipe} from '../shared/remove.vowels.pipe';

@Component({
    selector: 'app-foo',
    pipes: [RemoveVowelsPipe],
    templateUrl: 'app/foo/foo.component.html'
})
export class FooComponent {
    @Input() pageTitle : string;
    @Output() fooClicked: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(): void {
        this.fooClicked.emit(this.pageTitle);
    }
}