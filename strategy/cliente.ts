import { Funcionario } from "./funcionario/funcionario.ts";
import { SalarioAdicional } from "./estrategia/salarioAdicional.ts";
import { salarioDobrado } from "./estrategia/salarioDobrado.ts";

let gerente: Funcionario = new Funcionario(2500);
gerente.salarioStrategy = new SalarioAdicional();
console.log(gerente.calcularSalario());

let vendedor: Funcionario = new Funcionario(2000);
vendedor.salarioStrategy = new salarioDobrado();
console.log(vendedor.calcularSalario());