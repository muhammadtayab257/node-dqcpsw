const express = require('express');
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: '*',
  })
);

const data = [
  {
    MCC: '260',
    MNC: '47',
    CC: '1',
    NDC: '8768148905',
    SnStartRange: '0',
    SnStopRange: '99999999999',
    operatorName: 'SMShighway',
    countryName: 'United Kingdom',
    countryIso: 'GBR',
    tadigCode: 'GBRHW',
  },
  {
    MCC: '234',
    MNC: '53',
    CC: '44',
    NDC: '7458810199',
    SnStartRange: '0',
    SnStopRange: '99999999999',
    operatorName: 'Tango Networks Inc.',
    countryName: 'United Kingdom',
    countryIso: 'GBR',
    tadigCode: 'GBRLI',
  },
  {
    MCC: '505',
    MNC: '26',
    CC: '61',
    NDC: '420020569',
    SnStartRange: '0',
    SnStopRange: '9999',
    operatorName: 'Dialogue Communications Ltd.',
    countryName: 'United Kingdom',
    countryIso: 'GBR',
    tadigCode: 'AUSDL',
  },
  {
    MCC: '901',
    MNC: '11',
    CC: '870',
    NDC: '772009',
    SnStartRange: '0',
    SnStopRange: '99999999999',
    operatorName: 'Inmarsat Global',
    countryName: 'United Kingdom',
    countryIso: 'GBR',
    tadigCode: 'INXIX',
  },
  {
    MCC: '432',
    MNC: '35',
    CC: '98',
    NDC: '9046',
    SnStartRange: '0',
    SnStopRange: '99999999',
    operatorName: 'MTN-Irancell',
    countryName: 'Iran',
    countryIso: 'IRN',
    tadigCode: 'IRNMI',
  },
  {
    MCC: '405',
    MNC: '047',
    CC: '91',
    NDC: '9046',
    SnStartRange: '0',
    SnStopRange: '999999999',
    operatorName: 'Tata Teleservices Limited RO WB',
    countryName: 'India',
    countryIso: 'IND',
    tadigCode: 'INDT9',
  },
  {
    MCC: '405',
    MNC: '044',
    CC: '91',
    NDC: '9043',
    SnStartRange: '0',
    SnStopRange: '999999999',
    operatorName: 'Tata Teleservices Limited Tamil Nadu',
    countryName: 'India',
    countryIso: 'IND',
    tadigCode: 'INDT2',
  },
  {
    MCC: '405',
    MNC: '035',
    CC: '91',
    NDC: '9037',
    SnStartRange: '0',
    SnStopRange: '999999999',
    operatorName: 'Tata Teleservices Limited Kerala',
    countryName: 'India',
    countryIso: 'IND',
    tadigCode: 'INDT3',
  },
];

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

app.get(
  '/mobile-insight-api-server/operator/countryiso/:countryisoo/:mcc',
  (req, res) => {
    let countryIso = req.params.countryisoo;
    let mcc = req.params.mcc;
    console.log(mcc, countryIso);
    let data111 = data.filter((datass) => {
      return datass.MCC == mcc && datass.countryIso == countryIso;
    });
    res.send(data111);
  }
);
