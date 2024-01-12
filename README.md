# The-First-CRUD

**The First CRUD** is a rework project of the [UAA-ICI-S1-LC1-FinalProject](https://github.com/Joul24py/UAA-ICI/tree/main/03-S1-LC1-FinalProject) that was developed by the time I was studying my Bachelor's degree.

The project consisted in:

1. Create an array with 10 registrations that contain an integer worker key with 4 positions.
2. Create an array with 10 registrations that contain the worker name in a string variable separated as Name, Last Name (Father) and Last Name (Mother).
3. Create an array with 10 registrations that contain an integer salary worker.
4. These arrays should be generated randomly.

Once the previous requirements were done, the program has to present the user a menu with the following options:

1. Show all users with all fields.
2. Search for a user giving as a parameter the worker name or the worker key.
3. Sort alphabetically by key, name or salary (optional).
4. Add new users.
5. Delete a user giving as a parameter the worker name or the worker key.
6. Update the key, name or salary of a worker.

Taking as a reference this project is how The First CRUD reworks it with new additions and some personal modifications trying to develop the project with "graphic interface" using mostly frontend web technologies (after doing tests with Python and its GUI libraries).

This program lets the user do the four CRUD operations starting with the main window of the program.

![](/img/01.png)

This project is fully responsive, however it's desktop-first based as I planned to export it as desktop application with Electron since the beginning of this project.

## The CRUD Operations

### Create

![](/img/02.png)

For creating a new user, the "Add registration" button will open a form with three inputs:

- Name of the registration.
- ID of the registration.
- Salary of the registration.

When the user is ready, an "Add" button will appear with the previous form so when click, this registration will be added to the "local database" (which is purely stored in RAM so it's not persistent).

The "Add registration" changes to "Cancel" if the user decides to not add a new registration.

### Read

When there's no registrations, a text will appear saying "No registers found". If there is at least one registration, this text will disappear and the table with the registrations will be visible.

![](/img/03.png)

### Update

An edit button will be added to every registration in order to click in the edit button corresponding to the registration the user wants to update.

This will change the text into inputs and the "Edit" button into a "Save" button when the text is ready to be saved

![](/img/04.png)

### Delete

A remove button will be added to every registration in order to click in the remove button corresponding to the registration the user wants to delete.

## The database variable

The program shows with the table the registrations saved but also this data is stored in a JavaScript variable named ```db```.

![](/img/05.png)

## Random user generation

When leaving blank inputs, the program will generate randomly that value, having the possibility to create random names (given to the program hard-coded in the JavaScript file), cut the names to create the IDs and random salary values.

## Web and desktop application

This program was developed using web frontend technologies so there's a way of using it as HTML page.

![](/img/06.png)

Also, there's an Electron compiled version to use it as a desktop application.

![](/img/07.png)