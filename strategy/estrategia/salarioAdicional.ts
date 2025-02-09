import iSalarioStrategy from './iSalarioStrategy.ts';

export class SalarioAdicional implements iSalarioStrategy {

    calcularSalario(salario: number): number {
        return salario * 1.5;
    }
}