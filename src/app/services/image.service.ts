import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { Subject } from "rxjs/Subject";

@Injectable()
export class ImageService {
        space:Subject<string> = new Subject();
    
        broadcastTextChange(text:string) {
            debugger;
            this.space.next(text);
        }

   
}