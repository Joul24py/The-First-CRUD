// Functionality to the add registration
var buttonAddRegistration = document.getElementsByClassName("addButton");

buttonAddRegistration[0].addEventListener("click", function()
{
    var scriptNode = document.getElementsByTagName("script");
    
    var divAddRegistration = document.createElement("div");
    divAddRegistration.className = "divAddRegistration";
    divAddRegistration.onclick = "deleteShadowDiv()";
    divAddRegistration.style.position = "absolute";
    divAddRegistration.style.zIndex = "1";
    divAddRegistration.style.height = "100vh";
    divAddRegistration.style.width = "100vw";
    divAddRegistration.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    //document.body.appendChild(divAddRegistration);
    document.body.insertBefore(divAddRegistration, scriptNode[0]);

    var divFormRegistration = document.createElement("div");
    divFormRegistration.className = "divFormRegistration";
    divFormRegistration.style.position = "absolute";
    divFormRegistration.style.height = "90vh";
    divFormRegistration.style.width = "75vw";
    divFormRegistration.style.backgroundColor = "rgba(27, 102, 0, 1)";
    divFormRegistration.style.border = "4px outset #292929";
    divFormRegistration.style.borderRadius = "20px";
    divFormRegistration.style.top = "50%";
    divFormRegistration.style.left = "50%";
    divFormRegistration.style.transform = "translate(-50%, -50%)";
    divAddRegistration.appendChild(divFormRegistration);
});

// Functionality to delete the add registration when click on the shadow div
function deleteShadowDiv()
{
    var getShadowDiv = document.getElementsByClassName("divAddRegistration");
    var shadowDiv = getShadowDiv[0];
    shadowDiv.remove();
}

/*
NO HE PODIDO HACER QUE ESTA FUNCIÓN JALE
Entonces supongo que haré que el div anterior sí exista pero esté oculto y hacer que con las funciones se muestre
*/