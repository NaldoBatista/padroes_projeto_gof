import { VeiculoEnum } from "./veiculo/VeiculoEnum.ts";
import { VeiculoFactory } from "./veiculo/VeiculoFactory.ts";

class Cliente {

    public testarFabrica() {
        try {
            const veiculoFactory = new VeiculoFactory();
            
            const carro = veiculoFactory.create(VeiculoEnum.Carro);
            carro.ligar();
            console.log(carro.andar());

            const moto = veiculoFactory.create(VeiculoEnum.Moto);
            console.log(moto.andar());
            
            const barco = veiculoFactory.create(VeiculoEnum.Barco);
            barco.ligar();
            console.log(barco.andar());
        } catch (error: any) {
            console.log(error.message);
        }
    }
}

const cliente = new Cliente();
cliente.testarFabrica();


