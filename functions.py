'''
App tkinter con un label que se actualiza con cada vez que se presiona el botón
import tkinter as tk

class ContadorApp:
    def __init__(self, root):
        self.root = root
        self.contador = 0

        self.label = tk.Label(root, text="Presiona el botón")
        self.label.pack()

        self.boton = tk.Button(root, text="Incrementar", command=self.incrementar_contador)
        self.boton.pack()

    def incrementar_contador(self):
        self.contador += 1
        # Actualizar el texto del label con el nuevo valor del contador
        self.label.configure(text=f"Has presionado {self.contador} veces")

if __name__ == "__main__":
    root = tk.Tk()
    app = ContadorApp(root)
    root.mainloop()
'''

'''
App tkinter que añade un nuevo label cada vez que se presiona el botón
import tkinter as tk

class ContadorApp:
    def __init__(self, root):
        self.root = root
        self.contador = 0
        self.labels = []

        self.boton = tk.Button(root, text="Agregar etiqueta", command=self.agregar_etiqueta)
        self.boton.pack()

    def agregar_etiqueta(self):
        self.contador += 1
        # Crear y mostrar n etiquetas
        label = tk.Label(self.root, text=f"Etiqueta {self.contador}")
        label.pack()
        self.labels.append(label)

if __name__ == "__main__":
    root = tk.Tk()
    app = ContadorApp(root)
    root.mainloop()
'''

'''
App tkinter que elimina un label al presionar un botón
import tkinter as tk

class LabelDisappearingApp:
    def __init__(self, root):
        self.root = root

        self.label = tk.Label(root, text="Hola")
        self.label.pack()

        self.boton = tk.Button(root, text="Desaparecer Label", command=self.ocultar_label)
        self.boton.pack()

    def ocultar_label(self):
        self.label.pack_forget()

if __name__ == "__main__":
    root = tk.Tk()
    app = LabelDisappearingApp(root)
    root.mainloop()
'''

'''
App tkinter que aparece y desaparece intermitentemente un label al presionar un botón
import tkinter as tk

class IntermitentLabelApp:
    def __init__(self, root):
        self.root = root
        self.label_visible = True

        self.label = tk.Label(root, text="Hola")
        self.label.pack()

        self.boton = tk.Button(root, text="Mostrar/Esconder Label", command=self.mostrar_esconder_label)
        self.boton.pack()

    def mostrar_esconder_label(self):
        if self.label_visible:
            self.label.pack_forget()
            self.label_visible = False
        else:
            self.label.pack()
            self.label_visible = True

if __name__ == "__main__":
    root = tk.Tk()
    app = IntermitentLabelApp(root)
    root.mainloop()
'''

'''
App tkinter de una tabla 3x3 con bordes
import tkinter as tk

class GridWithBordersApp:
    def __init__(self, root):
        self.root = root

        # Crear Labels y agregar bordes a cada uno
        for i in range(1, 10):
            label = tk.Label(root, text=str(i), width=10, height=5, relief=tk.RAISED, borderwidth=2)
            label.grid(row=(i-1)//3, column=(i-1)%3)

if __name__ == "__main__":
    root = tk.Tk()
    app = GridWithBordersApp(root)
    root.mainloop()
'''