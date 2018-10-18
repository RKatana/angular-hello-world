import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
 
   goals= [
    new Goal (1, 'watch Finding Nemo', 'Find an online version and watche merlin find his son', new Date(2018,3,14)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2018,6,9)),
    new Goal(3,'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2018,1,12)),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2018,2,14)),
    new Goal (5, 'Solve Math homework', 'Damn Math', new Date(2018,3,14)),
    new Goal (6, 'Plot my world domination plan', 'It is really nothing serious', new Date(2018,7,14)),
    ]

    toggleDetails(index){
      this.goals[index].showDescription=!this.goals[index].showDescription;
    }
    completeGoal(isComplete, index){
      if(isComplete){
        this.goals.splice(index,1);
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
