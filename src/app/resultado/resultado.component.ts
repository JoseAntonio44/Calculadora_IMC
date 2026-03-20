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
  @Input() resultado: ResultadoImc | null = null;
  @Input() historial: ResultadoImc[] = [];
}