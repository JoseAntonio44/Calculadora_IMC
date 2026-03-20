import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultadoImc } from '../models/resultado-imc';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  sexo: string = 'hombre';
  peso: number = 70;
  altura: number = 170;

  // @Output — envia datos del hijo al padre
  @Output() calcularIMC = new EventEmitter<ResultadoImc>();

  sumarPeso(): void {
    this.peso++;
  }

  restarPeso(): void {
    if (this.peso > 1) this.peso--;
  }

  sumarAltura(): void {
    this.altura++;
  }

  restarAltura(): void {
    if (this.altura > 1) this.altura--;
  }

  borrar(): void {
    this.nombre = '';
    this.sexo = 'hombre';
    this.peso = 70;
    this.altura = 170;
  }

  calcular(): void {
    // Fórmula IMC: peso / (altura en metros)^2
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    const imcRedondeado = Math.round(imc * 100) / 100;

    let mensaje = '';
    if (imc < 18.5) {
      mensaje = this.nombre + ' está por debajo de su peso ideal';
    } else if (imc < 25) {
      mensaje = this.nombre + ' está en su peso ideal';
    } else {
      mensaje = this.nombre + ' está por encima de su peso ideal';
    }

    // Emitimos el resultado al componente padre
    this.calcularIMC.emit({
      nombre: this.nombre,
      sexo: this.sexo,
      peso: this.peso,
      altura: this.altura,
      imc: imcRedondeado,
      mensaje: mensaje
    });
  }
}