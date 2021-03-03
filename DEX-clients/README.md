# radianceteam-dex



sudo tondev sol DEXclient.sol -l js -L deploy
sudo tondev sol DEXpair.sol -l js -L deploy



DEXclient
---------
* connectPair          = 110 000 000 gramm;
* sendTokens            = 1 000 000 gramm;
* sendTokens2           = 1 000 000 gramm;
* askBalanceToken       = 1 000 000 gramm;
* createNewEmptyWallet  = 1 000 000/110 000 000 gramm;

DEXpair
-------
* createDepositWallet   = 1 000 000/110 000 000 gramm;
* connect               = 110 000 000 gramm;
* setPairDepositWallet  = 1 000 000 gramm;
* sendTokens2           = 1 000 000 gramm;
* sendTokens            = 1 000 000 gramm;
* askBalancePairWallets
* -- transmitterA       = 1 000 000 gramm;
* -- transmitterB       = 1 000 000 gramm;
* createReserveWallet   = 1 000 000/110 000 000 gramm;





../../../tonos-cli call 0:5b1058efc34fba3854256ad0ee88c7d899522ed84cc2a6fadb1c3d9e990cc0eb createPairClientWallets '{"pairAddr":"0:5f34bb2fc10b160b15b49c0adf7576d5a9a794b1f1c4237d18cfe34e4a6c0089"}' --sign ./DEXclientContract.keys.json --abi ../DEXclient.abi.json

