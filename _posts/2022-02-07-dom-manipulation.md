---
date: 2022-02-07 09:16:43
layout: post
title: "DOM - Manipulation"
subtitle: Pembahasan DOM Manipulation
description:
image: https://source.unsplash.com/1600x900/?javascript
optimized_image: https://source.unsplash.com/1600x900/?javascript
category: javascript
tags:
  - javascript
author: aditia
paginate: false
---

Setelah mempelajari DOM Selection maka selanjutnya kita akan mempelajari DOM Manipulation. DOM Manipulation adalah cara untuk memanipulasi sebuah element yang sudah kita seleksi sebelumnya menggunakan DOM Selection, baik itu merubah style ataupun isi dari sebuah element. Ada beberapa method yang dapat digunakan dalam DOM Manipulation.
DOM Manipulation ini terbagi menjadi 2 yaitu, Element Manipulation dan Node Manipulation.

## ELEMENT MANIPULATION

Element Manipulation adalah kondisi ketika kita ingin mengubah suatu style atau atribut pada sebuah element html. Berikut adalah beberapa method pada Element Manipulation

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Function</th>
      <!-- <th>Function</th> -->
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>element.classList</td>
      <td>Untuk memanipulasi class pada sebuah element secara spesifik</td>
      <!-- <td>Memilih element berdasarkan TAG html</td> -->
    </tr>
  </tfoot>
  <tbody>
   <tr>
      <td>element.innerHTML</td>
      <td>Merubah isi dari sebuah tag yang sudah di seleksi</td>
      <!-- <td>Memilih elemen berdasarkan selectornya, seperti menggunakan css</td> -->
    </tr>
    <tr>
      <td>element.style.property</td>
      <td>Merubah style atau css element yang sudah di seleksi</td>
      <!-- <td>Memilih element berdasarkan ID</td> -->
    </tr>
    <tr>
      <td>element.setAttribute('attribute', 'attribute value')</td>
      <td>Untuk memanipulasi attribute pada sebuah element seperti class, id, name</td>
      <!-- <td>Memilih element berdasarkan Class sebuah element</td> -->
    </tr>
  </tbody>
</table>

## USAGE (Element Manipulation)

- document.innerHTML

```HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h3 id="h3">Hello World</h3>
    </body>
    </html>

    <script>
        // Seleksi Element h3
        const h3 = document.getElementById('h3')
        // Buat Manipulasi InnerHTML
        h3.innerHTML = 'INI ADALAH JUDUL';
    </script>
```

## NODE MANIPULATION

Node Manipulation adalah sebuah kondisi ketika kita ingin menambahkan, menghapus sebuah element html.
