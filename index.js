function advertencia(){
    const mensaje = new AlertGuppy({
        title: 'Warning!',
        text: 'Please, check your status',
        icon: 'warning'
    });
    mensaje.warning();
};
function valido(){
    const mensaje = new AlertGuppy({
        title: 'Success!',
        text: 'Your data its ok :3',
        icon: 'success'
    });
    mensaje.success();
};
function fallido(){
    const mensaje = new AlertGuppy({
        title: 'Error!',
        text: 'Please, logout right now',
        icon: 'error'
    });
    mensaje.error();
};
//se crea una funcion el cual se llamara en el archivo
function leyendo(){
    //se instancia la clase AlertGuppy y se pasan los argumentos en formato de objeto
    const mensaje = new AlertGuppy({
        title: 'Im reading',
        text : 'This book is amazing',
        icon : 'reading'
    });
    //se pide el get
    mensaje.reading();
}