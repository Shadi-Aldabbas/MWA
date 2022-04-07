import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { PerantComponent } from './perant/perant.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    GamesComponent,
    GameComponent,
    ErrorPageComponentComponent,
    StarsRatingComponent,
    PerantComponent,
    ChildComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
      {
      path: "game/:gameId",
      component: GameComponent
      },
      {
      path: "**",
      component: ErrorPageComponentComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
