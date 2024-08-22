---
date: 2024-08-22 04:30:49
layout: post
title: "Membership API Gateway"
subtitle: Recent Project - Membership API Gateway
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

Project ini merupakan project API Pertama yang saya buat, project ini berupa API Gateway. API Gateway (Application Programming Interface Gateway) adalah lapisan perangkat lunak yang bertindak sebagai titik masuk tunggal untuk aplikasi klien dan layanan backend. Kurang lebih gambarannya seperti berikut:

<img src="/assets/img/post/api_gateway.png" alt="API Gateway" width="700">


## PROJECT CONCEPT

Sementara project yang akan saya buat adalah integrasi antara sistem POS dengan layanan membership vendor(TADA), kenapa perlu menggunakan API Gateway? Seharusnya POS bisa langsung Hit ke endpoint layanan membership?.

Ini dikarenakan sebelumnya sudah ada program membership existing yang sudah terintegrasi dengan POS, otomatis POS sudah menyesuaikan response yang dikembalikan oleh endpoint program membership existing. dikarenakaan ini adalah proses pergantian program membership dari membership existing -> Layanan membership external, otomatis response yang dikirimkan oleh Layanan membership external akan berbeda dengan response yang dikirimkan oleh membership existing.
Maka dari itu fungsi API Gateway ini adalah sebagai jembatan agar response dari Layanan membership external sama seperti response dari program membership existing.

Tujuannya agar tidak banyak perubahan code dari sisi POS dan meminimalisir terjadinya bug. karena POS merupakan sistem first layer yang digunakan untuk melakukan transaksi penjualan.

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



