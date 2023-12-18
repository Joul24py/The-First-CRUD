let db = [];

function randomName()
{
    let name = "";
    let nameNumber;
    let i;

    let girlNames = ['María', 'Andrea', 'Ana', 'Lucía', 'Sofía', 'Martina', 'María', 'Julia', 'Paula', 'Valeria', 'Emma', 'Daniela', 'Carla', 'Alba', 'Noa', 'Alma', 'Sara', 'Carmen', 'Vega', 'Lara', 'Mia', 'Valentina', 'Olivia', 'Claudia', 'Jimena', 'Lola', 'Chloe', 'Aitana', 'Abril', 'Ana', 'Laia', 'Triana', 'Candela', 'Alejandra', 'Elena', 'Vera', 'Manuela', 'Adriana', 'Inés', 'Marta', 'Carlota', 'Irene', 'Victoria', 'Blanca', 'Marina', 'Laura', 'Rocío', 'Alicia', 'Clara', 'Nora', 'Lia', 'Ariadna', 'Zoe', 'Amira', 'Gala', 'Celia', 'Leire', 'Eva', 'Ángela', 'Andrea', 'África', 'Luna', 'Ainhoa', 'Ainara', 'India', 'Nerea', 'Ona', 'Elsa', 'Isabel', 'Leyre', 'Gabriela', 'Aina', 'Cayetana', 'Iria', 'Jana', 'Mar', 'Cloe', 'Lina', 'Julieta', 'Adara', 'Naia', 'Iris', 'Nour', 'Mara', 'Helena', 'Yasmín', 'Natalia', 'Arlet', 'Diana', 'Aroa', 'Amaia', 'Cristina', 'Nahia', 'Isabella', 'Malak', 'Elia', 'Carolina', 'Berta', 'Fátima', 'Nuria', 'Azahara', 'Macarena', 'Aurora'];
    let boyNames = ['Juan', 'Antonio', 'Pedro', 'Hugo', 'Mateo', 'Martín', 'Lucas', 'Leo', 'Daniel', 'Alejandro', 'Manuel', 'Pablo', 'Álleto', 'Adrián', 'Enzo', 'Mario', 'Diego', 'David', 'Oliver', 'Marcos', 'Thiago', 'Marco', 'Álex', 'Javier', 'Izan', 'Bruno', 'Miguel', 'Antonio', 'Gonzalo', 'Liam', 'Gael', 'Marc', 'Carlos', 'Juan', 'Ángel', 'Dylan', 'Nicolás', 'José', 'Sergio', 'Gabriel', 'Luca', 'Jorge', 'Darío', 'Íker', 'Samuel', 'Eric', 'Adam', 'Héctor', 'Francisco', 'Rodrigo', 'Jesús', 'Erik', 'Amir', 'Jaime', 'Ian', 'Rubén', 'Aarón', 'Iván', 'Pau', 'Víctor', 'Guillermo', 'Luis', 'Mohamed', 'Pedro', 'Julen', 'Unai', 'Rafael', 'Santiago', 'Saúl', 'Alberto', 'Noah', 'Aitor', 'Joel', 'Nil', 'Jan', 'Pol', 'Raúl', 'Matías', 'Martí', 'Fernando', 'Andrés', 'Rayan', 'Alonso', 'Ismael', 'Asier', 'Biel', 'Ander', 'Aleix', 'Axel', 'Alan', 'Ignacio', 'Fabio', 'Neizan', 'Jon', 'Teo', 'Isaac', 'Arnau', 'Luka', 'Max', 'Imran', 'Youssef', 'Anas', 'Elías'];
    let lastNames = ['García', 'Alba', 'Esparza', 'Gómez', 'Velázquez', 'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz', 'Gómez', 'Flores', 'Morales', 'Vázquez', 'Jiménez', 'Reyes', 'Díaz', 'Torres', 'Gutiérrez', 'Ruiz', 'Mendoza', 'Aguilar', 'Méndez', 'Moreno', 'Ortíz', 'Juárez', 'Castillo', 'Álletez', 'Romero', 'Ramos', 'Rivera', 'Chávez', 'De la Cruz', 'Domínguez', 'Guzmán', 'Velázquez', 'Santiago', 'Herrera', 'Castro', 'letgas', 'Medina', 'Rojas', 'Muñóz', 'Luna', 'Contreras', 'Bautista', 'Salazar', 'Ortega', 'Guerrero ', 'Estrada'];

    let gender = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    let nameQuantity = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    let previousNumber = -1;

    for(i = 0; i < (nameQuantity + 1); i++)
    {
        if(gender == 0)
        {
            nameNumber = Math.floor(Math.random() * (girlNames.length - 0 + 1) + 0);

            while(nameNumber == previousNumber)
            {
                nameNumber = Math.floor(Math.random() * (girlNames.length - 0 + 1) + 0);
            }

            previousNumber = nameNumber;

            name = name + girlNames[nameNumber] + ' ';
        }
        if(gender == 1)
        {
            nameNumber = Math.floor(Math.random() * (boyNames.length - 0 + 1) + 0);

            while(nameNumber == previousNumber)
            {
                nameNumber = Math.floor(Math.random() * (boyNames.length - 0 + 1) + 0);
            }

            previousNumber = nameNumber;

            name = name + boyNames[nameNumber] + ' ';
        }
    }

    name = name + lastNames[Math.floor(Math.random() * (lastNames.length - 0 + 1) + 0)] + ' ';
    name = name + lastNames[Math.floor(Math.random() * (lastNames.length - 0 + 1) + 0)];

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
    let newRemoveTable = document.createElement("th");

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