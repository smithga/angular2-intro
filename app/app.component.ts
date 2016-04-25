import { Component } from 'angular2/core';

import {FooComponent} from './foo/foo.component';

@Component({
    selector: 'my-app',
    directives: [FooComponent],
    templateUrl: "app/app.component.html"
})
export class AppComponent {
    pageTitle(): string {
        return "Starter files for Angular2: Getting Started.";
    }
    
    onFooClicked(title: string): void {
        alert("clicked:" + title);
    }
}
