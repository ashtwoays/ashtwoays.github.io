---
date: 2024-08-23 04:07:41
layout: post
title: "Banking Service API Gateway"
subtitle: Recent Project - Banking Service API Gateway
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

Project yang akan saya buat adalah integrasi antara ERP (dynamics 365) dengan layanan Perbankan (BCA), kenapa perlu menggunakan API Gateway? Seharusnya ERP bisa langsung Hit ke endpoint layanan perbankan?.

Tentu, Dynamics 365 sudah lebih baik dalam melakuka request API, tetapi masalahnya layanan perbankan memiliki API yang cukup ketat dari sisi security. Kendala yang dihadapi adalah endpoint layanan perbankan perlu melakukan whitelist IP static, sementara dynamics 365 memiliki IP yang dynamic. maka dari itu diperlukan API Gateway yang di deploy di server yang berbeda dan memiliki IP static untuk melakukan request ke layanan perbankan.

Tujuan project ini adalah:
- Membuat fitur transfer (Payment Vendor dll) di ERP melalui API Gateway.

Solusi yang perlu dibuat:
- Membuat API Gateway untuk solusi jangka panjang terkait whitelist IP di layanan perbankan.
- Membuat Middleware Whitelist Domain, untuk security agar endpoint yang disediakan oleh api gateway hanya bisa di hit oleh domain tertentu.
- Membuat Authentikasi menggunakan JWT, untuk security agar endpoint yang disediakan oleh api gateway hanya bisa di hit apabila client memberikan akses yang telah dibuat. hasil dari autentikasi ini berupa Token JWT yang hanya diperlukan untuk hit endpoint berikutnya.
- Membuat Validasi, untuk data yang dikirimkan oleh client (Dynamics 365), apakah sudah sesuai dengan field yang disediakan.

berikut adalah skema project ini.

<img src="/assets/img/post/project_api_banking.png" alt="API Gateway" width="700">



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
      <td>Node JS</td>
      <td>Runtime Javascript</td>
    </tr>
    <tr>
      <td>Javascript</td>
      <td>Bahasa utama yang digunakan untuk membangun API Gateway pada project ini</td>
    </tr>
    <tr>
      <td>Express JS</td>
      <td>Framework yang digunakan untuk membuat API Gateway</td>
    </tr>
    <tr>
      <td>Mysql</td>
      <td>Database yang digunakan untuk menyimpan hasil log request dan response</td>
    </tr>
    <tr>
      <td>PHP</td>
      <td>Bahasa yang digunakan untuk membuat dashboard monitoring log</td>
    </tr>
    <tr>
      <td>CrudBooster</td>
      <td>Library untuk generate crud function otomatis</td>
    </tr>
    <tr>
      <td>Virtual Private Server</td>
      <td>Server yang digunakan untuk deploy API Gateway</td>
    </tr>
    <tr>
      <td>PM2</td>
      <td>Manajer proses untuk runtime JavaScript Node.js.</td>
    </tr>
  </tbody>
</table>


## RESULT
