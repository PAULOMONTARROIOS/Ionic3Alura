import { UsuariosServiceProvider } from './../providers/usuarios-service/usuarios-service';
import { PerfilPage } from './../pages/perfil/perfil';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
import { CadastroPage } from '../pages/cadastro/cadastro';

@Component({
  selector: 'myApp',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  @ViewChild(Nav) public nav: Nav;

  public paginas = [
    { titulo: "Agendamento", componente: ListaAgendamentosPage.name, icone: "calendar" },
    { titulo: "Perfil", componente: PerfilPage.name, icone: "person" }
  ];

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private _usuariosService: UsuariosServiceProvider
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(componente) {
    this.nav.push(componente);
  }

  get avatar(){
    return this._usuariosService.obtemAvatar();
  }

  get usuarioLogado(){
    return this._usuariosService.obtemUsuarioLogado();
  }
}

