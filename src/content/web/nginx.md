---
title: 'Nginx'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


Cuando el tráfico llega al proxy Nginx, este decripta la información y TLS termina aquí, la comunicación entre el proxy y los servidores se puede mediante HTTP o HTTPS, en cuyo caso Nginx vuelve a encriptar la información. Nginx debe compartir el certificado TLS con el backend o en todo caso tener el suyo propio, que es lo mas habitual para no tener que compartir la clave privada.

En caso de no confiar en el host donde se aloja Nginx se puede hacer ‘passthrough’, es decir que el proxy se limite a redistribuir la información que le llega sin desencriptarla enviando los paquetes a los servidores finales. En este caso, Nginx se comporta como un load balancer de capa 4, por lo que no se puede usar como caché.

Nginx crea un proceso de trabajo hijo por cada núcleo de CPU (dos en el caso de existir hiperthreading). Cuando llega una petición al kernel del sistema, esta se coloca en una cola, donde los procesos de Nginx las toman para procesarlas. Se trata de un modelo pull, por lo que no es el kernel quien envía la información a los procesos sino que son estos lo que van a buscarla.

Para detener nginx se ejecuta el comando nginx -s stop. La flag -s significa signal y sirve para enviarle una señal al proceso.

##### NGINX.CONF
Para usar Nginx como un load balancer de capa 7, en el archivo nginx.conf se crea un servidor, y dentro de el, en la localización /, se establece proxy_pass a un upstream, que debe ser creado incluyendo todas las instancias. 

```
http {
  upstream myproject {
    ip_hash
    server 127.0.0.1:8000;
    server 127.0.0.1:8001;
    server 127.0.0.1:8002;    
    server 127.0.0.1:8003;
  }

  server {
    listen 80;
    server_name www.domain.com;
    location / {
      proxy_pass http://myproject;
    }
  }
}
```

Por defecto se utiliza el algoritmo round robin, esto es, se hace una lista con los servidores y cada petición se envía al siguiente hasta llegar al primero otra vez. También se puede usar otro, indicándolo dentro del bloque upstream, por ejemplo ip_hash, que permite conexiones stateful y sticky sessions.

Para que Nginx actúe como un load balancer de capa 4 se usa la directiva stream en lugar de http. Por tanto, la directiva location no se puede usar aquí, simplemente se usa proxy_pass para enviar las conexiones a los servidores del clúster.

En la directiva location, el segmento se añade a la ruta del path indicado por lo que no se debe escribir dos veces.