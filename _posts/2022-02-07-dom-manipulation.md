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
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>element.classList</td>
      <td>Untuk memanipulasi class pada sebuah element secara spesifik</td>
    </tr>
  </tfoot>
  <tbody>
   <tr>
      <td>element.innerHTML</td>
      <td>Merubah isi dari sebuah tag yang sudah di seleksi</td>
    </tr>
    <tr>
      <td>element.style.property</td>
      <td>Merubah style atau css element yang sudah di seleksi</td>
    </tr>
    <tr>
      <td>element.setAttribute('attribute', 'attribute value')</td>
      <td>Untuk memanipulasi attribute pada sebuah element seperti class, id, name</td>
    </tr>
  </tbody>
</table>

## USAGE (Element Manipulation)

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
        h3.innerHTML = 'INI ADALAH JUDUL'; // Maka outputnya adalah tag h3 akan berubah valuenya menjadi INI ADALAH JUDUL

        // Buat Manipulasi style.properties
        h3.style.backgroundColor = 'red'; // Outputnya warna background pada h3 akan berubah menjadi merah

        // Buat Manipulasi Attribute
        h3.setAttribute('id', 'judul') // method ini akan menambahkan attribute id = "judul" pada element h3

        // Element Class List akan mengelola class secara spesifik
        h3.classList.add('baru') // untuk menambah class baru pada element h3 jadi class = "h3 baru"

        h3.classList.remove('baru') // untuk menghilangkan sebuah class tertentu, jadi class = "h3"

        h3.classList.toggle('judul') // akan menambah class judul jika di h3 belum ada, dan akan menghapus class judul jika di h3 sudah ada

        h3.classList.replace('h3', 'header') // akan mengubah class h3 menjadi class header
    </script>
```

## NODE MANIPULATION

Node Manipulation memungkinkan kita untuk melakukan penambahan node baru atau menghapus node.

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Function</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>parentNode.replaceChild</td>
      <td>Untuk memanipulasi class pada sebuah element secara spesifik</td>
    </tr>
  </tfoot>
  <tbody>
   <tr>
      <td>document.createElement()</td>
      <td>Membuat element baru</td>
    </tr>
    <tr>
      <td>document.createTextNode()</td>
      <td>Membuat text untuk sebuah node atau element baru</td>
    </tr>
    <tr>
      <td>node.appendChild()</td>
      <td>Untuk menyisipkan sebuah text ataupun element baru sesudah element parent</td>
    </tr>
    <tr>
      <td>node.insertBefore()</td>
      <td>Untuk menyisipkan sebuah element baru sebelum element parent</td>
    </tr>
    <tr>
      <td>parentNode.removeChild()</td>
      <td>Untuk memanipulasi attribute pada sebuah element seperti class, id, name</td>
    </tr>
  </tbody>
</table>

## USAGE (Node Manipulation)

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
        <section id="sectionA">
            <h3 id="h1">Punten</h3>
            <h3 id="h2">Hello World</h3>
        </section>
    </body>
    </html>

    <script>
        // Buat Element h3 baru
        const h3baru = document.createElement('h3') // output <h3></h3>

        // Buat Value text untuk h3baru
        const texth3b = document.createTextNode('appenChild') // output 'appenChild'

        // Sisipkan texth3b ke dalam h3baru
        h3baru.appendChild(texth3b) // output <h3>Halo Dunia</h3>

        // Simpan h3baru dibawah h3 lama
        // ambil nodenya / parentnya terlebih dahulu
        const sectionA = document.getElementById('sectionA')

        // Sisipkan h3baru di akhir h3 lama
        sectionA.appendChild(h3baru)

        // -----------------------------------------------------------------------------

        // Sisipkan element baru sebelum hello world atau tengah tengah
        // Buat element baru
        const h3baru1 = document.createElement('h3')

        // Buat value text untuk h3baru1
        const texth3b1 = document.createTextNode('insert before')

        // Sisipkan texth3b1 ke dalam h3baru1
        h3baru1.appendChild(texth3b1)

        // ambil parent dari element yang jadi bantalan
        const section = document.getElementById('sectionA')

        // ambil element yang akan dijadikan bantalan
        const bantalan = document.getElementById('h2');

        // Sisipkan elemen
        section.insertBefore(h3baru1, bantalan);
    </script>
```
