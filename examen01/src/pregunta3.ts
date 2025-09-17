console.log("Pregunta 3");

interface TODO {
    codigo: number,
    tarea: string,
    estado: boolean
}

/**
 * 
 * Implementar la función agregarTODO que reciba como argumentos de entrada
 *  una lista de TODOs, un numero y el nombre de la tarea. 
 * Esta función deberá devolver una nueva lista de TODOs con el último creado. 
 * Nota: El nuevo TODO deberá tener el campo estado con el valor falso por defecto. 
 * (2 puntos)
 */

const agregarTODO = (lista: TODO[], codigo: number, tarea: string): TODO[] => {
    //const nuevaLista = [...lista]
    const nuevaLista: TODO[] = []
    lista.forEach((tarea) => {
        const copiaTarea: TODO = {
            codigo: tarea.codigo,
            tarea: tarea.tarea,
            estado: tarea.estado
        }
        nuevaLista.push(copiaTarea)
    })
    nuevaLista.push({
        codigo: codigo,
        tarea: tarea,
        estado: false
    })
    return nuevaLista
}

const marcarTODO = (lista: TODO[], codigo: number): TODO[] => {
    //const nuevaLista = [...lista]
    const nuevaLista: TODO[] = []
    lista.forEach((tarea) => {
        const copiaTarea: TODO = {
            codigo: tarea.codigo,
            tarea: tarea.tarea,
            estado: tarea.estado
        }
        if (tarea.codigo === codigo) {
            copiaTarea.estado = true
        }
        nuevaLista.push(copiaTarea)
    })
    return nuevaLista
}
const reporteTODOs = (lista: TODO[]): void => {
    lista.forEach((tarea) => {
        console.log(
            `(${tarea.codigo}) ${tarea.tarea} [${tarea.estado ? "X" : " "}]`
        )
    })
}
const main = (): void => {
    let listaTODOs : TODO[] = []
    listaTODOs = agregarTODO(listaTODOs, 1, "Tarea 1")
    listaTODOs = agregarTODO(listaTODOs, 2, "Tarea 2")
    listaTODOs = agregarTODO(listaTODOs, 3, "Tarea 3")
    reporteTODOs(listaTODOs)
    console.log("----")
    listaTODOs = marcarTODO(listaTODOs, 2)
    reporteTODOs(listaTODOs)
};

main();