const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnMiel = document.querySelector('.miel');
const btnPropoleo = document.querySelector('.propoleo');
const btnPolen = document.querySelector('.polen');
const btnJalea = document.querySelector('.jalea');
const btnGotas = document.querySelector('.gotas');
const btnpanal = document.querySelector('.panal');
const contenedorProductos = document.querySelector('.productos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    productos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const productos = () =>{
    let productosArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productosArreglo = [...productosArreglo,producto]);

    const miel = productosArreglo.filter(miel=> miel.getAttribute('data-producto') === 'miel');
    const propoleo = productosArreglo.filter(propoleo => propoleo.getAttribute('data-producto') === 'propoleo');
    const polen = productosArreglo.filter(polen => polen.getAttribute('data-producto') === 'polen');
    const jalea = productosArreglo.filter(jalea=> jalea.getAttribute('data-producto') === 'jalea');
    const gotas = productosArreglo.filter(gotas=> gotas.getAttribute('data-producto') === 'gotas');
    const panal = productosArreglo.filter(panal=> panal.getAttribute('data-producto') === 'panal');


    mostrarProductos(miel, propoleo, polen, jalea,gotas,panal, productosArreglo);

}

const mostrarProductos = (miel, propoleo, polen, jalea,gotas,panal, todos) =>{
    btnMiel.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        miel.forEach(miel=> contenedorProductos.appendChild(miel));
    });

    btnPropoleo.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
         propoleo.forEach(propoleo=> contenedorProductos.appendChild(propoleo));
    });

    btnPolen.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        polen.forEach(polen=> contenedorProductos.appendChild(polen));
    });
    btnJalea.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        jalea.forEach(jalea=> contenedorProductos.appendChild(jalea));
    });
    btnGotas.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        gotas.forEach(gotas=> contenedorProductos.appendChild(gotas));
    });
    btnpanal.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        panal.forEach(panal=> contenedorProductos.appendChild(panal));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todo=> contenedorProductos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}