import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaImc, ResultadoImc } from '../models/resultado-imc';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  private toastService = inject(ToastService);

  nombre: string = '';
  nombreInvalido = false;
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
    this.nombreInvalido = false;
    this.sexo = 'hombre';
    this.peso = 70;
    this.altura = 170;
    this.toastService.show('Formulario restablecido', 'success');
  }

  private clasificar(imc: number): { categoria: CategoriaImc; frag: string } {
    if (imc < 18.5) return { categoria: 'bajo', frag: 'por debajo de su peso ideal' };
    if (imc < 25) return { categoria: 'ideal', frag: 'en su peso ideal' };
    return { categoria: 'alto', frag: 'por encima de su peso ideal' };
  }

  calcular(): void {
    const nombre = this.nombre.trim();
    if (!nombre) {
      this.nombreInvalido = true;
      this.toastService.show('El nombre es obligatorio', 'error');
      return;
    }
    this.nombreInvalido = false;

    // Fórmula IMC: peso / (altura en metros)^2
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    const { categoria, frag } = this.clasificar(imc);
    const mensaje = `${nombre} está ${frag}`;

    // Emitimos el resultado al componente padre
    this.calcularIMC.emit({
      nombre,
      sexo: this.sexo,
      peso: this.peso,
      altura: this.altura,
      imc: imc.toFixed(2),
      mensaje,
      categoria
    });
  }
}