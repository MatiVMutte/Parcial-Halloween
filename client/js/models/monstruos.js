import { obtenerUltimoID } from "../funcionesABM.js";

export class Monstruo {
    constructor(nombre, alias, defensa, miedo, tipo) {
        return (async () => {
            this.id = await Monstruo.getUltimoID() + 1;
            this.nombre = nombre;
            this.alias = alias;
            this.defensa = defensa;
            this.miedo = miedo;
            this.tipo = tipo;
            return this; 
        })();
    }

    static async getUltimoID() {
        return await obtenerUltimoID();
    }
}