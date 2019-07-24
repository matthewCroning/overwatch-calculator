import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/heroService.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  heroes: Hero[];
  myTeam: Hero[] = [];
  enemyTeam: Hero[] = [];
  enemyNotCountered: Hero[] = [];
  myTeamNotCountering: Hero[] = [];

  goodCounters = new Map();
  weakHeroes = new Map();
  weakOnTeam = new Map();

  weak: Hero[] = [];

  notCountered: boolean;
  notCountering: boolean;

  constructor(private heroesService: HeroService) {
    heroesService.addWeakAgainst();
    heroesService.createArrayOfHeroes();
    this.heroes = heroesService.getHeroes();
    
  }

  ngOnInit() {
  }

  selectMyTeam(selectedHero: Hero){
    console.log("fart");
    for(var i = 0; i < this.myTeam.length; i++){
      if(this.myTeam[i].name == selectedHero.name){
        this.myTeam.splice(i, 1);
        selectedHero.selected = false;  
        this.calculateAll();
        return 0; 
      }
    }
    if(this.myTeam.length < 6){
      this.myTeam.push(selectedHero);
      selectedHero.selected = true;  
      this.calculateAll();
    }
  }

  selectEnemyTeam(selectedHero: Hero){
    for(var i = 0; i < this.enemyTeam.length; i++){
      if(this.enemyTeam[i].name == selectedHero.name){
        this.enemyTeam.splice(i, 1);
        selectedHero.enemySelected = false;  
        this.calculateAll();
        return 0; 
      }
    }
    if(this.enemyTeam.length < 6){
      this.enemyTeam.push(selectedHero);
      selectedHero.enemySelected = true;  
      this.calculateAll();
    }
  }

  calculateAll(){
    this.calculateGoodCounters();
    this.calculateWeakAgainst();
    this.calculateEnemyNotCountering();
    this.calculateMyTeamNotCountering();
    this.calculateWeakTeamMembers();
  }

  calculateGoodCounters(){
    this.goodCounters.clear();
    for(let enemy of this.enemyTeam){
      for(let weakAgainst of enemy.weakAgainst){
        if(this.goodCounters.has(weakAgainst) == true){
          this.weak = [];
          this.weak = this.goodCounters.get(weakAgainst);
          this.weak.push(enemy);
          this.goodCounters.set(weakAgainst, this.weak);
        } else {
          this.weak = [];
          this.weak.push(enemy);
          this.goodCounters.set(weakAgainst, this.weak);
        }
      }
    }    
  }

  calculateWeakAgainst(){
    this.weakHeroes.clear();
    this.weak = [];
    for(let hero of this.myTeam){
      for(let weakAgainst of hero.weakAgainst){
        for(let enemyHero of this.enemyTeam){
          if(weakAgainst == enemyHero){
            if(this.weakHeroes.has(hero) == true){
              this.weak = this.weakHeroes.get(hero);
              this.weak.push(enemyHero);
              this.weakHeroes.set(hero, this.weak);
            } else {
              this.weak = [];
              this.weak.push(enemyHero);
              this.weakHeroes.set(hero, this.weak);
            }
          }
        }
      }
    }
  }

  calculateEnemyNotCountering(){
    this.enemyNotCountered = [];
    for(let enemy of this.enemyTeam){
      this.notCountered = true;
      for(let weakAgainst of enemy.weakAgainst){
        for(let hero of this.myTeam){
          if(hero == weakAgainst){
            this.notCountered = false;
          }
        }
      }
      if(this.notCountered == true){
        this.enemyNotCountered.push(enemy);
      }
    }
  }

  calculateMyTeamNotCountering(){
    this.myTeamNotCountering = [];
    for(let hero of this.myTeam){
      this.notCountering = true;
      for(let enemy of this.enemyTeam){
        for(let weakAgainst of enemy.weakAgainst){

          if(weakAgainst == hero){
            this.notCountering = false;
          }
        }
      }
      if(this.notCountering == true){
        this.myTeamNotCountering.push(hero);
      }
    }
  }

  calculateWeakTeamMembers(){
    this.weakOnTeam.clear(); 
    for(let hero of this.myTeam){
      for(let enemy of this.enemyTeam){
        for(let weakAgainst of hero.weakAgainst){
            if(enemy == weakAgainst){
              if(this.weakOnTeam.has(hero) == true){
                this.weakOnTeam.set(hero, this.weakOnTeam.get(hero) + 1);
              } else {
                this.weakOnTeam.set(hero, 1);
              }
          }
        }
      }
    }
  }

  clearMyTeam(){
    this.myTeam = [];
    for(let hero of this.heroes){
      hero.selected = false;
    }
    this.calculateAll();
  }

  clearEnemyTeam(){
    this.enemyTeam = [];
    for(let enemy of this.heroes){
      enemy.enemySelected = false;
    }
    this.calculateAll();
  }
}
