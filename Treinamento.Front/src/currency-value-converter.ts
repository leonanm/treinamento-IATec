// import numeral from 'numeral';

export class CurrencyValueConverter {
  toView(num: string) {
    // return numeral(num).format('($0,0.00)');
    if (!num) return num;
    return parseInt(num).toLocaleString('zh-CN', { style: "currency", currency: 'CNY' });
  }
}
