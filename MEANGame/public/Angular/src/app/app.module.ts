import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { RegisterComponent } from './register/register.component';
import { AddGameComponent } from './add-game/add-game.component';
import { LoginComponent } from './login/login.component';

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
    ChildComponent,
    RegisterComponent,
    AddGameComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: "game/add",
        component: AddGameComponent
      },
      {
        path: "game/:gameId",
        component: GameComponent
      },
      {
        path: 'games',
        component: GamesComponent,
      },
      {
        path: 'regester',
        component: RegisterComponent,
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
export class AppModule { }
