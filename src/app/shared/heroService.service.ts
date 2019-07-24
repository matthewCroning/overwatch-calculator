import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
    
    heroes: Hero[] = [];
    
    dva = new Hero("d.va", "tank", "/assets/images/dva.png");
    orisa = new Hero("orisa", "tank", "/assets/images/orisa.png");
    reinhardt =  new Hero("reinhardt", "tank", "/assets/images/reinhardt.png");
    roadhog = new Hero("roadhog", "tank", "/assets/images/roadhog.png");
    winston = new Hero("winston", "tank", "/assets/images/winston.png");
    wreckingball = new Hero("wreckingball", "tank", "/assets/images/wreckingball.png");
    zarya = new Hero("zarya", "tank", "/assets/images/zarya.png");
    ashe = new Hero("ashe", "dps", "/assets/images/ashe.png");
    bastion = new Hero("bastion", "dps", "/assets/images/bastion.png");
    doomfist = new Hero("doomfist", "dps", "/assets/images/doomfist.png");
    genji = new Hero("genji", "dps", "/assets/images/genji.png");
    hanzo = new Hero("hanzo", "dps", "/assets/images/hanzo.png");
    junkrat = new Hero("junkrat", "dps", "/assets/images/junkrat.png");
    mccree = new Hero("mccree", "dps", "/assets/images/mccree.png");
    mei = new Hero("mei", "dps", "/assets/images/mei.png");
    pharah = new Hero("pharah", "dps", "/assets/images/pharah.png");
    reaper = new Hero("reaper", "dps", "/assets/images/reaper.png");
    soldier76 = new Hero("soldier:76", "dps", "/assets/images/soldier76.png");
    sombra = new Hero("sombra", "dps", "/assets/images/sombra.png");
    symmetra = new Hero("symmetra", "dps", "/assets/images/symmetra.png");
    torbjorn = new Hero("torbjorn", "dps", "/assets/images/torbjorn.png");
    tracer = new Hero("tracer", "dps", "/assets/images/tracer.png");
    widowmaker = new Hero("widowmaker", "dps", "/assets/images/widowmaker.png");
    ana = new Hero("ana", "support", "/assets/images/ana.png");
    baptiste = new Hero("baptiste", "support", "/assets/images/baptiste.png");
    brigitte = new Hero("brigitte", "support", "/assets/images/brigitte.png");
    lucio = new Hero("lucio", "support", "/assets/images/lucio.png");
    mercy = new Hero("mercy", "support", "/assets/images/mercy.png");
    moira = new Hero("moira", "support", "/assets/images/moira.png");
    zenyatta = new Hero("zenyatta", "support", "/assets/images/zenyatta.png");
    
    addWeakAgainst(){
       this.dva.addWeakAgainst([this.brigitte, this.doomfist, this.junkrat, this.mei, this.reaper, this.roadhog, this.sombra, this.zarya, this.zenyatta]);
       this.orisa.addWeakAgainst([this.genji, this.hanzo, this.moira, this.junkrat, this.reaper, this.tracer]);
       this.reinhardt.addWeakAgainst([this.bastion, this.doomfist, this.junkrat, this.mei, this.moira, this.pharah, this.reaper, this.sombra, this.torbjorn]);
       this.roadhog.addWeakAgainst( [this.ana, this.mei, this.reaper, this.zarya, this.zenyatta]);
       this.winston.addWeakAgainst([this.bastion, this.dva, this.reaper, this.roadhog, this.torbjorn]);
       this.wreckingball.addWeakAgainst([this.ana, this.bastion, this.brigitte, this.reaper, this.roadhog, this.mei, this.sombra, this.torbjorn]);
       this.zarya.addWeakAgainst([this.baptiste, this.bastion, this.pharah, this.reaper, this.zenyatta]);

       this.ashe.addWeakAgainst([this.doomfist, this.dva, this.genji, this.hanzo, this.reinhardt, this.widowmaker,this.wreckingball]);
       this.bastion.addWeakAgainst([this.ana,this.ashe,this.dva,this.genji,this.hanzo,this.junkrat,this.pharah,this.roadhog,this.soldier76,this.tracer,this.widowmaker,this.zenyatta]);
       this.doomfist.addWeakAgainst([this.mccree, this.orisa, this.pharah, this.reaper, this.sombra]);
       this.genji.addWeakAgainst([this.brigitte, this.doomfist, this.mei, this.moira, this.pharah, this.roadhog, this.winston, this.zarya]);
       this.hanzo.addWeakAgainst([this.dva, this.genji, this.tracer, this.reinhardt, this.widowmaker, this.winston]);
       this.junkrat.addWeakAgainst([this.baptiste, this.genji, this.pharah, this.widowmaker, this.zarya]);
       this.mccree.addWeakAgainst( [this.dva, this.roadhog, this.widowmaker, this.winston]);
       this.mei.addWeakAgainst( [this.pharah, this.widowmaker]);
       this.pharah.addWeakAgainst( [this.ana, this.ashe, this.baptiste, this.dva, this.mccree, this.soldier76, this.widowmaker, this.zenyatta]);
       this.reaper.addWeakAgainst( [this.hanzo, this.junkrat, this.pharah, this.mccree, this.widowmaker]);
       this.soldier76.addWeakAgainst([this.orisa, this.reinhardt, this.roadhog, this.widowmaker]);
       this.sombra.addWeakAgainst( [this.hanzo, this.junkrat, this.mccree, this.mei, this.reaper, this.roadhog, this.winston]);
       this.symmetra.addWeakAgainst( [this.baptiste, this.mccree, this.pharah, this.sombra, this.widowmaker, this.winston]);
       this.torbjorn.addWeakAgainst([this.ana, this.ashe, this.dva, this.genji, this.hanzo, this.junkrat, this.orisa, this.pharah, this.reaper, this.roadhog, this.soldier76, this.widowmaker, this.zarya]);
       this.tracer.addWeakAgainst([this.brigitte, this.junkrat, this.sombra, this.torbjorn, this.winston]);
       this.widowmaker.addWeakAgainst( [this.dva, this.genji, this.orisa, this.reinhardt, this.winston, this.wreckingball]);

       this.ana.addWeakAgainst([this.doomfist, this.dva, this.genji, this.tracer, this.winston, this.widowmaker]);
       this.baptiste.addWeakAgainst([ this.genji, this.roadhog, this.winston, this.wreckingball, this.sombra]);
       this.brigitte.addWeakAgainst( [this.baptiste, this.junkrat,this.pharah,this.reaper, this.sombra,this.torbjorn,this.widowmaker]);
       this.lucio.addWeakAgainst([this.ana, this.mccree, this.pharah, this.roadhog, this.sombra, this.winston]);
       this.mercy.addWeakAgainst([this.ashe, this.dva, this.genji, this.mccree, this.mei, this.reaper, this.roadhog, this.soldier76, this.sombra, this.widowmaker, this.tracer, this.winston]);
       this.moira.addWeakAgainst( [this.ana, this.baptiste, this.dva, this.mccree]);
       this.zenyatta.addWeakAgainst( [this.ana, this.doomfist, this.genji, this.mccree, this.mei, this.reaper, this.sombra, this.tracer, this.widowmaker]);
    }

    createArrayOfHeroes(){
       this.heroes.push(this.dva);
       this.heroes.push(this.orisa);
       this.heroes.push(this.reinhardt);
       this.heroes.push(this.roadhog);
       this.heroes.push(this.winston);
       this.heroes.push(this.wreckingball);
       this.heroes.push(this.zarya);
    
       this.heroes.push(this.ashe);
       this.heroes.push(this.bastion);
       this.heroes.push(this.doomfist);
       this.heroes.push(this.genji);
       this.heroes.push(this.hanzo);
       this.heroes.push(this.junkrat);
       this.heroes.push(this.mccree);
       this.heroes.push(this.mei);
       this.heroes.push(this.pharah);
       this.heroes.push(this.reaper);
       this.heroes.push(this.soldier76);
       this.heroes.push(this.sombra);
       this.heroes.push(this.symmetra);
       this.heroes.push(this.torbjorn);
       this.heroes.push(this.tracer);
       this.heroes.push(this.widowmaker);
       
       this.heroes.push(this.ana);
       this.heroes.push(this.baptiste);
       this.heroes.push(this.brigitte);
       this.heroes.push(this.lucio);
       this.heroes.push(this.mercy);
       this.heroes.push(this.moira);
       this.heroes.push(this.zenyatta);
    }

    getHeroes(): Hero[]{
        return this.heroes;
    }

    runner(){
        console.log(this.moira.weakAgainst[1]);
        console.log(this.heroes.push(this.moira));
    }

    constructor() { }
}