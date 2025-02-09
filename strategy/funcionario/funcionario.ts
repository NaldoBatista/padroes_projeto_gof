import { type iSalarioStrategy} from '../estrategia/iSalarioStrategy.ts';

export class Funcionario {
    
    private _salario: number;
    private _salarioStrategy: iSalarioStrategy;
    
    constructor(salario: number) {
        this._salario = salario;
    }

    set salarioStrategy(salarioStrategy: iSalarioStrategy) {
        this._salarioStrategy = salarioStrategy;
    }

    get salarioStrategy(): iSalarioStrategy {
        return this._salarioStrategy;
    }

    public calcularSalario(): number {
        if (this._salarioStrategy !== null && this._salarioStrategy !== undefined) {
            return this._salarioStrategy.calcularSalario(this._salario);
        }

        return this._salario;
    }
}