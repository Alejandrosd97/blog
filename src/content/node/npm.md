---
title: 'NPM y NPX'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


##### NPM Y NPX
Npx permite ejecutar código creado con Node.js y publicado a través del registro npm, sin necesidad de instalar el paquete. Esto es particularmente útil para probar nuevas herramientas, ejecutar comandos únicos o usar paquetes en entornos compartidos donde las instalaciones globales no son deseables. Npx se encarga de descargar el paquete sobre la marcha, ejecutar el comando deseado y luego limpiar la instalación temporal. Esto mantiene las dependencias de los proyectos optimizadas y evita conflictos de versiones.

Al registrarse y obtener una cuenta de usuario de npm o crear una organización, se otorga un alcance (scope) que coincide con el nombre de usuario u organización. Un alcance permite crear un paquete con el mismo nombre que un paquete creado por otro usuario u organización sin conflicto.

Cuando se enumeran como dependientes en un archivo package.json, los paquetes con alcance están precedidos por su nombre de ámbito. El nombre del alcance es todo lo que está entre @ y la barra diagonal. Cualquiera puede descargar e instalar paquetes públicos con ámbito, siempre que se haga referencia al nombre del ámbito durante la instalación:

```
npm install @scope/package-name
```

El control de versiones semántico, a menudo abreviado como SemVer, es un esquema de control de versiones diseñado para transmitir significado sobre los cambios subyacentes en una versión.  Utiliza un número de versión de tres partes: MAJOR.MINOR.PATCH. Una versión de parche incluye correcciones de errores menores que no afectan la funcionalidad o API del software. Una versión menor incluye nuevas características o mejoras que son compatibles con versiones anteriores. Una versión principal incluye cambios que rompen la compatibilidad con versiones anteriores.

El comando npm outdated sirve para listar aquellos paquetes que tienen una versión mas moderna disponible y que por lo tanto son susceptibles de ser actualizados. Para actualizarlas todas de una sola vez se puede instalar de manera global el paquete node-check-updates y ñuego ejecutar el comando ncu -u. Esto actualizará el archivo package.json para luego ejecutar npm install.

Los workspaces ayudan a administrar repositorios con múltiples paquetes, más de un archivo package.json. En proyectos como este, normalmente existe un árbol de dependencias complejo, con muchos paquetes dependiendo unos de otros. Este tipo especial de repositorio se conoce como monorepo. El enfoque monorepo utiliza un único repositorio para alojar todo el código de las múltiples bibliotecas o servicios que componen los proyectos de una empresa. Ahora, el ejecutar npm install en un repositorio de múltiples paquetes, el administrador del árbol de dependencias de npm es lo suficientemente inteligente como para escanear las carpetas en busca de todas las dependencias para instalar. Las dependencias se instalan en la carpeta node_modules del directorio raíz, de manera que las bibliotecas pueden ser reutilizadas en varios paquetes.