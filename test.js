/*
 * Transaction | 生成交易签名
 */

// 钱包2地址 15rtjeTJJ2hL83cGmNQRRNS4Uamq2bKcSo
// 钱包2私钥 7ab60369f2987e84807ff7fb4d50cfccc5d90f7008cfd6c323cbdbb356e87fe7
// 
// 
// 
// 钱包1地址  1Po5H7YTa5hxRydP3SpaxqiTcmremacgZ6
// 钱包1私钥  9f84cef8f37540babcc10c8557a378b0fb3a9857c5b344782a032c22abd60198
// 

var bitcore = require('./index');


utxo = {

    "txid": "d6592d1dce4122ec54f6257389725e39e0a437d38131bc4a2685c611bd826219",

    "vout": 1,

    "address": "1Po5H7YTa5hxRydP3SpaxqiTcmremacgZ6",

    "scriptPubKey": "76a914fa0978f06fd761dc30ac71c05cf38767df99552b88ac",

    "assetType":0,
    
    "amount": 500,

}

// 签名
var transaction = new bitcore.Transaction()
    .from(utxo)
    .to('15rtjeTJJ2hL83cGmNQRRNS4Uamq2bKcSo', 200,0)
    .sign("9f84cef8f37540babcc10c8557a378b0fb3a9857c5b344782a032c22abd60198"); // 这里是rootPrivateKey字符串、还是privateKey对象都行


console.log(transaction.toString());

