import random
from unidecode import unidecode

def initializeDB():
    return []

def randomName():
    name = ''
    girlNames = ['María', 'Andrea', 'Ana', 'Lucía', 'Sofía', 'Martina', 'María', 'Julia', 'Paula', 'Valeria', 'Emma', 'Daniela', 'Carla', 'Alba', 'Noa', 'Alma', 'Sara', 'Carmen', 'Vega', 'Lara', 'Mia', 'Valentina', 'Olivia', 'Claudia', 'Jimena', 'Lola', 'Chloe', 'Aitana', 'Abril', 'Ana', 'Laia', 'Triana', 'Candela', 'Alejandra', 'Elena', 'Vera', 'Manuela', 'Adriana', 'Inés', 'Marta', 'Carlota', 'Irene', 'Victoria', 'Blanca', 'Marina', 'Laura', 'Rocío', 'Alicia', 'Clara', 'Nora', 'Lia', 'Ariadna', 'Zoe', 'Amira', 'Gala', 'Celia', 'Leire', 'Eva', 'Ángela', 'Andrea', 'África', 'Luna', 'Ainhoa', 'Ainara', 'India', 'Nerea', 'Ona', 'Elsa', 'Isabel', 'Leyre', 'Gabriela', 'Aina', 'Cayetana', 'Iria', 'Jana', 'Mar', 'Cloe', 'Lina', 'Julieta', 'Adara', 'Naia', 'Iris', 'Nour', 'Mara', 'Helena', 'Yasmín', 'Natalia', 'Arlet', 'Diana', 'Aroa', 'Amaia', 'Cristina', 'Nahia', 'Isabella', 'Malak', 'Elia', 'Carolina', 'Berta', 'Fátima', 'Nuria', 'Azahara', 'Macarena', 'Aurora']
    boyNames = ['Juan', 'Antonio', 'Pedro', 'Hugo', 'Mateo', 'Martín', 'Lucas', 'Leo', 'Daniel', 'Alejandro', 'Manuel', 'Pablo', 'Álvaro', 'Adrián', 'Enzo', 'Mario', 'Diego', 'David', 'Oliver', 'Marcos', 'Thiago', 'Marco', 'Álex', 'Javier', 'Izan', 'Bruno', 'Miguel', 'Antonio', 'Gonzalo', 'Liam', 'Gael', 'Marc', 'Carlos', 'Juan', 'Ángel', 'Dylan', 'Nicolás', 'José', 'Sergio', 'Gabriel', 'Luca', 'Jorge', 'Darío', 'Íker', 'Samuel', 'Eric', 'Adam', 'Héctor', 'Francisco', 'Rodrigo', 'Jesús', 'Erik', 'Amir', 'Jaime', 'Ian', 'Rubén', 'Aarón', 'Iván', 'Pau', 'Víctor', 'Guillermo', 'Luis', 'Mohamed', 'Pedro', 'Julen', 'Unai', 'Rafael', 'Santiago', 'Saúl', 'Alberto', 'Noah', 'Aitor', 'Joel', 'Nil', 'Jan', 'Pol', 'Raúl', 'Matías', 'Martí', 'Fernando', 'Andrés', 'Rayan', 'Alonso', 'Ismael', 'Asier', 'Biel', 'Ander', 'Aleix', 'Axel', 'Alan', 'Ignacio', 'Fabio', 'Neizan', 'Jon', 'Teo', 'Isaac', 'Arnau', 'Luka', 'Max', 'Imran', 'Youssef', 'Anas', 'Elías']
    lastNames = ['García', 'Alba', 'Esparza', 'Gómez', 'Velázquez', 'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz', 'Gómez', 'Flores', 'Morales', 'Vázquez', 'Jiménez', 'Reyes', 'Díaz', 'Torres', 'Gutiérrez', 'Ruiz', 'Mendoza', 'Aguilar', 'Méndez', 'Moreno', 'Ortíz', 'Juárez', 'Castillo', 'Álvarez', 'Romero', 'Ramos', 'Rivera', 'Chávez', 'De la Cruz', 'Domínguez', 'Guzmán', 'Velázquez', 'Santiago', 'Herrera', 'Castro', 'Vargas', 'Medina', 'Rojas', 'Muñóz', 'Luna', 'Contreras', 'Bautista', 'Salazar', 'Ortega', 'Guerrero ', 'Estrada']
    
    gender = random.randint(0, 1)
    nameQuantity = random.randint(0, 1)
    
    previousNumber = -1
    for i in range(nameQuantity + 1):
        if gender == 0:
            nameNumber = random.randint(0, len(girlNames) - 1)
            while nameNumber == previousNumber:
                nameNumber = random.randint(0, len(girlNames) - 1)
            previousNumber = nameNumber
            name = name + girlNames[nameNumber] + ' '
        if gender == 1:
            nameNumber = random.randint(0, len(boyNames) - 1)
            while nameNumber == previousNumber:
                nameNumber = random.randint(0, len(boyNames) - 1)
            previousNumber = nameNumber
            name = name + boyNames[nameNumber] + ' '
    name = name + lastNames[random.randint(0, len(lastNames) - 1)] + ' '
    name = name + lastNames[random.randint(0, len(lastNames) - 1)]
    
    return name

