export type CategoriaImc = 'bajo' | 'ideal' | 'alto';

export interface ResultadoImc {
  nombre: string;
  sexo: string;
  peso: number;
  altura: number;
  imc: string;
  mensaje: string;
  categoria: CategoriaImc;
}