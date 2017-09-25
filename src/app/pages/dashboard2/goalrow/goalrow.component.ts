import { StopwatchService } from './../goaltable/stopwatchservice';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GoalService } from '../../../services/goal.service';

@Component({
  selector: 'app-goalrow',
  templateUrl: './goalrow.component.html',
  styleUrls: ['./goalrow.component.css']
})
export class GoalrowComponent implements OnInit {
   
    @Input('date') date:Date
 count:number=0;
    hours:Array<Number>=[];
    minutes:Array<Number>=[];
    presentTime;
    givenTime;
    formGoal:FormGroup;
    goalId:number=0;
  ngOnInit() {
    this.formGoal = this.fb.group({
        "txtGoal":[],
        "txtGoalDescription":[],
        
    })

  }
  public addActive: boolean = false;
  public started: boolean;
  public stopped: boolean = false;
  public issaved: boolean = false;
  public isHide: boolean = true;

    public stopwatchService: StopwatchService;
    public time: number;

    private timer: any;
    
    constructor(stopwatchService: StopwatchService,private fb:FormBuilder,private goalService:GoalService) {
        this.stopwatchService = stopwatchService.init();
        this.time = 0;
        this.started = false;
        for(var hour=0 ; hour<13; hour++){            
            this.hours.push(hour)
        }
        for(var minute=0 ; minute<61; minute++){            
            this.minutes.push(minute)
        }
    }

    formatTime(timeMs: number,e,wid) {
        let hours: string,
            minutes: string,
            seconds: string;
            
        hours = Math.floor(timeMs / 3600000).toString();    
        minutes = Math.floor(timeMs / 60000).toString();
        seconds = ((timeMs % 60000) / 1000).toFixed();
        this.presentTime = (parseInt(hours)*3600) + (parseInt(minutes)*60) + parseInt(seconds) ;

        return hours + ':' + minutes + ':' + seconds;

         
        
    }

    getUpdate() {
        let self = this;

        return () => {
            self.time = this.stopwatchService.time();
        };
    }

    start() {
        this.timer = setInterval(this.getUpdate(), 1);
        this.stopwatchService.start();
        this.started = true;
    }

    stop() {
        clearInterval(this.timer);
        this.stopwatchService.stop();
        this.started = false;
    }

    toggle() {
        if(this.issaved == true){
            if (this.started) {
                this.stop();
            } else {
                this.start();
            }
        }
    }

    update() {
        this.time = this.stopwatchService.time();
    }

  

    Save(tym,value){     
        
        
        var goal = tym.childNodes[1].lastElementChild.value;
        var description = tym.childNodes[3].firstElementChild.value;
        var hour = tym.childNodes[5].firstElementChild.childNodes[1].value;
        var minute = tym.childNodes[5].firstElementChild.childNodes[5].value;
        this.givenTime = (hour*3600)  + (minute*60);

        if((goal != "")&&(description != "")&&this.givenTime != 0){

            var data = {  goal, description, hour, minute}

            tym.childNodes[1].firstChild.replaceWith(goal);
            tym.childNodes[3].firstChild.replaceWith(description);
            tym.childNodes[5].firstElementChild.replaceWith( hour +' hours ' + minute + ' minutes' );
            
            this.issaved = true;
            this.isHide = !this.isHide;
            value.expected_time = this.givenTime;
            let chosenDate = new Date(this.date.toISOString());

            value.chosenDate =   chosenDate.getFullYear()  + '/' + +(chosenDate.getMonth() + 1) + '/' + chosenDate.getDate()
            
            let token = localStorage.getItem('token');
            value.token = token;
            this.goalService.postGoal(value).subscribe(res=>{this.goalId=res.data.goalid;console.log(this.goalId)})
        }
             
    }

    Complete(wid){
        if(this.presentTime != 0){
            wid.style.width = "100%";
            this.stopped=true;
            this.stop();
            let value = {
                actualTime : this.presentTime,token:localStorage.getItem('token'),goalId:this.goalId
            } 
            this.goalService.postGoal(value).subscribe(res=>console.log(res))
            if(this.presentTime < this.givenTime){
                wid.style.background = "#14bc30"; 
            }
            else{
                wid.style.background = "#E7505A";
            }
        }
    }

    Stopped(wid,tym){
        
       if((this.issaved == true)&&(this.presentTime != 0)){ 
        
            var a = parseInt(wid.style.width) +25
            if(a >= 100){
                wid.style.width = "100%";
                this.stopped=true;
                
                this.stop();
                let value = {
                    actualTime : this.presentTime,token:localStorage.getItem('token'),goalId:this.goalId
                } 
                this.goalService.postGoal(value).subscribe(res=>console.log(res))
            } 
            else{            
                wid.style.width =`${a}%`;
                
            } 

            if( ((wid.style.width == "25%") && this.presentTime < (this.givenTime/4))
                ||((wid.style.width == "50%") && this.presentTime < (this.givenTime/2))
                ||((wid.style.width == "75%") && this.presentTime < (3*this.givenTime/4))
                ||((wid.style.width == "100%") && this.presentTime < (this.givenTime)) ){
                wid.style.background = "#14bc30";   
            }
            if( ((wid.style.width == "25%") && this.presentTime >= (this.givenTime/4)) 
                ||((wid.style.width == "50%") && this.presentTime >= (this.givenTime/2))
                ||((wid.style.width == "75%") && this.presentTime >= (3*this.givenTime/4))
                ||((wid.style.width == "100%") && this.presentTime >= (this.givenTime)) ){
                wid.style.background = "#E7505A";     
            }
               
       }    
        
    }   
        
}
