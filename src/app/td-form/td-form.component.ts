import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero.class';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss'],
})
export class TdFormComponent implements OnInit {
  // myHero!: Hero;
  myHero: Hero = new Hero();
  @ViewChild('f') mioForm!: NgForm;
  poteri = ['Invisibilità', 'Forza', 'Elasticità', 'Volare', 'Mutaforme'];
  myHeroIsAdd = false;
  constructor() {}

  ngOnInit(): void {}

  addHero() {
    this.myHero.nome = this.mioForm.value.nome;
    this.myHero.alterEgo = this.mioForm.value.alterEgo;
    this.myHero.potere = this.mioForm.value.potere;
    this.myHero.nemico = this.mioForm.value.nemico;
    this.myHero.pianeta = this.mioForm.value.pianeta;
    this.myHeroIsAdd = true;
    console.log(this.myHero);
    this.myHero = new Hero();
  }
}
