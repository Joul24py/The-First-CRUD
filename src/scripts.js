var db = [];

function randomName()
{
    var name = "";
    var nameNumber;
    var i;

    var girlNames = ['María', 'Andrea', 'Ana', 'Lucía', 'Sofía', 'Martina', 'María', 'Julia', 'Paula', 'Valeria', 'Emma', 'Daniela', 'Carla', 'Alba', 'Noa', 'Alma', 'Sara', 'Carmen', 'Vega', 'Lara', 'Mia', 'Valentina', 'Olivia', 'Claudia', 'Jimena', 'Lola', 'Chloe', 'Aitana', 'Abril', 'Ana', 'Laia', 'Triana', 'Candela', 'Alejandra', 'Elena', 'Vera', 'Manuela', 'Adriana', 'Inés', 'Marta', 'Carlota', 'Irene', 'Victoria', 'Blanca', 'Marina', 'Laura', 'Rocío', 'Alicia', 'Clara', 'Nora', 'Lia', 'Ariadna', 'Zoe', 'Amira', 'Gala', 'Celia', 'Leire', 'Eva', 'Ángela', 'Andrea', 'África', 'Luna', 'Ainhoa', 'Ainara', 'India', 'Nerea', 'Ona', 'Elsa', 'Isabel', 'Leyre', 'Gabriela', 'Aina', 'Cayetana', 'Iria', 'Jana', 'Mar', 'Cloe', 'Lina', 'Julieta', 'Adara', 'Naia', 'Iris', 'Nour', 'Mara', 'Helena', 'Yasmín', 'Natalia', 'Arlet', 'Diana', 'Aroa', 'Amaia', 'Cristina', 'Nahia', 'Isabella', 'Malak', 'Elia', 'Carolina', 'Berta', 'Fátima', 'Nuria', 'Azahara', 'Macarena', 'Aurora'];
    var boyNames = ['Juan', 'Antonio', 'Pedro', 'Hugo', 'Mateo', 'Martín', 'Lucas', 'Leo', 'Daniel', 'Alejandro', 'Manuel', 'Pablo', 'Álvaro', 'Adrián', 'Enzo', 'Mario', 'Diego', 'David', 'Oliver', 'Marcos', 'Thiago', 'Marco', 'Álex', 'Javier', 'Izan', 'Bruno', 'Miguel', 'Antonio', 'Gonzalo', 'Liam', 'Gael', 'Marc', 'Carlos', 'Juan', 'Ángel', 'Dylan', 'Nicolás', 'José', 'Sergio', 'Gabriel', 'Luca', 'Jorge', 'Darío', 'Íker', 'Samuel', 'Eric', 'Adam', 'Héctor', 'Francisco', 'Rodrigo', 'Jesús', 'Erik', 'Amir', 'Jaime', 'Ian', 'Rubén', 'Aarón', 'Iván', 'Pau', 'Víctor', 'Guillermo', 'Luis', 'Mohamed', 'Pedro', 'Julen', 'Unai', 'Rafael', 'Santiago', 'Saúl', 'Alberto', 'Noah', 'Aitor', 'Joel', 'Nil', 'Jan', 'Pol', 'Raúl', 'Matías', 'Martí', 'Fernando', 'Andrés', 'Rayan', 'Alonso', 'Ismael', 'Asier', 'Biel', 'Ander', 'Aleix', 'Axel', 'Alan', 'Ignacio', 'Fabio', 'Neizan', 'Jon', 'Teo', 'Isaac', 'Arnau', 'Luka', 'Max', 'Imran', 'Youssef', 'Anas', 'Elías'];
    var lastNames = ['García', 'Alba', 'Esparza', 'Gómez', 'Velázquez', 'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz', 'Gómez', 'Flores', 'Morales', 'Vázquez', 'Jiménez', 'Reyes', 'Díaz', 'Torres', 'Gutiérrez', 'Ruiz', 'Mendoza', 'Aguilar', 'Méndez', 'Moreno', 'Ortíz', 'Juárez', 'Castillo', 'Álvarez', 'Romero', 'Ramos', 'Rivera', 'Chávez', 'De la Cruz', 'Domínguez', 'Guzmán', 'Velázquez', 'Santiago', 'Herrera', 'Castro', 'Vargas', 'Medina', 'Rojas', 'Muñóz', 'Luna', 'Contreras', 'Bautista', 'Salazar', 'Ortega', 'Guerrero ', 'Estrada'];

    var gender = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    var nameQuantity = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    var previousNumber = -1;

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
    var i;
    
    name = name.toUpperCase();
    name = name.split(" ");

    var finalKey = "";

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
    if(name == undefined)
    {
        name = randomName();
    }
    if(key == undefined)
    {
        key = setKey(name);
    }
    if(salary == undefined)
    {
        salary = (Math.floor(Math.random() * (1300 - 10 + 1) + 10)) * 100;
    }

    return {
        name: name,
        key: key,
        salary: salary
    }
}

// Functionality to the add registration
var buttonAddRegistration = document.getElementsByClassName("addButton");

buttonAddRegistration[0].addEventListener("click", function()
{
    var formAddRegistration = document.getElementsByClassName("divFormAdd");
    var form = formAddRegistration[0];
    form.style.display = "block"
});