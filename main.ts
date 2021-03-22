// Variables
const plantillaContent: any = (<HTMLMetaElement> document.querySelector('#templateArticulo')).content;
const articuloPlantilla = plantillaContent.firstElementChild;
const miMain: HTMLElement = document.querySelector('#main')
interface Noticia {
    titulo: string,
    autor: string,
    contenido: string,
    publicado: boolean
}
const misNoticias: Noticia[] = [
    {
        titulo: 'Las fallas se guardan',
        autor: 'Yo',
        contenido: 'Se apaga la chispa',
        publicado: true
    },
    {
        titulo: 'Las clases online son mejores',
        autor: 'Otro',
        contenido: 'Mola ver los compis y estar en ropa interior',
        publicado: true
    },
    {
        titulo: 'Los ordenadores conquistan la informática',
        autor: 'Juan',
        contenido: 'Lo dicho',
        publicado: false
    }
]


// Funciones

//Filtrar las noticias que esten publicadas, le doy un array de noticias y me devuelve un array de noticias
function filtrarPublicadas(misNoticias: Noticia[]): Noticia[] {
    return misNoticias.filter((miNoticia) => miNoticia.publicado)

    //return misNoticias.filter(function (miNoticia) {
    // return miNoticia.publicado
    //})

}

//Cuantos minutos te va a costar leer un texto
function contarMinutos(texto: string): number {
    return Math.ceil(texto.split(' ').length / 60)
}




function dibujar(): void {
    misNoticias.forEach(function (noticia)
    {
        //clono la plantilla
        const nuevoArticulo = articuloPlantilla.cloneNode(true);
        //Personalizo la informacion
        nuevoArticulo.querySelector('.titulo').textContent = noticia.titulo.concat(' - ', contarMinutos(noticia.contenido).toString() , ' min')
        nuevoArticulo.querySelector('.autor').textContent = noticia.autor
        nuevoArticulo.querySelector('.contenido').textContent = noticia.contenido
        // Incluye a mi <ul>
        miMain.appendChild(nuevoArticulo);
    });

}



// Eventos

// Inicio
dibujar()