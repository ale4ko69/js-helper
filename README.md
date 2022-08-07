![GitHub package.json version](https://img.shields.io/github/package-json/v/ale4ko69/js-helper)
# js-helper
Javascript library with useful features

## Functions

<dl>
<dt><a href="#getMaxzIndex">getMaxzIndex()</a> ⇒ <code>number</code></dt>
<dd><p>Checks all DOM elements in the document body for position inline style and computed CSS and returns the maximum number of the z-index CSS property.</p>
</dd>
<dt><a href="#guid">guid()</a> ⇒ <code>string</code></dt>
<dd><p>Generate GUID/UUID string.</p>
</dd>
<dt><a href="#getRandomString">getRandomString([strLen])</a> ⇒ <code>string</code></dt>
<dd><p>Generate random string consisting from English Letters in Upper and Lower case and number from 0-9</p>
</dd>
<dt><a href="#htmlCleanWhiteBreakLine">htmlCleanWhiteBreakLine(content)</a> ⇒ <code>string</code></dt>
<dd><p>Clean Html String from line break, space</p>
</dd>
<dt><a href="#getTimeStampNow">getTimeStampNow()</a> ⇒ <code>number</code></dt>
<dd><p>Get current TIMESTAMP in milliseconds</p>
</dd>
<dt><a href="#dateDiff">dateDiff(date2_ms, date1_ms)</a> ⇒ <code>number</code></dt>
<dd><p>Show the difference between two dates in minutes</p>
</dd>
<dt><a href="#findObjectsByKeyValue">findObjectsByKeyValue(obj, key, val)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Search in object by key &amp; value</p>
</dd>
<dt><a href="#textGenerator">textGenerator([numWords], [numParagraf])</a> ⇒ <code>string</code></dt>
<dd><p>Lorem ipsume text generator.</p>
</dd>
</dl>

<a name="getMaxzIndex"></a>

## getMaxzIndex() ⇒ <code>number</code>
Checks all DOM elements in the document body for position inline style and computed CSS and returns the maximum number of the z-index CSS property.

**Kind**: global function  
**Returns**: <code>number</code> - Maximum Z-index number  
<a name="guid"></a>

## guid() ⇒ <code>string</code>
Generate GUID/UUID string.

**Kind**: global function  
**Returns**: <code>string</code> - string in unique format GUID - 279cd021-7f13-056c-ff5e-6fe1deef4379  
<a name="getRandomString"></a>

## getRandomString([strLen]) ⇒ <code>string</code>
Generate random string consisting from English Letters in Upper and Lower case and number from 0-9

**Kind**: global function  
**Returns**: <code>string</code> - Generated random string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [strLen] | <code>number</code> \| <code>undefined</code> | <code>10</code> | Length of the random string; By default 10 chars |

<a name="htmlCleanWhiteBreakLine"></a>

## htmlCleanWhiteBreakLine(content) ⇒ <code>string</code>
Clean Html String from line break, space

**Kind**: global function  
**Returns**: <code>string</code> - Clean string  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | Text with all type of breake lines and spaces |

<a name="getTimeStampNow"></a>

## getTimeStampNow() ⇒ <code>number</code>
Get current TIMESTAMP in milliseconds

**Kind**: global function  
**Returns**: <code>number</code> - Milliseconds  
<a name="dateDiff"></a>

## dateDiff(date2_ms, date1_ms) ⇒ <code>number</code>
Show the difference between two dates in minutes

**Kind**: global function  
**Returns**: <code>number</code> - Difference in minutes between two dates  

| Param | Type | Description |
| --- | --- | --- |
| date2_ms | <code>number</code> | Date converted to milliseconds |
| date1_ms | <code>number</code> | Date converted to milliseconds |

<a name="findObjectsByKeyValue"></a>

## findObjectsByKeyValue(obj, key, val) ⇒ <code>Array.&lt;object&gt;</code>
Search in object by key & value

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - An array of the found objects  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | Object where we search |
| key | <code>string</code> | Property in Object in our search |
| val | <code>string</code> | Value for search |

<a name="textGenerator"></a>

## textGenerator([numWords], [numParagraf]) ⇒ <code>string</code>
Lorem ipsume text generator.

**Kind**: global function  
**Returns**: <code>string</code> - generated text  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [numWords] | <code>number</code> | <code>100</code> | number of words in a paragraph. Default 100 words |
| [numParagraf] | <code>number</code> | <code>1</code> | number of paragraphs in the text. Default 1 paragraph |


* * *

&copy; 2021-2022 Alexey Kagansky
