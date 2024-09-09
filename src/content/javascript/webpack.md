---
title: 'Webpack'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

Para usar webpack se debe instalar el paquete webpack y webpack-cli. Se crea un script build en el archivo package.json que se corresponde con webpack. Al ejecutar el comando webpack crea una el archivo main.js dentro de una carpeta llamada dist. En el script webpack se debe añadir la flag –mode=development o production. Por defecto, el punto de entrada es src/index.js, aunque se puede cambiar en el archivo d configuración webpack.config.js.

Para cambiar el directorio de output se debe indicar el path, pero no puede ser relativo sino absoluto. Para ello se utiliza el método resolve del objeto nativo de node path y se le pasa la variable __dirname mas la ruta relativa. La variable path es una variable de node que hace referencia a la ruta en donde se encuentra el archivo que la usa. Por lo tanto para cambiar el nombre de la carpeta de output a build se haría de la siguiente manera

```
module.exports = {
    output : {
        path : path.resolve(__dirname, 'build')
    }
}
```

##### LOADERS
Por defecto, webpack no entiende JSX, por lo que para usarlo para empaquetar un aplicación de React es necesario usar un loader, por ejemplo Babel. Se pueden entender los loaders como una máquina por la que pasan los archivos que se especifican. Para configurarlo primero se instalan los paquetes @babel/core, babel-loader y @babel/preset-react y se añade la siguiente propiedad module al archivo de configuración de webpack:

```
module :{
    rules : [
    {
        test : /\.js$/,
        loader :'babel-loader',
        options : {
            presets : ['@babel/preset-react']
        } 
    }
    ]
}
```

Los presets también pueden recibir sus propias configuraciones, para ello, se añade un array dentro del array de presets donde el primer elemento será el preset y el segundo un objeto. Babel permite evitar tener que importar React en todos los archivos que utilicen jsx, mediante la configuración de la propiedad runtime, que debe ser automatic (por defecto es classic, que sí hace necesaria la importación manual). Si el runtime es automatic babel importa React cuando se necesita.

Se puede usar webpack para cargar el css en vez de tener que enlazarlo dentro del html, directamente desde el archivo del componente de react usando ‘import ./styles.css’. Para ello se deben usar dos loaders, el primero es style-loader y el segundo es css-loader. Style loader sirve para que webpack entienda la importación del archivo css en el archivo js o jsx. Css-loader, por su parte, sirve para poder usar la función url dentro de css para acceder a archivos estáticos, por ejemplo colocar una imagen de background.

Rule.loader es un atajo a Rule.use: [ {loader} ].

##### PLUGINS
Los plugins sirven para añadirle funcionalidad a webpack y se especifican dentro del archivo de configuración como un array. Un ejemplo sería que se cree el archivo index.html de manera automática en vez de tener que añadirlo manualmente a la carpeta build. El plugin se llama html-webpack-plugin y su constructor recibe como argumento el archivo que se quiere crear, en este caso index.html:

```
plugins :[
    new HtmlWebpackPlugin({ template : 'src/index.html'})
]      
```

Al generar el archivo se añade automáticamente el script por lo que no es necesario incluirlo en el archivo html de plantilla

Webpack permite crear un entorno de desarrollo mediante el script webpack serve –mode=development. Esto ofrece recompilación automática al hacer cambios y una url en la que poder acceder a la aplicación. El servidor se puede configurar en el archivo webpack.config mediante la propiedad devServer. Otra propiedad interesante es devTools, para definir un sourcemap, esto un mapa que indica que parte del código de la build se corresponde con el código original, muy útil para depurar errores, aunque requiere de mucha capacidad de computación y ralentiza el empaquetamiento.