def setKey(name):
    name = unidecode(name)
    listName = name.upper().split()
    finalKey = ''
    for i in range(len(listName)):
        finalKey = finalKey + listName[i][0:2]
    finalKey = finalKey + str(random.randint(0, 9))
    finalKey = finalKey + str(random.randint(0, 9))
    finalKey = finalKey + str(random.randint(0, 9))
    finalKey = finalKey + str(random.randint(0, 9))
    return finalKey

def addTuple(name = None, key = None, salary = None):
    if name == None:
        name = randomName()
    if key == None:
        key = setKey(name)
    if salary == None:
        salary = random.randint(10, 80) * 100
    return [name, key, salary]

    




import tkinter as tk
from tkinter import font

def openFrameAdd():
    appAdd = tk.Tk()
    appAdd.geometry("480x360")
    
    frameAdd = tk.Frame(appAdd, width=480, height=360)
    
    entry1 = tk.Entry(appAdd)
    entry2 = tk.Entry(appAdd)
    entry3 = tk.Entry(appAdd)
    
    # Etiquetas para los campos de entrada
    label1 = tk.Label(appAdd, text="Campo 1:")
    label2 = tk.Label(appAdd, text="Campo 2:")
    label3 = tk.Label(appAdd, text="Campo 3:")
    
    label1.grid(row=0, column=0, padx=20, pady=10)
    entry1.grid(row=0, column=1, padx=20, pady=10)
    label2.grid(row=1, column=0, padx=20, pady=10)
    entry2.grid(row=1, column=1, padx=20, pady=10)
    label3.grid(row=2, column=0, padx=20, pady=10)
    entry3.grid(row=2, column=1, padx=20, pady=10)
    
    def acceptAddEntry():
        if entry1.get() == '':
            value1 = None
        else:
            value1 = entry1.get()
        
        if entry2.get() == '':
            value2 = None
        else:
            value2 = entry2.get()
        
        if entry3.get() == '':
            value3 = None
        else:
            value3 = entry3.get()
        
        newTuple = addTuple(value1, value2, value3)
        db.append(newTuple)
        print(db)
        label.pack_forget()
        appAdd.destroy()
    
    acceptButton = tk.Button(appAdd, text="Aceptar", command=acceptAddEntry)
    acceptButton.grid(row = 3, column = 1, padx = 20, pady = 30)
    
    frameAdd.pack()

app = tk.Tk()
app.geometry("640x480")

title_font = font.Font(family="Arial", size=18)
label = tk.Label(app, text="UAA-ICI-S1-LC1-FinalProject", font = title_font)
label.pack(pady=20, padx=20)

db = []

if(len(db) == 0):
    warning_font = font.Font(family="Arial", size=14)
    label = tk.Label(app, text="No registers found", font = warning_font)
    label.pack(pady=50, padx=20)
else:
    # Aquí va el output de la tabla
    frame_grid = tk.Frame(app)
    frame_grid.pack(side="right", padx=10)
    
    # Crear etiquetas en el Frame anidado con grid
    textTable1 = tk.Label(frame_grid, text="Nombre")
    textTable2 = tk.Label(frame_grid, text="Clave")
    textTable3 = tk.Label(frame_grid, text="Salario")
    
    textTable1.grid(row=0, column=0, padx=10, pady=10)
    textTable2.grid(row=0, column=1, padx=10, pady=10)
    textTable3.grid(row=0, column=2, padx=10, pady=10)
    
    warning_font = font.Font(family="Arial", size=14)
    label = tk.Label(app, text="No registers found", font = warning_font)
    label.pack(pady=50, padx=20)

add_button = tk.Button(app, text="Añadir registro", command=openFrameAdd)
add_button.pack(pady = 10, padx = 10)
    

app.mainloop()