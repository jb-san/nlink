# nlink
manage npm links

## Create and manage npm links on your local machine to speedup library developments
One of the painpoints that you might run into while developing a library that is needed in a application that you are working on, is how would you test the library in the application at the same time as you are activly developing it ?


you have 2 options
- file
in your package.json you could specify the dependencie as `"file:../...."` and give it a relative path to your library.
the downside of this is, when you run `npm install` it makes a copy of the library to the applications node_modules, so when you are updating the library you would have to delete the directory in node_modules and run `npm install` again __no good__

- npm link
its a 2 step process:
 1. in the library root folder, you run npm link, this creates a symlink in your global node_modules folder
 2. in the application you run npm link myLibrary, which creates a symlink to the global node_modules symlink
 
but how do i know which libraries that i have linked in the global node_modules folder ?
and how do i know which of the currently installed packages in my application are npm linked ?

**enter nlink**

## Installation
`npm i -g nlink`

## Usage
to link a library into an application
```
# in your application root folder
nlink <relative path to your library> .
```
to list all linked modules in current application
```
# in your application root folder
nlink
```
to list all globaly linked modules
```
nlink -a
```

to delete a symlink from the application
```
nlink -d package-name
```

to delete a global symlink
```
nlink -D package-name
# note that this will look in the current directory, and if its an application root dir, it will try to remove the symlink in the applications node_module aswell, if found
```
