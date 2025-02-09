import { Gerente } from "./funcionario/gerente.ts";
import { Vendedor } from "./funcionario/vendedor.ts"; 
import { SalarioAdicional } from "./estrategia/salarioAdicional.ts";
import { salarioDobrado } from "./estrategia/salarioDobrado.ts";

let gerente: Gerente = new Gerente(2500);
gerente.salarioStrategy = new SalarioAdicional();
console.log(gerente.calcularSalario());

let vendedor: Vendedor = new Vendedor(2000);
vendedor.salarioStrategy = new salarioDobrado();
console.log(vendedor.calcularSalario());