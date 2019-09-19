# Cek Kualitas Kode dengan ESLINt

Membantu auto cek kode jika ada salah tulis atau typo atau variable yang tidak kepake, dll.

## Cara Menggunakan

### init eslint nya di project

```cmd
  yarn add  eslint@5.10.0 -d
```

### Configurasi Eslint

Buat src file .eslintrc.js agar eslint dapat bekerja sesuai dengan perintah.

```js
// .eslintrc.js
module.exports = {
  extends: ['eslint:recommended']
};

```

### ParserOptions

Pada dasarnya eslint hanya melakuakn check javascript es5 jadi jika ingin menulis kode diversi javascript keatas seperti es6 dan seterusnya perlu melakukan **parser**.

Maka kita harus menambahkan parseOptions pada pengaturannya

```js
// .eslintrc.js
...
  parserOptions: {
    ecmaVersion: 6,
  }
...

```

### Env yang diapake

Setelah itu masih ada lagi yang perlu kita config yaitu keyword javascript yang berasal dari fungsi pihak ke tiga seperti module  perlu kita jabarkan di eslint agar dikenali bawah itu telah didefenisikan, dengan menambahakn env.

```js
// .eslintrc.js
...
 env: {
   node: true
 }
..
```

### Extends Pengaturan

Ok Untuk mengenali keyword pihak ketiga selain dari env maka perlu di **extends** pengaturan eslintnya dengan menambahkan package penyedia extends pengaturan eslint tersebut, contohnya untuk jest.

```cmd

yarn add eslint-plugin-jest@22.1.2 -d

```

Untuk **menerapkan** nya kita perlu membuat dua perubahan di pengaturan eslintnya yaitu.

+ registerkan di property pengaturan **plugins** entry
+ tambahkan property peangturan **extends** di recommended configuration untuk  melakukan **extends** entry.

```js
// .eslintrc.js
...
  plugins: ['jest'],
  extends: [..., 'plugin:jest/recommended']
..

```

### Cara Bekerja ..eslicrc.js

Eslint akan menerapkan file .eslicrc.js atau pengaturan terdekat dalam folder confignya sehingga kita bisa membuat banyak konfig dalam banyak folder sehingga bisa melakukan perbedaan config global dengan lokal, seperti pada contoh test-driven-polindrome.

### Mengatur Cara Run Eslint

```js
// .eslintrc.js
...
  "eslint.run": "onSave"
...

```
