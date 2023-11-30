#%% The project logic (no GUI)
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
        salary = random.randint(10, 1300) * 100
    return [name, key, salary]

#%% The project GUI
import tkinter as tk
from tkinter import font

app = tk.Tk()
app.geometry("640x480")
app.title("UAA-ICI-S1-LC1-FinalProject Op.2")
app.configure(bg = '#292929')

title_font = font.Font(family = "Arial", size = 18)
title_label = tk.Label(app, text = "The First CRUD", font = title_font, bg = '#292929', fg = '#FFFFFF')
title_label.pack(pady=20, padx=20)

tableFrame = tk.Frame(app, bg = '#292929', padx = 30, pady = 30)

# Opens new frame to add user information
def openFrameAdd():
    appAdd = tk.Tk()
    appAdd.geometry("480x360")
    appAdd.title("Add new user")
    appAdd.configure(bg = '#292929')
    
    frameAdd = tk.Frame(appAdd, bg = '#292929', padx = 20, pady = 40)
    
    entry1 = tk.Entry(frameAdd)
    entry2 = tk.Entry(frameAdd)
    entry3 = tk.Entry(frameAdd)
    
    # Etiquetas para los campos de entrada
    label1 = tk.Label(frameAdd, text="Nombre completo del usuario:", bg = '#292929', fg = '#FFFFFF')
    label2 = tk.Label(frameAdd, text="Clave del usuario:", bg = '#292929', fg = '#FFFFFF')
    label3 = tk.Label(frameAdd, text="Salario del usuario:", bg = '#292929', fg = '#FFFFFF')
    
    label1.grid(row=0, column=0, padx=20, pady=10)
    entry1.grid(row=0, column=1, padx=20, pady=10)
    label2.grid(row=1, column=0, padx=20, pady=10)
    entry2.grid(row=1, column=1, padx=20, pady=10)
    label3.grid(row=2, column=0, padx=20, pady=10)
    entry3.grid(row=2, column=1, padx=20, pady=10)
    
    frameAdd.pack()
    
    # Appends the information to the db list and shows it in the main frame
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
        print(len(db))
        dbEmptyLabel.pack_forget()
        if(len(db) == 1):
            tableTitle1 = tk.Label(tableFrame, text="Nombre", bg = '#292929', fg = '#FFFFFF', width = 30, height = 2, relief=tk.RAISED, borderwidth=2)
            tableTitle2 = tk.Label(tableFrame, text="Clave", bg = '#292929', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
            tableTitle3 = tk.Label(tableFrame, text="Salario", bg = '#292929', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
            tableTitle4 = tk.Label(tableFrame, text="", bg = '#292929', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
            tableTitle5 = tk.Label(tableFrame, text="", bg = '#292929', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
            
            tableTitle1.grid(row = 0, column = 0)
            tableTitle2.grid(row = 0, column = 1)
            tableTitle3.grid(row = 0, column = 2)
            tableTitle4.grid(row = 0, column = 3)
            tableTitle5.grid(row = 0, column = 4)
        
        tableContent1 = tk.Label(tableFrame, text=newTuple[0], bg = '#292929', fg = '#FFFFFF', width = 30, height = 2, relief=tk.RAISED, borderwidth=2)
        tableContent2 = tk.Label(tableFrame, text=newTuple[1], bg = '#292929', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
        tableContent3 = tk.Label(tableFrame, text=newTuple[2], bg = '#292929', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
        tableContent4 = tk.Label(tableFrame, text="Editar", bg = '#202020', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
        tableContent5 = tk.Label(tableFrame, text="Eliminar", bg = '#FF0000', fg = '#FFFFFF', width = 20, height = 2, relief=tk.RAISED, borderwidth=2)
        
        tableContent1.grid(row = len(db), column = 0)
        tableContent2.grid(row = len(db), column = 1)
        tableContent3.grid(row = len(db), column = 2)
        tableContent4.grid(row = len(db), column = 3)
        tableContent5.grid(row = len(db), column = 4)
        
        tableFrame.pack()
        
        appAdd.destroy()
    
    acceptButton = tk.Button(appAdd, text="Aceptar", bg = '#1b6600', fg = '#FFFFFF', command=acceptAddEntry)
    acceptButton.pack(padx = 20, pady = 30)

db = []

add_button = tk.Button(app, text="Añadir registro", bg = "#1b6600", fg = "#FFFFFF", command=openFrameAdd)
add_button.pack(pady = 10, padx = 10)

warning_font = font.Font(family="Arial", size=14)
dbEmptyLabel = tk.Label(app, text="No registers found", bg = '#292929', fg = '#FFFFFF', font = warning_font)
dbEmptyLabel.pack(pady=50, padx=20)
    

app.mainloop()