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

Setelah itu masih ada lagi yang perlu kita config yaitu keyword javascript yang berasal dari fungsi pihak ke tiga seperti module  perlu kita jabarkan di eslint agar dikenali bawah itu telah didefenisikan, dengan menambahakn env.

```js
// .eslintrc.js
...
 env: {
   node: true
 }
..
```


