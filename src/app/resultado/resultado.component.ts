import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoImc } from '../models/resultado-imc';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  // @Input — recibe datos del padre
  @Input() historial: ResultadoImc[] = [];

  get historialLabel(): string {
    return this.historial.length === 1 ? '1 cálculo' : `${this.historial.length} cálculos`;
  }
}