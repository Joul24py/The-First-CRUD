// Functions for random user generation
let db = [];

function randomName()
{
    let name = "";
    let nameNumber;
    let i;

    let girlNames = ['María', 'Andrea', 'Ana', 'Lucía', 'Sofía', 'Martina', 'María', 'Julia', 'Paula', 'Valeria', 'Emma', 'Daniela', 'Carla', 'Alba', 'Noa', 'Alma', 'Sara', 'Carmen', 'Vega', 'Lara', 'Mia', 'Valentina', 'Olivia', 'Claudia', 'Jimena', 'Lola', 'Chloe', 'Aitana', 'Abril', 'Ana', 'Laia', 'Triana', 'Candela', 'Alejandra', 'Elena', 'Vera', 'Manuela', 'Adriana', 'Inés', 'Marta', 'Carlota', 'Irene', 'Victoria', 'Blanca', 'Marina', 'Laura', 'Rocío', 'Alicia', 'Clara', 'Nora', 'Lia', 'Ariadna', 'Zoe', 'Amira', 'Gala', 'Celia', 'Leire', 'Eva', 'Ángela', 'Andrea', 'África', 'Luna', 'Ainhoa', 'Ainara', 'India', 'Nerea', 'Ona', 'Elsa', 'Isabel', 'Leyre', 'Gabriela', 'Aina', 'Cayetana', 'Iria', 'Jana', 'Mar', 'Cloe', 'Lina', 'Julieta', 'Adara', 'Naia', 'Iris', 'Nour', 'Mara', 'Helena', 'Yasmín', 'Natalia', 'Arlet', 'Diana', 'Aroa', 'Amaia', 'Cristina', 'Nahia', 'Isabella', 'Malak', 'Elia', 'Carolina', 'Berta', 'Fátima', 'Nuria', 'Azahara', 'Macarena', 'Aurora'];
    let boyNames = ['Juan', 'Antonio', 'Pedro', 'Hugo', 'Mateo', 'Martín', 'Lucas', 'Leo', 'Daniel', 'Alejandro', 'Manuel', 'Pablo', 'Álleto', 'Adrián', 'Enzo', 'Mario', 'Diego', 'David', 'Oliver', 'Marcos', 'Thiago', 'Marco', 'Álex', 'Javier', 'Izan', 'Bruno', 'Miguel', 'Antonio', 'Gonzalo', 'Liam', 'Gael', 'Marc', 'Carlos', 'Juan', 'Ángel', 'Dylan', 'Nicolás', 'José', 'Sergio', 'Gabriel', 'Luca', 'Jorge', 'Darío', 'Íker', 'Samuel', 'Eric', 'Adam', 'Héctor', 'Francisco', 'Rodrigo', 'Jesús', 'Erik', 'Amir', 'Jaime', 'Ian', 'Rubén', 'Aarón', 'Iván', 'Pau', 'Víctor', 'Guillermo', 'Luis', 'Mohamed', 'Pedro', 'Julen', 'Unai', 'Rafael', 'Santiago', 'Saúl', 'Alberto', 'Noah', 'Aitor', 'Joel', 'Nil', 'Jan', 'Pol', 'Raúl', 'Matías', 'Martí', 'Fernando', 'Andrés', 'Rayan', 'Alonso', 'Ismael', 'Asier', 'Biel', 'Ander', 'Aleix', 'Axel', 'Alan', 'Ignacio', 'Fabio', 'Neizan', 'Jon', 'Teo', 'Isaac', 'Arnau', 'Luka', 'Max', 'Imran', 'Youssef', 'Anas', 'Elías'];
    let lastNames = ['García', 'Alba', 'Esparza', 'Gómez', 'Velázquez', 'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz', 'Gómez', 'Flores', 'Morales', 'Vázquez', 'Jiménez', 'Reyes', 'Díaz', 'Torres', 'Gutiérrez', 'Ruiz', 'Mendoza', 'Aguilar', 'Méndez', 'Moreno', 'Ortíz', 'Juárez', 'Castillo', 'Álletez', 'Romero', 'Ramos', 'Rivera', 'Chávez', 'De la Cruz', 'Domínguez', 'Guzmán', 'Velázquez', 'Santiago', 'Herrera', 'Castro', 'Medina', 'Rojas', 'Muñóz', 'Luna', 'Contreras', 'Bautista', 'Salazar', 'Ortega', 'Guerrero ', 'Estrada'];

    let gender = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    let nameQuantity = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    let previousNumber = -1;

    for(i = 0; i < (nameQuantity + 1); i++)
    {
        if(gender == 0)
        {
            nameNumber = Math.floor(Math.random() * (girlNames.length) + 0);

            while(nameNumber == previousNumber)
            {
                nameNumber = Math.floor(Math.random() * (girlNames.length) + 0);
            }

            previousNumber = nameNumber;

            name = name + girlNames[nameNumber] + ' ';
        }
        if(gender == 1)
        {
            nameNumber = Math.floor(Math.random() * (boyNames.length) + 0);

            while(nameNumber == previousNumber)
            {
                nameNumber = Math.floor(Math.random() * (boyNames.length) + 0);
            }

            previousNumber = nameNumber;

            name = name + boyNames[nameNumber] + ' ';
        }
    }

    let lastNamesNumber = Math.floor(Math.random() * (lastNames.length) + 0)
    name = name + lastNames[lastNamesNumber] + ' ';

    lastNamesNumber = Math.floor(Math.random() * (lastNames.length) + 0)
    name = name + lastNames[lastNamesNumber];

    return name
}

