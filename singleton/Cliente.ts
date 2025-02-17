import { ConnectionDb } from "./ConnetionDb.ts";

class Cliente {
    
    public testarSibgleton() {
        const db1 = ConnectionDb.getInstance();
        const db2 = ConnectionDb.getInstance();
        console.log(db1 == db2);

        const db3 = new ConnectionDb();
        const db4 = new ConnectionDb();
        console.log(db3 == db4)
    }
}

const cliente = new Cliente();
cliente.testarSibgleton();