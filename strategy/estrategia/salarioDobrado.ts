import iSalarioStrategy from "./iSalarioStrategy.ts";

export class salarioDobrado implements iSalarioStrategy {

    calcularSalario(salario: number): number {
        return salario * 2;
    }
}