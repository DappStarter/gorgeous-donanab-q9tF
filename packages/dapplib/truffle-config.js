require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain mistake hover arena obscure session'; 
let testAccounts = [
"0x16aabf58f4a1ec80647bc3f2fa4298e46c8184baaebc3d8b51d56fd823f5e0e3",
"0x46205f56b212d965df0615e6c82ef3ff7479c828257075f23f8e8a3d4a38405f",
"0x96813c7accb8e6d648cce98fe044409d92af8359713f5d97a02b941e5422e09b",
"0x776608c7f29632e176e5703dd5ce9cb995a4d8f5b41f28bdc4d450e6dd69303c",
"0x0766d96c75580e40e8bb6dce828ee82a2d8b011f2f6a4604fa6834d3446a5972",
"0x1d80115fbf2fe41f12820dc1d5a95b3dfb99cbf2bb345f7c9104e92b6659cd8f",
"0xa9d4952f806f42ddc0a4ce6104841c5d044da22321d08335d3f7651e784c0676",
"0x539561a223807ab13597465cd06569653e47471fa8c8c1352c89b5dd225fc508",
"0xbb0d39129ae95f62a8c621f2d7247b430a36ded0feb86a2308093f8dde7bcd43",
"0x9e8b3d85b859aa85deaaaf33597ea52ef82db50f4969c984cfb465b42ea3ba57"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

