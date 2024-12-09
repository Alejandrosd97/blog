---
title: 'Kubernetes'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


La diferencia entre contenedores y máquinas virtuales es que los contenedores comparten el mismo kernel. Docker puede hacer correr cualquier sistema operativo en sus contenedores siempre y cuando este comparta el mismo kernel que el sistema operativo principal, por ejemplo se puede usar una imagen de centOs en un sistema que use Ubuntu pero no una de Windows. Un sistema operativo se compone de dos partes, el kernel, y sofatware especifico. Las distribuciones  de Linux comparten el kernel y se diferencian en el software que traen incorporado, por tanto, el contenedor usa el kernel del sistema y simplemente añade el software especifico de esa distribucion. Las máquinas virtuales, al tener varios os funcionando al mismo tiempo consumen mas recursos y arrancan mas lento que los contenedores, que suelen iniciarse en segundos

##### MINIKUBE
Para usar Kubernetes con Docker en Linux, se debe instalar Minikube, que es una herramienta que permite crear un cluster de Kubernetes de manera local. Técnicamente, es una distribución de Kubernetes, pero como aborda un tipo de caso de uso diferente al de la mayoría de las otras distribuciones (como Rancher, OpenShift y EKS), es más común escuchar a la gente referirse a ella como una herramienta en lugar de una distribución. Minikube funciona configurando un clúster de Kubernetes en una máquina local. De forma predeterminada, crea un clúster de un nodo, pero es posible crear un clúster de varios nodos con un entorno de Minikube si lo deseas.