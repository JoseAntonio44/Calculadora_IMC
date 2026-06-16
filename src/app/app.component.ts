import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ToastComponent } from './toast/toast.component';
import { ResultadoImc } from './models/resultado-imc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormularioComponent, ResultadoComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoResultado: ResultadoImc | null = null;
  historial: ResultadoImc[] = [];
  mostrarModal = false;

  // Este método se ejecuta cuando el hijo emite el evento
  onCalcular(resultado: ResultadoImc): void {
    this.ultimoResultado = resultado;
    this.historial = [resultado, ...this.historial];
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}