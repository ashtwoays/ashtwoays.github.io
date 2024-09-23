---
date: 2024-09-23 03:52:14
layout: post
title: "Voucher Management"
subtitle: Recent Project - Voucher Management
description:
image: /assets/img/project.jpg
optimized_image: /assets/img/project.jpg
category: Recent-Project
tags:
    - Recent-Project
author: aditia
---

## PROJECT CONCEPT

Project ini berbasis website dan bertujuan untuk melakukan management voucher, website ini terintegrasi dengan layanan Website E-Commerce(Shopify) dan juga Sistem POS (IndiePOS) yang digunakan di offline store.

Tujuan project ini adalah:
- Membantu user agar bisa melakukan bulk upload voucher ke Website E-Commerce (Shopify).
- Membuatu user agar bisa bisa melakukan bulk upload voucher ke Sistem POS (IndiePOS).
- Membantu user untuk monitoring penggunaan voucher employee.
- Membuat report otomatis untuk pengunaan voucher employee.

Solusi yang perlu dibuat:
- Membuat fitur bulk upload voucher dan melakukan integrasi dengan shopify melalui API.
- Membuat fitur bulk upload voucher dan melakukan integrasi dengan IndiePOS melalui GraphQL.
- Membuat dashboard untuk monitoring penggunaan voucher employee.
- Membuat scheduler untuk generate report otomatis, kemudian di kirimkan ke AWS S3.

berikut adalah skema project ini.

<img src="/assets/img/post/Skema-voucher-management.png" alt="Skema Voucher Management" width="700">



## TECHNICAL REQUIREMENTS
<!-- Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. -->
<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PHP</td>
      <td>Bahasa utama yang digunakan untuk membangun website pada project ini</td>
    </tr>
    <tr>
      <td>Javascript</td>
      <td>Bahasa yang digunakan untuk membuat event handler pada website</td>
    </tr>
    <tr>
      <td>Laravel</td>
      <td>Framework yang digunakan untuk membangun website</td>
    </tr>
    <tr>
      <td>CrudBooster</td>
      <td>Library untuk generate crud function otomatis</td>
    </tr>
    <tr>
      <td>Mysql</td>
      <td>Database yang digunakan untuk menyimpan hasil log request dan response</td>
    </tr>
    <tr>
      <td>AWS S3</td>
      <td>layanan penyimpanan objek dari Amazon Web Services (AWS) untuk menyimpan report penggunaan voucher employee</td>
    </tr>
    <tr>
      <td>Guzzle</td>
      <td>Library yang digunkan untuk melakukan request API</td>
    </tr>
  </tbody>
</table>
</table>
