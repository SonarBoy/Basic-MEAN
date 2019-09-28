import { Component,OnInit } from "@angular/core";

//import { Component } from "@angular/core";

/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosComponent } from './heros.component';

describe('HerosComponent', () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */



@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit{

  constructor(){}

  ngOnInit(){

  }
}

