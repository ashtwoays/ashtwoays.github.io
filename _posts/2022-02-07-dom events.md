---
date: 2022-02-08
layout: post
title: "DOM - Events"
subtitle: Pembahasan DOM Events
description:
image: /assets/img/javascript.jpg
optimized_image: /assets/img/javascript.jpg
category: javascript
tags:
  - javascript
author: aditia
paginate: false
---

Setelah mempelajari selection dan manipulation, pada pembahasan ini akan materi sambungan yaitu DOM Events. Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM, kejadian tersebut bisa dilakukan atau ditentukan oleh user seperti Mouse Event, Keyboard Event dan lain lain.

Ada 3 cara untuk menggunakan event yaitu:

## Inline HTML Attribute

inline HTML attribute yaitu memberikan event handler di dalam element html seperti berikut:

```HTML
   <button class="button" onclick="clickme()">Click Me!</button>
```

Pada contoh script diatas, saya menambahkan event handler onclick pada element button

## Element Method

Element Method memberikan event handler pada sebuah element HTML namun event tersebut di deklarasikan didalam javascript, seperti berikut:

```HTML
  <button class="button" id="button">Click Me!</button>

  <script>
    const button = document.getElementById('button');
    button.onclick = contoh;
    function contoh(){}
  </script>
```

Pada contoh diatas saya memilih element button dan memberikan event handler onclick kemudian jalankan function contoh.

## addEventListener()

addEventListener hampir sama penggunaanya seperti element method, yang membedakan hanya pada addEventListener bisa langsung menggunakan anonymous function. contoh:

```HTML
  <button class="button" id="button">Click Me!</button>

  <script>
    const button = document.getElementById('button');
    button.addEventListener('click',function(){
      alert('ok');
    })
  </script>
```

pada contoh diatas saya memberikan event click pada button dan jalankan function untuk menampilkan alert.
