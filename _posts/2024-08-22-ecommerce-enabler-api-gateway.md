---
date: 2024-08-22 08:24:34
layout: post
title: "Ecommerce Enabler API Gateway"
subtitle: Recent Project - Ecommerce Enabler API Gateway
description:
image: /assets/img/project.jpg
optimized_image: /assets/img/project.jpg
category: Recent-Project
tags:
    - Recent-Project
author: aditia
paginate: false
---
## INTRODUCTION

project ini berupa API Gateway. API Gateway (Application Programming Interface Gateway) adalah lapisan perangkat lunak yang bertindak sebagai titik masuk tunggal untuk aplikasi klien dan layanan backend. Kurang lebih gambarannya seperti berikut:

<img src="/assets/img/post/api_gateway.png" alt="API Gateway" width="700">


## PROJECT CONCEPT

Sementara project yang akan saya buat adalah integrasi antara ERP (dynamics AX 2012) dengan layanan Ecommerce Enabler (Jubelio), kenapa perlu menggunakan API Gateway? Seharusnya ERP bisa langsung Hit ke endpoint layanan Ecommerce Enabler?.

Dikarenakan ini adalah ERP, dimana semua data perusahaan ada di dalam sistem tersebut, akan cukup high risk jika membuat kustomisasi untuk melakukan request API. ditambah sudah banyak proses job yang sedang berjalan di sistem tersebut.

Tujuan project ini adalah:
- Transfer data produk di ERP ke Jubelio agar produk bisa di post di ecommerce
- Simpan data penjualan (sales) yang dikirim oleh Jubelio ke ERP

Solusi yang perlu dibuat:
- Membuat stagging sementara untuk menampung data dari ERP dan Jubelio.
- Membuat scheduler untuk mengirimkan data terjadwal dari stagging ke Jubelio.
- Membuat webhook receiver, untuk menerima data penjualan yang dikirimkan oleh Jubelio, karena jubelio mengirimkan data penjualan melalui Webhook.

berikut adalah skema project ini.

<img src="/assets/img/post/project_api_membership.png" alt="API Gateway" width="700">


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
      <td>Bahasa utama yang digunakan untuk membangun API Gateway pada project ini</td>
    </tr>
    <tr>
      <td>Codeigniter</td>
      <td>Framework yang digunakan pada project ini</td>
    </tr>
    <tr>
      <td>Mysql</td>
      <td>Database yang digunakan untuk menyimpan hasil log request dan response</td>
    </tr>
    <tr>
      <td>cURL</td>
      <td>Library yang digunkan untuk melakukan request API</td>
    </tr>
  </tbody>
</table>


## RESULT

Result dari project ini adalah endpoint yang siap di hit oleh POS, endpoint ini akan mengembalikan data dari layanan membership jika data yang dikirimkan sesuai.

<img src="/assets/img/post/project_api_membership_result.png" alt="API Gateway" width="700">
