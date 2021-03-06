import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filterTerm: string;
  constructor(private route: Router) {}

  ngOnInit() {
  }

  loginPage(){ 
    this.route.navigate(['login'])
   }
   
   
  userRecords = [{
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "email": "Karley_Dach@jasper.info"
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "email": "Telly.Hoeger@billy.biz"
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "email": "Sherwood@rosamond.me"
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "email": "Chaim_McDermott@dana.io"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz"
  }
]
}





