function advertencia(title, text, icon){
    const mensaje = new AlertGuppy({
        title,
        text,
        icon
    });
    mensaje.warning();
};
function valido(title, text, icon){
    const mensaje = new AlertGuppy({
        title,
        text,
        icon
    });
    mensaje.success();
};
function fallido(title, text, icon){
    const mensaje = new AlertGuppy({
        title,
        text,
        icon
    });
    mensaje.error();
};
//se crea una funcion el cual se llamara en el archivo
function leyendo(title, text, icon){
    //se instancia la clase AlertGuppy y se pasan los argumentos en formato de objeto
    const mensaje = new AlertGuppy({
        title,
        text,
        icon
    });
    //se pide el get
    mensaje.reading();
}