function setKey(name)
{
    let i;
    
    name = name.toUpperCase();
    name = name.split(" ");

    let finalKey = "";

    for(i = 0; i < name.length; i++)
    {
        finalKey = finalKey + name[i].substring(0, 2);
    }

    finalKey = finalKey + Math.floor(Math.random() * (9 - 0 + 1) + 0);
    finalKey = finalKey + Math.floor(Math.random() * (9 - 0 + 1) + 0);
    finalKey = finalKey + Math.floor(Math.random() * (9 - 0 + 1) + 0);
    finalKey = finalKey + Math.floor(Math.random() * (9 - 0 + 1) + 0);

    return finalKey;
}

function addTuple(name = undefined, key = undefined, salary = undefined)
{
    if(name == "")
    {
        name = randomName();
    }
    if(key == "")
    {
        key = setKey(name);
    }
    if(salary == "")
    {
        salary = (Math.floor(Math.random() * (1300 - 10 + 1) + 10)) * 100;
    }

    return {
        name: name,
        key: key,
        salary: salary
    }
}

// Functionality to open the add registration
let buttonAddRegistration = document.getElementsByClassName("addButton");

buttonAddRegistration[0].addEventListener("click", function()
{
    let formAddRegistration = document.getElementsByClassName("divFormAdd");
    let form = formAddRegistration[0];
    let button = buttonAddRegistration[0];
    if(form.style.display == "block")
    {
        form.style.display = "none";
        button.textContent = "Add registration";
        button.style.backgroundColor = "#1b6600";
        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("salary").value = "";
    }
    else
    {
        form.style.display = "block";
        button.textContent = "Cancel";
        button.style.backgroundColor = "#660500";
    }
});

// Functionality to the add registration
let buttonAddForm = document.getElementsByClassName("addButtonForm");

