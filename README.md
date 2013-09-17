Stuller API
===========


Install
--------
`npm install stuller`  


## Available Methods

* Most methods can take either an `Array`, `String`, or `Number`
* Calling `send(callback)` actually fires off the request to Stuller
* The _callback_ function is given two arguments `(err, response)`
    * `error` any error thrown by Equella, soap, or xml2js
    * `response` array of JSON objects


### FetchItemInfo

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller
  .FetchItemInfo(['123:A', '123:B'])
  .send(function(err, response) {
    console.log(response);
});

```

### FetchItemInfoByItemID  

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

### FetchItemInfoBySeries  

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchItemInfoBySeries(['2222', '234233']).send(function(err, response) {
    console.log(response);
    });

```

### FetchItemPriceOnHand  

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchItemPriceOnHand(['123:A', '123:B']).send(function(err, response) {
    console.log(response);
    });

```

### FetchItemPriceOnHandByItemID  

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchItemPriceOnHandByItemID([123, 123]).send(function(err, response) {
    console.log(response);
    });

```

### FetchItemPriceOnHandBySeries  

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchItemPriceOnHandBySeries([123, 123]).send(function(err, response) {
    console.log(response);
    });

```

### FetchItems  

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchItems().send(function(err, response) {
    console.log(response);
    });

```

### FetchRTWItems  

```javascript
var Stuller = require('stuller');

var stuller = new Stuller({
                apiUrl: APIURL,
                token: TOKEN
              });

stuller.FetchRTWItems(1).send(function(err, response) {
    console.log(response);
    });

```

