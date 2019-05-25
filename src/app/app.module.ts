import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FemininoAdultoComponent } from './feminino-adulto/feminino-adulto.component';
import { FemininoInfantilComponent } from './feminino-infantil/feminino-infantil.component';
import { CamisolaComponent } from './camisola/camisola.component';
import { CalcinhaComponent } from './calcinha/calcinha.component';
import { SoutienComponent } from './soutien/soutien.component';
import { GestanteComponent } from './gestante/gestante.component';
import { SexyComponent } from './sexy/sexy.component';
import { SexshopComponent } from './sexshop/sexshop.component';
import { MasculinoAdultoComponent } from './masculino-adulto/masculino-adulto.component';
import { MasculinoInfantilComponent } from './masculino-infantil/masculino-infantil.component';
import { CuecaComponent } from './cueca/cueca.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ContatoComponent } from './contato/contato.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoComponent,
    CarouselComponent,
    FemininoAdultoComponent,
    FemininoInfantilComponent,
    CamisolaComponent,
    CalcinhaComponent,
    SoutienComponent,
    GestanteComponent,
    SexyComponent,
    SexshopComponent,
    MasculinoAdultoComponent,
    MasculinoInfantilComponent,
    CuecaComponent,
    QuemSomosComponent,
    LocalizacaoComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
