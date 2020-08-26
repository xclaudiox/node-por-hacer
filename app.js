const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tareasPorHacer = porHacer.getListado();

        tareasPorHacer.forEach(tareas => {
            console.log('=======POR HACER======='.green);
            console.log(`Tarea: ${ tareas.descripcion }`);
            console.log(`Estado: ${ tareas.completado }`);
            console.log('======================='.green);
        });
        break;
    case 'actualizar':
        console.log('actualizar');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('borrar');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
        break;
}