buttonAddForm[0].addEventListener("click", function()
{
    // Styling the page
    let formAddRegistration = document.getElementsByClassName("divFormAdd");
    let form = formAddRegistration[0];
    let button = buttonAddRegistration[0];
    form.style.display = "none";
    button.textContent = "Add registration";
    button.style.backgroundColor = "#1b6600";

    // Getting the info
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = document.getElementById("salary").value;
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";

    let newTuple = addTuple(name, id, salary);
    db.push(newTuple);

    let newNameTable = document.createElement("th");
    newNameTable.innerHTML = newTuple.name;

    let newIDTable = document.createElement("th");
    newIDTable.innerHTML = newTuple.key;

    let newSalaryTable = document.createElement("th");
    newSalaryTable.innerHTML = "$ " + newTuple.salary;

    let newEditTable = document.createElement("th");
    newEditTable.innerHTML = "Edit";
    newEditTable.className = "editButton";

    // Functionality to the update operation
    newEditTable.addEventListener("click", function()
    {
        let keySearching = newEditTable.parentNode.childNodes[1].innerHTML;
        for(let i = 2; i < newEditTable.parentNode.parentNode.childNodes.length; i++)
        {
            // Checking the table row that we're looking for, if it is, we get in this if
            if(newEditTable.parentNode.parentNode.childNodes[i].childNodes[1].innerHTML == keySearching)
            {
                // First click: Editing the information
                if(newEditTable.parentNode.parentNode.childNodes[i].childNodes[3].innerHTML == "Edit")
                {
                    // Changing the edit button
                    let editButton = newEditTable.parentNode.parentNode.childNodes[i].childNodes[3];
                    editButton.style.backgroundColor = "#1b6600";
                    editButton.textContent = "Save";

                    // Editing name
                    let editName = document.createElement("input");
                    editName.value = newEditTable.parentNode.parentNode.childNodes[i].childNodes[0].innerHTML;
                    editName.setAttribute("type", "text");
                    editName.setAttribute("id", "editName");
                    editName.setAttribute("name", "name");
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[0].appendChild(editName);
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[0].innerHTML = "";
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[0].appendChild(editName);

                    // Editing id
                    let editId = document.createElement("input");
                    editId.value = newEditTable.parentNode.parentNode.childNodes[i].childNodes[1].innerHTML;
                    editId.setAttribute("type", "text");
                    editId.setAttribute("id", "editId");
                    editId.setAttribute("name", "id");
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[1].appendChild(editId);
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[1].innerHTML = "";
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[1].appendChild(editId);

                    // Editing salary
                    let editSalary = document.createElement("input");
                    editSalary.value = newEditTable.parentNode.parentNode.childNodes[i].childNodes[2].innerHTML.substr(2);
                    editSalary.setAttribute("type", "text");
                    editSalary.setAttribute("id", "editSalary");
                    editSalary.setAttribute("name", "salary");
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[2].appendChild(editSalary);
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[2].innerHTML = "";
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[2].appendChild(editSalary);
                    break;
                }
                // Second click: Saving the updated information
                else
                {
                    let editButton = newEditTable.parentNode.parentNode.childNodes[i].childNodes[3];
                    editButton.style.backgroundColor = "#202020";
                    editButton.textContent = "Edit";

                    // Saving the info
                    let name = document.getElementById("editName").value;
                    let id = document.getElementById("editId").value;
                    let salary = document.getElementById("editSalary").value;
                    document.getElementById("editName").value = "";
                    document.getElementById("editId").value = "";
                    document.getElementById("editSalary").value = "";

                    let newTuple = addTuple(name, id, salary);

                    db[i - 2].name = newTuple.name;
                    db[i - 2].key = newTuple.key;
                    db[i - 2].salary = newTuple.salary;

                    editName.remove();
                    editId.remove();
                    editSalary.remove();

                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[0].innerHTML = newTuple.name;
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[1].innerHTML = newTuple.key;
                    newEditTable.parentNode.parentNode.childNodes[i].childNodes[2].innerHTML = "$ " + newTuple.salary;
                    break;
                }
            }
        }
    });

    let newRemoveTable = document.createElement("th");
    newRemoveTable.innerHTML = "Remove";
    newRemoveTable.className = "removeButton";
    
    // Functionality to the delete operation
    newRemoveTable.addEventListener("click", function()
    {
        let keySearching = newRemoveTable.parentNode.childNodes[1].innerHTML;
        for(let i = 2; i < newRemoveTable.parentNode.parentNode.childNodes.length; i++)
        {
            // Checking the table row that we're looking for, if it is, we get in this if
            if(newRemoveTable.parentNode.parentNode.childNodes[i].childNodes[1].innerHTML == keySearching)
            {
                let row = newRemoveTable.parentNode.parentNode.childNodes[i];
                row.remove();
                db.splice(i - 2, 1);

                // Showing (if necessary) the empty registers warning
                if(db.length == 0)
                {
                    let noRegistersDiv = document.getElementsByClassName("noRegistersDiv");
                    noRegisters = noRegistersDiv[0];
                    noRegisters.style.display = "block";

                    let divTable = document.getElementsByClassName("divTable");
                    table = divTable[0];
                    table.style.display = "none";
                }
                
                break;
            }
        }
    });

    let newRow = document.createElement("tr");
    newRow.appendChild(newNameTable);
    newRow.appendChild(newIDTable);
    newRow.appendChild(newSalaryTable);
    newRow.appendChild(newEditTable);
    newRow.appendChild(newRemoveTable);

    let getTable = document.getElementsByTagName("table");
    let table = getTable[0];
    table.appendChild(newRow);

    // Hiding the empty registers warning
    if(db.length == 1)
    {
        let noRegistersDiv = document.getElementsByClassName("noRegistersDiv");
        noRegisters = noRegistersDiv[0];
        noRegisters.style.display = "none";

        let divTable = document.getElementsByClassName("divTable");
        table = divTable[0];
        table.style.display = "block";
    }
});