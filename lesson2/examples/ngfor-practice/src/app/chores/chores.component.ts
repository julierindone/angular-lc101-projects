import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Feed cats', 'Change litter tray', 'Give cats treats']},
      {title: "Today's chores", tasks: ["LaunchCode Assignment 6", "Fan videos"]},
      {title: "Tomorrow's chores", tasks: ["Whatever didn't get done", "grocery shopping"]},
   ]

   constructor() { }

   ngOnInit() {
   }

}
