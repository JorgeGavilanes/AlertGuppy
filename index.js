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