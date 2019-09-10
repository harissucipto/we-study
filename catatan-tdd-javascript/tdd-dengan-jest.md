# TDD Dengan Jest

**Write The Test First**.

Tdd bermaksud menulis test terlebih dahulu sehingga menghidari error yang berkepanjangan dan mengharapkan hasil yang diinginkan.

Jest berjalan di Nodejs bukan di browser.

## Langkah - Langkah

### Tambahkan Jest ke dalam project kita

```cmd
  yarn add jest@23.0.6 -d
```

### Esekusi Jest

Untuk mengesekusi test dengan jest dapat melalui.

```cmd
  npx jest
```

Atau membuat runner script di package.json bagian prop test.

```json
  ...
  tests: {
    "test": "jest"
  }
  ...
```

