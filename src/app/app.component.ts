import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ResultadoImc } from './models/resultado-imc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoResultado: ResultadoImc | null = null;
  historial: ResultadoImc[] = [];

  // Este método se ejecuta cuando el hijo emite el evento
  onCalcular(resultado: ResultadoImc): void {
    this.ultimoResultado = resultado;
    this.historial.push(resultado);
  }
}