---
title: 'NPM y NPX'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
id : 2
---


##### NPM 
Es el gestor de paquetes de javascript y viene por defecto cuando se instala Node. Cada aplicación tiene un archivo package.json. Este archivo se crea con el comando npm init y contiene toda la información relevante sobre la aplicación, por ejemplo las librerías que necesita la app para funcionar y sus versiones o los scripts de NPM. El motivo de listar las dependencias radica en que la carpeta node_modules no se añade a los repositorios de git, por lo que al clonar el código es necesario instalar todas las dependencias de nuevo. Antes de npm versión 5.0.0, cuando se instalaba un paquete con el comando 'npm install [paquete]' era importante añadir la flag --save para que se añadiera al apartado dependencies del archivo package.json, pero en versiones modernas no es necesario. Una opción interesante es la opción --save-dev para paquetes usados en desarrollo pero en producción, por ejemplo nodemon. Para instalar solo las dependencias de producción pero no las de desarrollo se usa la flag --production en el comando npm install. Si no se indica lo contrario, npm instala la última versión disponible del paquete, pero se puede instalar una versión en concreto colocando @ entre el nombre del paquete y la versión, por ejemplo npm install lodash@4.17.3. Las versiones tienen tres numeros y siguen el esquema MAJOR.MINOR.PATCH. Una versión de parche incluye correcciones de errores menores que no afectan la funcionalidad o API del software. Una versión menor incluye nuevas características o mejoras que son compatibles con versiones anteriores. Una versión principal incluye cambios que rompen la compatibilidad con versiones anteriores. En el archivo package.json, el símbolo ^ indica que al instalar el módulo, se instale la última versión menor, pero manteniendo la versión mayor. El símbolo ~ indica sirve para mantener al versión menor e instalar solo la última versión de parche.

##### NPX
Npx permite ejecutar código creado con NodeJS y publicado a través del registro npm, sin necesidad de instalar el paquete. Esto es particularmente útil para probar nuevas herramientas, ejecutar comandos únicos o usar paquetes en entornos compartidos donde las instalaciones globales no son deseables. Npx se encarga de descargar el paquete sobre la marcha, ejecutar el comando deseado y luego limpiar la instalación temporal. Esto mantiene las dependencias de los proyectos optimizadas y evita conflictos de versiones.

Al registrarse y obtener una cuenta de usuario de npm o crear una organización, se otorga un alcance (scope) que coincide con el nombre de usuario u organización. Un alcance permite crear un paquete con el mismo nombre que un paquete creado por otro usuario u organización sin conflicto.

Cuando se enumeran como dependientes en un archivo package.json, los paquetes con alcance están precedidos por su nombre de ámbito (scope). El nombre del alcance es todo lo que está entre @ y la barra diagonal. Cualquiera puede descargar e instalar paquetes públicos con ámbito, siempre que se haga referencia al nombre del ámbito durante la instalación:

```
npm install @scope/package-name
```

El comando npm outdated sirve para listar aquellos paquetes que tienen una versión mas moderna disponible y que por lo tanto son susceptibles de ser actualizados. Para actualizarlas todas de una sola vez se puede instalar de manera global el paquete node-check-updates y luego ejecutar el comando ncu -u. Esto actualizará el archivo package.json para luego ejecutar npm install.

Los workspaces ayudan a administrar repositorios con múltiples paquetes, más de un archivo package.json. En ocasiones, existe un árbol de dependencias complejo, con muchos paquetes dependiendo unos de otros. Este tipo especial de repositorio se conoce como monorepo. El enfoque monorepo utiliza un único repositorio para alojar todo el código de las múltiples bibliotecas o servicios que componen los proyectos de una empresa. Ahora, al ejecutar npm install en un repositorio de múltiples paquetes, el administrador del árbol de dependencias de npm es lo suficientemente inteligente como para escanear las carpetas en busca de todas las dependencias para instalar. Las dependencias se instalan en la carpeta node_modules del directorio raíz, de manera que las bibliotecas pueden ser reutilizadas en varios paquetes.