Stuller API
===========


Install
--------
`npm install stuller`  


Usage
------


Available Methods
-------
FetchItemInfo  
FetchItemInfoByItemID  
FetchItemInfoBySeries  
FetchItemPriceOnHand  
FetchItemPriceOnHandByItemID  
FetchItemPriceOnHandBySeries  
FetchItems  
FetchRTWItems  


```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchItemInfoByItemID(123).send(function(err, response) {
    console.log(response);
    });

```
