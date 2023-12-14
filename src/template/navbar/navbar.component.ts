import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() eventoToggleButon: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleButon(){
      this.eventoToggleButon.emit();
  }

  redirectToHome(){
    this.router.navigate(["home"]);
  }


}
