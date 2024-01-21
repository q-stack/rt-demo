import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';
import { RtService } from '../rt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private rt: RtService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .pipe(
        switchMap((heroes: Hero[]) => this.rt.run(heroes)),
      )
      .subscribe(heroes => {
        this.heroes = heroes.filter((item: any) => (item["#annotations#"]) ? item["#annotations#"].includes("top hero") : false);
      });
  }
}
