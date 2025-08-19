---
layout: default
title: Guía de Atmosphere
---

<section id="introduccion">
## Introducción
Esta guía te enseñará a instalar **Atmosphere**, el custom firmware (CFW) más popular para Nintendo Switch. Sigue los pasos cuidadosamente según el modelo de tu consola.

**⚠️ Aviso:** La modificación de tu consola puede anular la garantía. Procede bajo tu propio riesgo y siempre utiliza fuentes oficiales.
</section>

<section id="rcm">
## Consolas RCM (no parcheadas)
Este método es para consolas que son vulnerables a la falla de hardware RCM.
<ol>
    <li>Descarga los archivos necesarios:
        <ul>
            <li><a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank">Atmosphere</a></li>
            <li><a href="https://github.com/CTCaer/hekate/releases" target="_blank">Hekate</a></li>
            <li><a href="https://github.com/borntohonk/payloads/releases" target="_blank">Fusee</a></li>
        </ul>
    </li>
    <li>Prepara la tarjeta microSD: Formatea tu tarjeta a **FAT32** y copia los archivos a la raíz.</li>
    <li>Entra en modo RCM e inyecta el payload: Con el jig y TegraRcmGUI, inyecta el archivo `.bin` de Hekate.</li>
    <li>Finaliza la instalación: Sigue las instrucciones en pantalla para cargar Atmosphere.</li>
</ol>
</section>

<section id="modchip">
## Consolas con Modchip
Si tu consola ya tiene un chip de hardware instalado, el proceso es más simple.
<ol>
    <li>Descarga y copia los archivos: Descarga los archivos de **Atmosphere** y **Hekate** y cópialos a la raíz de tu tarjeta microSD.</li>
    <li>Enciende la consola: El modchip se encargará de cargar Hekate o Atmosphere automáticamente.</li>
</ol>
</section>

<section id="solucion-problemas">
## Solución de Problemas
Si algo sale mal, aquí hay algunas soluciones:
<ul>
    <li>**La PC no detecta la Switch:** Asegúrate de tener los drivers correctos.</li>
    <li>**Pantalla negra:** Verifica que estás en modo RCM y que el payload es compatible.</li>
    <li>**Errores de archivos:** Vuelve a descargar los archivos.</li>
</ul>
</section>
