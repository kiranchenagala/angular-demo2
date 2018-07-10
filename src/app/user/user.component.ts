import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../model/user';

@Component({
    selector : 'app-user',
   // template : `<h1>User Component Loaded!!!</h1>`,
   templateUrl : './user.component.html',
    // styles : [`
    //     h1{
    //         color : lightblue;
    //     }
    // `]
    styleUrls : [`./user.component.css`]
})
export class UserComponent {
    @Input('title') title : string;
    @Input('users') users : User[];
    
    myClasses = {
        myBorder : true,
        myText : false
    }
    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!!!`);
        this.myClasses.myBorder = false;
        this.myClasses.myText=true;
    }
    ngOnInit(){
        console.log("ngOnInit");
    }
    ngOnChanges(changes : SimpleChanges){
        console.log("ngOnChanges", changes);
    }
    constructor(){console.log("constructor")}
    ngDoCheck(){console.log("ngDoCheck");}
    ngAfterContentInit(){console.log("ngAfterContentInit");}
    ngAfterContentChecked(){console.log("ngAfterContentChecked");}
    ngAfterViewInit(){console.log("ngAfterViewInit");}
    ngAfterViewChecked(){console.log("ngAfterViewChecked");}
    ngOnDestroy(){console.log("ngOnDestroy");}
}