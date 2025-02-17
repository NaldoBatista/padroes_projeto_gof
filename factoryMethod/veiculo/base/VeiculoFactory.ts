import { Carro } from "../Carro.ts";
import { type iVeiculo } from "./iVeiculo.ts";
import { Moto } from "../Moto.ts";
import { VeiculoEnum } from "./VeiculoEnum.ts";

export class VeiculoFactory {

    public create(veiculo: string): iVeiculo {
        if (veiculo === VeiculoEnum.Carro) {
            return new Carro();
        }

        if (veiculo === VeiculoEnum.Moto) {
            return new Moto();
        }

        throw new Error("Veículo não encontrado.");
    }
}