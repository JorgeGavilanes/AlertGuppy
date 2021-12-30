const closeModalAlertGuppy = () => {
    const closeButtonAlertGuppy = document.querySelector(".closeAlertGuppy");
    
    closeButtonAlertGuppy.addEventListener("click", () => {
        const containerAlertGuppy = document.querySelector(".containerAlertGuppy");
        containerAlertGuppy.remove();
    });
}

class AlertGuppy{
    constructor(obj){
        this.title = obj.title;
        this.icon = obj.icon;
        this.text = obj.text;
    }

    get warning(){
        return this.alertMsg("#FEE683","#F1C40F");
    }

    get success(){
        return this.alertMsg("#8FFABD","#2ECC71");
    }

    get error(){
        return this.alertMsg("#FF988E","#E74C3C");
    }
    //Para crear una nueva alerta creamos un getter y retornamos la funcion con dos colores en hexadecimal, el primero es mas claro que el segundo
    get reading(){
        return this.alertMsg("#8FFABD","#2ECC71");
    }

    alertMsg(colorPrimary, colorSecondary){
        const iconsList = {
            //si desea agregar mas iconos tendria que pegar la ruta del json en lordicon
            error : "https://cdn.lordicon.com/zpmqckup.json",
            warning : "https://cdn.lordicon.com/tdrtiskw.json",
            success : "https://cdn.lordicon.com/tfosrbcn.json",
            reading : "https://cdn.lordicon.com/wxnxiano.json"
        }
        const containerAG = document.createElement("div"),
              boxAG = document.createElement("div"),
              closeAG = document.createElement("i"),
              iconAG = document.createElement("lord-icon"),
              titleAG = document.createElement("h2"),
              textAG = document.createElement("p");
        containerAG.className = "containerAlertGuppy";
        boxAG.className = "boxAlertGuppy";
        closeAG.className = "far fa-times-circle closeAlertGuppy";
        iconAG.className = "iconAlertGuppy";
        titleAG.className = "titleAlertGuppy";
        titleAG.innerHTML = this.title;
        textAG.className = "textAlertGuppy";
        textAG.innerHTML = this.text;
        boxAG.appendChild(closeAG);
        boxAG.appendChild(iconAG);
        iconAG.setAttribute("src", `${iconsList[this.icon]}`);
        iconAG.setAttribute("trigger", "loop");
        iconAG.setAttribute("scale", "66");
        iconAG.setAttribute("colors", `primary:${colorPrimary},secondary:${colorSecondary}`);
        iconAG.setAttribute("style", "width:88px;height:88px");
        boxAG.appendChild(titleAG);
        boxAG.appendChild(textAG);
        containerAG.appendChild(boxAG);
        document.body.appendChild(containerAG);
        closeModalAlertGuppy();
    }
}