import _ from 'lodash'

const test = [
  {
    "_id": "5d81d4e359929830782ec40b",
    "data": {
      "paymentNumber": "0034/CP/RSIIS/Tag/009/2019",
      "receivingInformation": {
        "accountNumber": "12321",
        "owner": "muamalat",
        "bank": "ini bank"
      },
      "paymentDate": "2019-09-18T06:55:31.371Z",
      "billNumber": "B20190913131419962",
      "registrationNumber": "20199130001",
      "registrationDate": "2019-09-13T06:11:29.564Z",
      "invoiceNumber": "0007/INV/RSIIS/Tag/009/2019",
      "paymentAmount": 10,
      "claimAmount": 30,
      "patient": {
        "link": "5bbed346675406087d201fcb",
        "mrNumber": "000001",
        "name": "Tommi",
        "salutation": "Mr"
      },
      "guarantor": {
        "_id": "5bbdc4ce90a22d1e105f5abe",
        "name": "RS Ibnu Sina"
      }
    }
  },
  {
    "_id": "5d81d4e359929830782ec40c",
    "data": {
      "paymentNumber": "0034/CP/RSIIS/Tag/009/2019",
      "receivingInformation": {
        "accountNumber": "12321",
        "owner": "muamalat",
        "bank": "ini bank"
      },
      "paymentDate": "2019-09-18T06:55:31.371Z",
      "billNumber": "B20190913131410778",
      "registrationNumber": "20199130002",
      "registrationDate": "2019-09-13T06:12:27.417Z",
      "invoiceNumber": "0007/INV/RSIIS/Tag/009/2019",
      "paymentAmount": 20,
      "claimAmount": 30,
      "patient": {
        "link": "5caea24e514bf6146c131eba",
        "mrNumber": "000012",
        "name": "IMAN NURAHMAN, Amk",
        "salutation": "Tn"
      },
      "guarantor": {
        "_id": "5bbdc4ce90a22d1e105f5abe",
        "name": "RS Ibnu Sina"
      }
    }
  },
  {
    "_id": "5d81d4fb59929830782ec40e",
    "data": {
      "paymentNumber": "0035/CP/RSIIS/Tag/009/2019",
      "receivingInformation": {
        "accountNumber": "12321",
        "owner": "muamalat",
        "bank": "ini bank"
      },
      "paymentDate": "2019-09-18T06:55:55.065Z",
      "billNumber": "B20190913131419962",
      "registrationNumber": "20199130001",
      "registrationDate": "2019-09-13T06:11:29.564Z",
      "invoiceNumber": "0007/INV/RSIIS/Tag/009/2019",
      "paymentAmount": 30,
      "claimAmount": 30,
      "patient": {
        "link": "5bbed346675406087d201fcb",
        "mrNumber": "000001",
        "name": "Tommi",
        "salutation": "Mr"
      },
      "guarantor": {
        "_id": "5bbdc4ce90a22d1e105f5abe",
        "name": "RS Ibnu Sina"
      }
    }
  },
  {
    "_id": "5d81d5ba59929830782ec410",
    "data": {
      "paymentNumber": "0036/CP/RSIIS/Tag/009/2019",
      "receivingInformation": {
        "accountNumber": "12321",
        "owner": "muamalat",
        "bank": "ini bank"
      },
      "paymentDate": "2019-09-18T06:59:06.898Z",
      "billNumber": "B20190913131419962",
      "registrationNumber": "20199130001",
      "registrationDate": "2019-09-13T06:11:29.564Z",
      "invoiceNumber": "0007/INV/RSIIS/Tag/009/2019",
      "paymentAmount": 10,
      "claimAmount": 10,
      "patient": {
        "link": "5bbed346675406087d201fcb",
        "mrNumber": "000001",
        "name": "Tommi",
        "salutation": "Mr"
      },
      "guarantor": {
        "_id": "5bbdc4ce90a22d1e105f5abe",
        "name": "RS Ibnu Sina"
      }
    }
  }
]

const guarantors = [
  {
    "name": "BPJS Kesehatan",
    "id": "5bbdc4a890a22d1e105f5abc"
  },
  {
    "name": "RS Ibnu Sina",
    "id": "5bbdc4ce90a22d1e105f5abe"
  },
  {
    "name": "Jasa Raharja",
    "id": "5bd16742f322bf32b0c51b43"
  },
  {
    "name": "BPJS Ketenagakerjaan",
    "id": "5bd16774f322bf32b0c51b45"
  },
  {
    "name": "TASPEN",
    "id": "5bd167b4f322bf32b0c51b47"
  },
  {
    "name": "ASABRI",
    "id": "5bd167d7f322bf32b0c51b49"
  },
  {
    "name": "PT Syams Teknologi",
    "id": "5bd1709df322bf32b0c51b73"
  },
  {
    "name": "PT Gojek Indonesia",
    "id": "5bd170c4f322bf32b0c51b74"
  },
  {
    "name": "PT Telkom Indonesia",
    "id": "5bd170ebf322bf32b0c51b75"
  }
]


const acc = guarantors.reduce(
  (acc, guarantor) => {
    const { id } = guarantor;
    console.log(id)
    const claimLists = test.filter(claimList => claimList.data.guarantor._id === id)
    return [...acc, { ...guarantor, claimLists }]
  },
  []
)

console.log(acc)