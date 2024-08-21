---
date: 2022-02-28
layout: post
title: JS Basic - Perulangan (looping)
subtitle: JS Basic - Perulangan (looping)
description:
image: /assets/img/javascript.jpg
optimized_image: /assets/img/javascript.jpg
category: javascript
tags:
  - javascript-basic
author: aditia
---

Didalam Javascript kita dapat melakukan looping atau perulangan menggunakan while atau for, berikut adalah pembahasan detail mengenai while dan for.

## While

While memiliki struktur kode seperti dibawah ini:

> while(kondisi){
> aksi
> }

setiap perulangan yang dilakukan oleh while dapat diberhentikan oleh user atau oleh sistem. Berikut adalah contoh penggunaan while.

```javascript
let x = true;
while (x) {
  alert("hello world");
  x = confirm("cetak lagi?");
}
```

Jika dilihat dari script diatas maka dapat disimpulkan seperti ini:

- Variable x bernilai true.
- Ketika variable x bernilai true maka cetak alert hello world
- lalu tampilkan pop up box confirm yang nilainya disimpan ke dalam variable x
- Kemudian script akan kembali lagi melakukan pengecekan variable x apakah bernilai true atau false

Berikut adalah contoh hasilnya:
<img src="/assets/img/post/while.png" alt="DOM TREE" width="500">

<img src="/assets/img/post/while-2.png" alt="DOM TREE" width="500">

Selain dari contoh diatas, berikut adalah contoh while yang digunakan untuk looping sebuah bilangan

```javascript
let y = 1;
while (y <= 10) {
  console.log(y);
  y++;
}
```

Jika dilihat dari script diatas maka dapat disimpulkan seperti ini:

- Variable y bernilai 1.
- Ketika variable y bernilai lebih kecil sama dengan 10
- Maka tampilkan nilai variable y pada console browser.
- Kemudian tambahkan 1 nilai pada variable y.
- Kemudian script akan kembali lagi melakukan pengecekan nilai pada variable y apakah nilainya masih lebih kecil sama dengan 10, jika ya maka kembali lakukan perulangan.

Berikut adalah contoh hasilnya:
<img src="/assets/img/post/while-3.png" alt="DOM TREE" width="500">

## For

Pada prakteknya penggunaan for hampir sama seperti penggunaan while, namun for memiliki struktur code yang lebih rapih seperti berikut.

> for(NilaiAwal; Kondisi; Increment/Decrement;){
> Aksi;
> }

Berikut adalah contoh penggunaan looping menggunakan for

```javascript
for (let x = 1; x <= 10; x++) {
  console.log(x);
}
```

Jika script diatas dipahami maka dapat dijabarkan seperti berikut:

- Variable x memiliki nilai 1 (Nilai Awal).
- Kemudian jika variable x memiliki nilai lebih kecil sama dengan 10 (Kondisi).
- Maka tampilkan nilai di console browser (Aksi).
- Kemudian tambahkan nilai x dengan 1 bilangan (Increment / Decrement).

Berikut adalah contoh hasilnya:
<img src="/assets/img/post/while-3.png" alt="DOM TREE" width="500">
