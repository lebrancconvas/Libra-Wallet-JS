async function createWallet() {
    const { LibraWallet } = require('kulap-libra')
    const wallet = new LibraWallet()
    const account = wallet.newAccount()

    return {
        address: account.getAddress().toHex(),
        mnemonic: wallet.config.mnemonic
    }
}

(async () => {
    const wallet = await createWallet()
    console.log('wallet', wallet)

})()