global.window = global;
require('../src/data');
require('./data.spec.js');

const dataWorldBank = {
  'PER': {
    'indicators': [
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 31.4799995422363,
          '2003': 29.6299991607666,
          '2004': 27.6299991607666,
          '2005': 27.2099990844727,
          '2006': 26.9699993133545,
          '2007': 27.6700000762939,
          '2008': 26.9599990844727,
          '2009': 27.3600006103516,
          '2010': 25.3400001525879,
          '2011': 24.7999992370605,
          '2012': 25.0400009155273,
          '2013': 24.0900001525879,
          '2014': 24.2099990844727,
          '2015': 21.6800003051758,
          '2016': 23.7399997711182,
          '2017': 23.7600002288818
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
        'indicatorCode': 'SL.TLF.PART.FE.ZS'
      },
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 57.3788986206055,
          '2003': 59.2597007751465,
          '2004': 60.5155982971191,
          '2005': 58.567699432373,
          '2006': 59.5596008300781,
          '2007': 62.5275993347168,
          '2008': 61.5718002319336,
          '2009': 63.0060997009277,
          '2010': 64.4614028930664,
          '2011': 64.3878021240234,
          '2012': 63.0351982116699,
          '2013': 62.2015991210938,
          '2014': 61.209400177002,
          '2015': 62.2141990661621,
          '2016': 61.5542984008789,
          '2017': 61.4822998046875
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Fuerza laboral con educación intermedia (% del total)',
        'indicatorCode': 'SL.TLF.INTM.ZS'
      },
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 70.0301971435547,
          '2003': 69.0485000610352,
          '2004': 70.3840026855469,
          '2005': 68.869499206543,
          '2006': 69.7163009643555,
          '2007': 72.8778991699219,
          '2008': 72.2699966430664,
          '2009': 72.4912033081055,
          '2010': 74.2916030883789,
          '2011': 73.6003036499023,
          '2012': 72.7871017456055,
          '2013': 72.2193984985352,
          '2014': 71.2494964599609,
          '2015': 71.3886032104492,
          '2016': 71.5625991821289,
          '2017': 71.3718032836914
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
        'indicatorCode': 'SL.TLF.INTM.MA.ZS'
      },
    ]
  }
};
const arrayIndicadoresTest = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': 31.4799995422363,
      '2003': 29.6299991607666,
      '2004': 27.6299991607666,
      '2005': 27.2099990844727,
      '2006': 26.9699993133545,
      '2007': 27.6700000762939,
      '2008': 26.9599990844727,
      '2009': 27.3600006103516,
      '2010': 25.3400001525879,
      '2011': 24.7999992370605,
      '2012': 25.0400009155273,
      '2013': 24.0900001525879,
      '2014': 24.2099990844727,
      '2015': 21.6800003051758,
      '2016': 23.7399997711182,
      '2017': 23.7600002288818
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  },
];

const valorSalida = ['PER-Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)', 'PER-Fuerza laboral con educación intermedia (% del total)', 'PER-Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)'];

const asdNuevoArray = [{key: '1960',
  value: ''}, {key: '1961',
  value: ''}, {key: '1962',
  value: ''}, {key: '1963',
  value: ''},
{key: '1964',
  value: ''}, {key: '1965',
  value: ''}, {key: '1966',
  value: ''}, {key: '1967',
  value: ''},
{key: '1968',
  value: ''}, {key: '1969',
  value: ''}, {key: '1970',
  value: ''}, {key: '1971',
  value: ''},
{key: '1972',
  value: ''}, {key: '1973',
  value: ''}, {key: '1974',
  value: ''}, {key: '1975',
  value: ''},
{key: '1976',
  value: ''}, {key: '1977',
  value: ''}, {key: '1978',
  value: ''}, {key: '1979',
  value: ''},
{key: '1980',
  value: ''}, {key: '1981',
  value: ''}, {key: '1982',
  value: ''}, {key: '1983',
  value: ''},
{key: '1984',
  value: ''}, {key: '1985',
  value: ''}, {key: '1986',
  value: ''}, {key: '1987',
  value: ''},
{key: '1988',
  value: ''}, {key: '1989',
  value: ''}, {key: '1990',
  value: ''}, {key: '1991',
  value: ''},
{key: '1992',
  value: ''}, {key: '1993',
  value: ''}, {key: '1994',
  value: ''}, {key: '1995',
  value: ''},
{key: '1996',
  value: ''}, {key: '1997',
  value: ''}, {key: '1998',
  value: ''}, {key: '1999',
  value: ''},
{key: '2000',
  value: ''}, {key: '2001',
  value: ''}, {key: '2004',
  value: 84.8996963500977},
{key: '2003',
  value: 85.8513031005859}, {key: '2005',
  value: 87.144401550293},
{key: '2006',
  value: 87.345703125}, {key: '2007',
  value: 89.47509765625},
{key: '2017',
  value: 90.3086013793945}, {key: '2009',
  value: 90.3177032470703},
{key: '2013',
  value: 90.3412017822266}, {key: '2015',
  value: 90.7515029907227},
{key: '2012',
  value: 90.8386993408203}, {key: '2008',
  value: 90.8488998413086},
{key: '2011',
  value: 91.0772018432617}, {key: '2014',
  value: 91.1201019287109},
{key: '2002',
  value: 91.1489028930664}, {key: '2016',
  value: 91.3912963867188},
{key: '2010',
  value: 91.5607986450195}];

const descNuevoArray = [{'2002': 70.0301971435547}, {'2003': 69.0485000610352}, {'2004': 70.3840026855469},
  {'2005': 68.869499206543}, {'2006': 69.7163009643555}, {'2007': 72.8778991699219},
  {'2008': 72.2699966430664}];
// test variable gl1obal
describe('bancoMundial', () => {
  it('deberia ser un objeto', () => {
    expect(typeof bancoMundial).toBe('object');
  });
});

describe('indicadorPorPais', () => {
  it('deberia retornar un array', () => {
    expect(bancoMundial.indicadorPorPais(dataWorldBank, 'PER')).toStrictEqual(arrayIndicadoresTest);
  });
  it('deberia ser una funcion', () => {
    expect(typeof bancoMundial.indicadorPorPais).toBe('function');
  });
});

describe('nombreIndicadorPorPais', () => {
  it('deberia ser una funcion', () => {
    expect(typeof bancoMundial.nombreIndicadorPorPais).toEqual('function');
  });

  it('deberia retornar un string', () => {
    expect(bancoMundial.nombreIndicadorPorPais(dataWorldBank, 'PER').toBe(valorSalida));
  });
});

describe('indicadorData', () => {
  it('deberia ser una funcion', () => {
    expect(typeof bancoMundial.indicadorData).toBe('function');
  });
});

describe('asdValor', () => {
  it('deberia ser una funcion', () => {
    expect(typeof bancoMundial.asdValor).toBe('function');
  });
  it('deberia retornar un objeto', () => {
    expect(typeof bancoMundial.asdValor(dataWorldBank, 'PER')).toEqual(asdNuevoArray);
  });
});

describe('desValor', () => {
  it('deberia ser una funcion', () => {
    expect(typeof bancoMundial.desValor).toBe('function');
  });
});

describe('calcularProm', () => {
  it('deberia ser una funcion', () => {
    expect(typeof bancoMundial.calcularProm).toBe('function');
  });
  // it('deberia ser una funcion', () => {
  //   expect(typeof nombreIndicadorPorPais).toEqual('function');
  // });
});