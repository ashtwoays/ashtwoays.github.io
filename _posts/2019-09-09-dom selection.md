---
date: 2022-02-06 00:26:00
layout: post
title: DOM - Selection
subtitle: Pembahasan DOM Selection menggunakan Javascript
description:
image: https://source.unsplash.com/1600x900/?javascript
optimized_image: https://source.unsplash.com/1600x900/?javascript
category: javascript
tags:
  - javascript
author: aditia
---

DOM Selection merupakan pembahasan mengenai cara untuk memilih sebuah element html yang akan dimanipulasi oleh DOM. Ada beberapa method yang dapat digunakan untuk melakukan selection pada DOM.

## DOM SELECTION METHOD

Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Output</th>
      <th>Function</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>querySelectorAll()</td>
      <td>Node-List</td>
      <td>Memilih elemen berdasarkan selectornya, seperti menggunakan css</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>getElementById()</td>
      <td>Element</td>
      <td>Memilih element berdasarkan ID</td>
    </tr>
    <tr>
      <td>getElementByClassName()</td>
      <td>HTMLCollection</td>
      <td>Memilih element berdasarkan Class sebuah element</td>
    </tr>
    <tr>
      <td>getElementByTagName()</td>
      <td>HTMLCollection</td>
      <td>Memilih element berdasarkan TAG html</td>
    </tr>
  </tbody>
</table>

Berikut merupakan contoh penggunaan dari masing masing method.

## USAGE

- getElementById()

```javascript
  document.querySelectorAll('p' -> artinya cari semua elemen yang memiliki tag p)
```

- getElementsByClassName()

```javascript
  document.getElementsByClassName('inputField' -> inputField merupakan class dari sebuah element HTML)
```

- getElementByTagName()

```javascript
  document.querySelectorAll('p' -> artinya cari semua elemen yang memiliki tag p)
```

- querySelector()

```javascript
  document.querySelector('#b p:nth-child[2]' -> artinya cari sebuah element yang ID nya b dan cari tag p urutan ke dua)
```

- querySelectorAll()

```javascript
  document.querySelectorAll('p' -> artinya cari semua elemen yang memiliki tag p)
```

-
