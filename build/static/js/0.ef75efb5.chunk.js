(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{1249:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,i(t(1281),r),i(t(1282),r),i(t(1318),r),i(t(1267),r),i(t(1319),r),i(t(1252),r),i(t(1320),r),i(t(1250),r),i(t(1268),r);var o=t(1254);Object.defineProperty(r,"isHexPrefixed",{enumerable:!0,get:function(){return o.isHexPrefixed}}),Object.defineProperty(r,"stripHexPrefix",{enumerable:!0,get:function(){return o.stripHexPrefix}}),Object.defineProperty(r,"padToEven",{enumerable:!0,get:function(){return o.padToEven}}),Object.defineProperty(r,"getBinarySize",{enumerable:!0,get:function(){return o.getBinarySize}}),Object.defineProperty(r,"arrayContainsArray",{enumerable:!0,get:function(){return o.arrayContainsArray}}),Object.defineProperty(r,"toAscii",{enumerable:!0,get:function(){return o.toAscii}}),Object.defineProperty(r,"fromUtf8",{enumerable:!0,get:function(){return o.fromUtf8}}),Object.defineProperty(r,"fromAscii",{enumerable:!0,get:function(){return o.fromAscii}}),Object.defineProperty(r,"getKeys",{enumerable:!0,get:function(){return o.getKeys}}),Object.defineProperty(r,"isHexString",{enumerable:!0,get:function(){return o.isHexString}})},1250:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return i(r,e),r},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.rlp=r.BN=void 0;var u=f(t(25));r.BN=u.default;var a=o(t(172));r.rlp=a},1252:function(e,r,t){"use strict";(function(e){var n=this&&this.__values||function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,i,o=t.call(e),f=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)f.push(n.value)}catch(u){i={error:u}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return f};Object.defineProperty(r,"__esModule",{value:!0}),r.bufArrToArr=r.arrToBufArr=r.validateNoLeadingZeroes=r.baToJSON=r.toUtf8=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.unpadHexString=r.unpadArray=r.unpadBuffer=r.setLengthRight=r.setLengthLeft=r.zeros=r.intToBuffer=r.intToHex=void 0;var o=t(1250),f=t(1254),u=t(1261);r.intToHex=function(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("Received an invalid integer type: ".concat(e));return"0x".concat(e.toString(16))};r.intToBuffer=function(t){var n=(0,r.intToHex)(t);return e.from((0,f.padToEven)(n.slice(2)),"hex")};r.zeros=function(r){return e.allocUnsafe(r).fill(0)};var a=function(e,t,n){var i=(0,r.zeros)(t);return n?e.length<t?(e.copy(i),i):e.slice(0,t):e.length<t?(e.copy(i,t-e.length),i):e.slice(-t)};r.setLengthLeft=function(e,r){return(0,u.assertIsBuffer)(e),a(e,r,!1)};r.setLengthRight=function(e,r){return(0,u.assertIsBuffer)(e),a(e,r,!0)};var s=function(e){for(var r=e[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e};r.unpadBuffer=function(e){return(0,u.assertIsBuffer)(e),s(e)};r.unpadArray=function(e){return(0,u.assertIsArray)(e),s(e)};r.unpadHexString=function(e){return(0,u.assertIsHexString)(e),e=(0,f.stripHexPrefix)(e),s(e)};r.toBuffer=function(t){if(null===t||void 0===t)return e.allocUnsafe(0);if(e.isBuffer(t))return e.from(t);if(Array.isArray(t)||t instanceof Uint8Array)return e.from(t);if("string"===typeof t){if(!(0,f.isHexString)(t))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(t));return e.from((0,f.padToEven)((0,f.stripHexPrefix)(t)),"hex")}if("number"===typeof t)return(0,r.intToBuffer)(t);if(o.BN.isBN(t)){if(t.isNeg())throw new Error("Cannot convert negative BN to buffer. Given: ".concat(t));return t.toArrayLike(e)}if(t.toArray)return e.from(t.toArray());if(t.toBuffer)return e.from(t.toBuffer());throw new Error("invalid type")};r.bufferToInt=function(e){return new o.BN((0,r.toBuffer)(e)).toNumber()};r.bufferToHex=function(e){return"0x"+(e=(0,r.toBuffer)(e)).toString("hex")};r.fromSigned=function(e){return new o.BN(e).fromTwos(256)};r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())};r.addHexPrefix=function(e){return"string"!==typeof e||(0,f.isHexPrefixed)(e)?e:"0x"+e};r.toUtf8=function(r){if((r=(0,f.stripHexPrefix)(r)).length%2!==0)throw new Error("Invalid non-even hex string input for toUtf8() provided");return e.from(r.replace(/^(00)+|(00)+$/g,""),"hex").toString("utf8")};r.baToJSON=function(t){if(e.isBuffer(t))return"0x".concat(t.toString("hex"));if(t instanceof Array){for(var n=[],i=0;i<t.length;i++)n.push((0,r.baToJSON)(t[i]));return n}};r.validateNoLeadingZeroes=function(e){var r,t;try{for(var o=n(Object.entries(e)),f=o.next();!f.done;f=o.next()){var u=i(f.value,2),a=u[0],s=u[1];if(void 0!==s&&s.length>0&&0===s[0])throw new Error("".concat(a," cannot have leading zeroes, received: ").concat(s.toString("hex")))}}catch(c){r={error:c}}finally{try{f&&!f.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}},r.arrToBufArr=function r(t){return Array.isArray(t)?t.map((function(e){return r(e)})):e.from(t)},r.bufArrToArr=function e(r){return Array.isArray(r)?r.map((function(r){return e(r)})):Uint8Array.from(null!==r&&void 0!==r?r:[])}}).call(this,t(23).Buffer)},1254:function(e,r,t){"use strict";(function(e){function t(e){if("string"!==typeof e)throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof e));return"0"===e[0]&&"x"===e[1]}Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,r.isHexPrefixed=t;function n(e){var r=e;if("string"!==typeof r)throw new Error("[padToEven] value must be type 'string', received ".concat(typeof r));return r.length%2&&(r="0".concat(r)),r}r.stripHexPrefix=function(e){if("string"!==typeof e)throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof e));return t(e)?e.slice(2):e},r.padToEven=n,r.getBinarySize=function(r){if("string"!==typeof r)throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof r));return e.byteLength(r,"utf8")},r.arrayContainsArray=function(e,r,t){if(!0!==Array.isArray(e))throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof e,"'"));if(!0!==Array.isArray(r))throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof r,"'"));return r[t?"some":"every"]((function(r){return e.indexOf(r)>=0}))},r.toAscii=function(e){var r="",t=0,n=e.length;for("0x"===e.substring(0,2)&&(t=2);t<n;t+=2){var i=parseInt(e.substr(t,2),16);r+=String.fromCharCode(i)}return r},r.fromUtf8=function(r){var t=e.from(r,"utf8");return"0x".concat(n(t.toString("hex")).replace(/^0+|0+$/g,""))},r.fromAscii=function(e){for(var r="",t=0;t<e.length;t++){var n=e.charCodeAt(t).toString(16);r+=n.length<2?"0".concat(n):n}return"0x".concat(r)},r.getKeys=function(e,r,t){if(!Array.isArray(e))throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof e));if("string"!==typeof r)throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof e));for(var n=[],i=0;i<e.length;i++){var o=e[i][r];if(t&&!o)o="";else if("string"!==typeof o)throw new Error("invalid abi - expected type 'string', received ".concat(typeof o));n.push(o)}return n},r.isHexString=function(e,r){return!("string"!==typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!r||e.length===2+2*r)}}).call(this,t(23).Buffer)},1261:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.assertIsString=r.assertIsArray=r.assertIsBuffer=r.assertIsHexString=void 0;var n=t(1254);r.assertIsHexString=function(e){if(!(0,n.isHexString)(e)){var r="This method only supports 0x-prefixed hex strings but input was: ".concat(e);throw new Error(r)}};r.assertIsBuffer=function(r){if(!e.isBuffer(r)){var t="This method only supports Buffer but input was: ".concat(r);throw new Error(t)}};r.assertIsArray=function(e){if(!Array.isArray(e)){var r="This method only supports number arrays but input was: ".concat(e);throw new Error(r)}};r.assertIsString=function(e){if("string"!==typeof e){var r="This method only supports strings but input was: ".concat(e);throw new Error(r)}}}).call(this,t(23).Buffer)},1267:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160FromArray=r.ripemd160FromString=r.ripemd160=r.sha256FromArray=r.sha256FromString=r.sha256=r.keccakFromArray=r.keccakFromHexString=r.keccakFromString=r.keccak256=r.keccak=void 0;var n=t(236),i=t(126),o=t(1250),f=t(1252),u=t(1261);r.keccak=function(e,r){switch(void 0===r&&(r=256),(0,u.assertIsBuffer)(e),r){case 224:return(0,n.keccak224)(e);case 256:return(0,n.keccak256)(e);case 384:return(0,n.keccak384)(e);case 512:return(0,n.keccak512)(e);default:throw new Error("Invald algorithm: keccak".concat(r))}};r.keccak256=function(e){return(0,r.keccak)(e)};r.keccakFromString=function(t,n){void 0===n&&(n=256),(0,u.assertIsString)(t);var i=e.from(t,"utf8");return(0,r.keccak)(i,n)};r.keccakFromHexString=function(e,t){return void 0===t&&(t=256),(0,u.assertIsHexString)(e),(0,r.keccak)((0,f.toBuffer)(e),t)};r.keccakFromArray=function(e,t){return void 0===t&&(t=256),(0,u.assertIsArray)(e),(0,r.keccak)((0,f.toBuffer)(e),t)};var a=function(e){return e=(0,f.toBuffer)(e),i("sha256").update(e).digest()};r.sha256=function(e){return(0,u.assertIsBuffer)(e),a(e)};r.sha256FromString=function(e){return(0,u.assertIsString)(e),a(e)};r.sha256FromArray=function(e){return(0,u.assertIsArray)(e),a(e)};var s=function(e,r){e=(0,f.toBuffer)(e);var t=i("rmd160").update(e).digest();return!0===r?(0,f.setLengthLeft)(t,32):t};r.ripemd160=function(e,r){return(0,u.assertIsBuffer)(e),s(e,r)};r.ripemd160FromString=function(e,r){return(0,u.assertIsString)(e),s(e,r)};r.ripemd160FromArray=function(e,r){return(0,u.assertIsArray)(e),s(e,r)};r.rlphash=function(e){return(0,r.keccak)(o.rlp.encode(e))}}).call(this,t(23).Buffer)},1268:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.toType=r.TypeOutput=r.bnToRlp=r.bnToUnpaddedBuffer=r.bnToHex=void 0;var n,i=t(1250),o=t(1254),f=t(1252);function u(r){return(0,f.unpadBuffer)(r.toArrayLike(e))}r.bnToHex=function(e){return"0x".concat(e.toString(16))},r.bnToUnpaddedBuffer=u,r.bnToRlp=function(e){return u(e)},function(e){e[e.Number=0]="Number",e[e.BN=1]="BN",e[e.Buffer=2]="Buffer",e[e.PrefixedHexString=3]="PrefixedHexString"}(n=r.TypeOutput||(r.TypeOutput={})),r.toType=function(e,r){if(null===e)return null;if(void 0!==e){if("string"===typeof e&&!(0,o.isHexString)(e))throw new Error("A string must be provided with a 0x-prefix, given: ".concat(e));if("number"===typeof e&&!Number.isSafeInteger(e))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");var t=(0,f.toBuffer)(e);if(r===n.Buffer)return t;if(r===n.BN)return new i.BN(t);if(r===n.Number){var u=new i.BN(t),a=new i.BN(Number.MAX_SAFE_INTEGER.toString());if(u.gt(a))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");return u.toNumber()}return"0x".concat(t.toString("hex"))}}}).call(this,t(23).Buffer)},1281:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=r.MAX_UINT64=void 0;var n=t(23),i=t(1250);r.MAX_UINT64=new i.BN("ffffffffffffffff",16),r.MAX_INTEGER=new i.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new i.BN("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=n.Buffer.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=n.Buffer.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=n.Buffer.from(r.KECCAK256_RLP_S,"hex")},1282:function(e,r,t){"use strict";(function(e){var n=this&&this.__read||function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,i,o=t.call(e),f=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)f.push(n.value)}catch(u){i={error:u}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return f},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.isZeroAddress=r.zeroAddress=r.importPublic=r.privateToAddress=r.privateToPublic=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isValidAddress=r.Account=void 0;var o=i(t(199)),f=t(1250),u=t(235),a=t(1254),s=t(1281),c=t(1252),d=t(1267),l=t(1261),p=t(1268),h=function(){function e(e,r,t,n){void 0===e&&(e=new f.BN(0)),void 0===r&&(r=new f.BN(0)),void 0===t&&(t=s.KECCAK256_RLP),void 0===n&&(n=s.KECCAK256_NULL),this.nonce=e,this.balance=r,this.stateRoot=t,this.codeHash=n,this._validate()}return e.fromAccountData=function(r){var t=r.nonce,n=r.balance,i=r.stateRoot,o=r.codeHash;return new e(t?new f.BN((0,c.toBuffer)(t)):void 0,n?new f.BN((0,c.toBuffer)(n)):void 0,i?(0,c.toBuffer)(i):void 0,o?(0,c.toBuffer)(o):void 0)},e.fromRlpSerializedAccount=function(e){var r=f.rlp.decode(e);if(!Array.isArray(r))throw new Error("Invalid serialized account input. Must be array");return this.fromValuesArray(r)},e.fromValuesArray=function(r){var t=n(r,4),i=t[0],o=t[1],u=t[2],a=t[3];return new e(new f.BN(i),new f.BN(o),u,a)},e.prototype._validate=function(){if(this.nonce.lt(new f.BN(0)))throw new Error("nonce must be greater than zero");if(this.balance.lt(new f.BN(0)))throw new Error("balance must be greater than zero");if(32!==this.stateRoot.length)throw new Error("stateRoot must have a length of 32");if(32!==this.codeHash.length)throw new Error("codeHash must have a length of 32")},e.prototype.raw=function(){return[(0,p.bnToUnpaddedBuffer)(this.nonce),(0,p.bnToUnpaddedBuffer)(this.balance),this.stateRoot,this.codeHash]},e.prototype.serialize=function(){return f.rlp.encode(this.raw())},e.prototype.isContract=function(){return!this.codeHash.equals(s.KECCAK256_NULL)},e.prototype.isEmpty=function(){return this.balance.isZero()&&this.nonce.isZero()&&this.codeHash.equals(s.KECCAK256_NULL)},e}();r.Account=h;r.isValidAddress=function(e){try{(0,l.assertIsString)(e)}catch(r){return!1}return/^0x[0-9a-fA-F]{40}$/.test(e)};r.toChecksumAddress=function(e,r){(0,l.assertIsHexString)(e);var t=(0,a.stripHexPrefix)(e).toLowerCase(),n="";r&&(n=(0,p.toType)(r,p.TypeOutput.BN).toString()+"0x");for(var i=(0,d.keccakFromString)(n+t).toString("hex"),o="0x",f=0;f<t.length;f++)parseInt(i[f],16)>=8?o+=t[f].toUpperCase():o+=t[f];return o};r.isValidChecksumAddress=function(e,t){return(0,r.isValidAddress)(e)&&(0,r.toChecksumAddress)(e,t)===e};r.generateAddress=function(r,t){(0,l.assertIsBuffer)(r),(0,l.assertIsBuffer)(t);var n=new f.BN(t);return n.isZero()?(0,d.rlphash)([r,null]).slice(-20):(0,d.rlphash)([r,e.from(n.toArray())]).slice(-20)};r.generateAddress2=function(r,t,n){return(0,l.assertIsBuffer)(r),(0,l.assertIsBuffer)(t),(0,l.assertIsBuffer)(n),(0,o.default)(20===r.length),(0,o.default)(32===t.length),(0,d.keccak256)(e.concat([e.from("ff","hex"),r,t,(0,d.keccak256)(n)])).slice(-20)};r.isValidPrivate=function(e){return(0,u.privateKeyVerify)(e)};r.isValidPublic=function(r,t){return void 0===t&&(t=!1),(0,l.assertIsBuffer)(r),64===r.length?(0,u.publicKeyVerify)(e.concat([e.from([4]),r])):!!t&&(0,u.publicKeyVerify)(r)};r.pubToAddress=function(r,t){return void 0===t&&(t=!1),(0,l.assertIsBuffer)(r),t&&64!==r.length&&(r=e.from((0,u.publicKeyConvert)(r,!1).slice(1))),(0,o.default)(64===r.length),(0,d.keccak)(r).slice(-20)},r.publicToAddress=r.pubToAddress;r.privateToPublic=function(r){return(0,l.assertIsBuffer)(r),e.from((0,u.publicKeyCreate)(r,!1)).slice(1)};r.privateToAddress=function(e){return(0,r.publicToAddress)((0,r.privateToPublic)(e))};r.importPublic=function(r){return(0,l.assertIsBuffer)(r),64!==r.length&&(r=e.from((0,u.publicKeyConvert)(r,!1).slice(1))),r};r.zeroAddress=function(){var e=(0,c.zeros)(20);return(0,c.bufferToHex)(e)};r.isZeroAddress=function(e){try{(0,l.assertIsString)(e)}catch(t){return!1}return(0,r.zeroAddress)()===e}}).call(this,t(23).Buffer)},1318:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Address=void 0;var i=n(t(199)),o=t(1250),f=t(1252),u=t(1282),a=function(){function r(e){(0,i.default)(20===e.length,"Invalid address length"),this.buf=e}return r.zero=function(){return new r((0,f.zeros)(20))},r.fromString=function(e){return(0,i.default)((0,u.isValidAddress)(e),"Invalid address"),new r((0,f.toBuffer)(e))},r.fromPublicKey=function(t){return(0,i.default)(e.isBuffer(t),"Public key should be Buffer"),new r((0,u.pubToAddress)(t))},r.fromPrivateKey=function(t){return(0,i.default)(e.isBuffer(t),"Private key should be Buffer"),new r((0,u.privateToAddress)(t))},r.generate=function(t,n){return(0,i.default)(o.BN.isBN(n)),new r((0,u.generateAddress)(t.buf,n.toArrayLike(e)))},r.generate2=function(t,n,o){return(0,i.default)(e.isBuffer(n)),(0,i.default)(e.isBuffer(o)),new r((0,u.generateAddress2)(t.buf,n,o))},r.prototype.equals=function(e){return this.buf.equals(e.buf)},r.prototype.isZero=function(){return this.equals(r.zero())},r.prototype.isPrecompileOrSystemAddress=function(){var e=new o.BN(this.buf),r=new o.BN(0),t=new o.BN("ffff","hex");return e.gte(r)&&e.lte(t)},r.prototype.toString=function(){return"0x"+this.buf.toString("hex")},r.prototype.toBuffer=function(){return e.from(this.buf)},r}();r.Address=a}).call(this,t(23).Buffer)},1319:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toCompactSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t(235),i=t(1250),o=t(1252),f=t(1267),u=t(1261),a=t(1268);function s(e,r){var t=(0,a.toType)(e,a.TypeOutput.BN);if(!r)return t.subn(27);var n=(0,a.toType)(r,a.TypeOutput.BN);return t.sub(n.muln(2).addn(35))}function c(e){var r=new i.BN(e);return r.eqn(0)||r.eqn(1)}r.ecsign=function(r,t,i){var o=(0,n.ecdsaSign)(r,t),f=o.signature,u=o.recid,s=e.from(f.slice(0,32)),c=e.from(f.slice(32,64));if(!i||"number"===typeof i){if(i&&!Number.isSafeInteger(i))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");return{r:s,s:c,v:i?u+(2*i+35):u+27}}return{r:s,s:c,v:(0,a.toType)(i,a.TypeOutput.BN).muln(2).addn(35).addn(u).toArrayLike(e)}};r.ecrecover=function(r,t,i,f,u){var a=e.concat([(0,o.setLengthLeft)(i,32),(0,o.setLengthLeft)(f,32)],64),d=s(t,u);if(!c(d))throw new Error("Invalid signature v value");var l=(0,n.ecdsaRecover)(a,d.toNumber(),r);return e.from((0,n.publicKeyConvert)(l,!1).slice(1))};r.toRpcSig=function(r,t,n,i){if(!c(s(r,i)))throw new Error("Invalid signature v value");return(0,o.bufferToHex)(e.concat([(0,o.setLengthLeft)(t,32),(0,o.setLengthLeft)(n,32),(0,o.toBuffer)(r)]))};r.toCompactSig=function(r,t,n,i){if(!c(s(r,i)))throw new Error("Invalid signature v value");var f=(0,a.toType)(r,a.TypeOutput.Number),u=n;return(f>28&&f%2===1||1===f||28===f)&&((u=e.from(n))[0]|=128),(0,o.bufferToHex)(e.concat([(0,o.setLengthLeft)(t,32),(0,o.setLengthLeft)(u,32)]))};r.fromRpcSig=function(e){var r,t,n,i=(0,o.toBuffer)(e);if(i.length>=65)r=i.slice(0,32),t=i.slice(32,64),n=(0,o.bufferToInt)(i.slice(64));else{if(64!==i.length)throw new Error("Invalid signature length");r=i.slice(0,32),t=i.slice(32,64),n=(0,o.bufferToInt)(i.slice(32,33))>>7,t[0]&=127}return n<27&&(n+=27),{v:n,r:r,s:t}};r.isValidSignature=function(e,r,t,n,o){void 0===n&&(n=!0);var f=new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),u=new i.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==t.length)return!1;if(!c(s(e,o)))return!1;var a=new i.BN(r),d=new i.BN(t);return!(a.isZero()||a.gt(u)||d.isZero()||d.gt(u))&&(!n||1!==d.cmp(f))};r.hashPersonalMessage=function(r){(0,u.assertIsBuffer)(r);var t=e.from("\x19Ethereum Signed Message:\n".concat(r.length),"utf-8");return(0,f.keccak)(e.concat([t,r]))}}).call(this,t(23).Buffer)},1320:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var i=n(t(199)),o=t(1254),f=t(1250),u=t(1252);r.defineProperties=function(r,t,n){if(r.raw=[],r._fields=[],r.toJSON=function(e){if(void 0===e&&(e=!1),e){var t={};return r._fields.forEach((function(e){t[e]="0x".concat(r[e].toString("hex"))})),t}return(0,u.baToJSON)(r.raw)},r.serialize=function(){return f.rlp.encode(r.raw)},t.forEach((function(t,n){function o(){return r.raw[n]}function f(o){"00"!==(o=(0,u.toBuffer)(o)).toString("hex")||t.allowZero||(o=e.allocUnsafe(0)),t.allowLess&&t.length?(o=(0,u.unpadBuffer)(o),(0,i.default)(t.length>=o.length,"The field ".concat(t.name," must not have more ").concat(t.length," bytes"))):t.allowZero&&0===o.length||!t.length||(0,i.default)(t.length===o.length,"The field ".concat(t.name," must have byte length of ").concat(t.length)),r.raw[n]=o}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:o,set:f}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:f,get:o})})),n)if("string"===typeof n&&(n=e.from((0,o.stripHexPrefix)(n),"hex")),e.isBuffer(n)&&(n=f.rlp.decode(n)),Array.isArray(n)){if(n.length>r._fields.length)throw new Error("wrong number of fields in data");n.forEach((function(e,t){r[r._fields[t]]=(0,u.toBuffer)(e)}))}else{if("object"!==typeof n)throw new Error("invalid data");var a=Object.keys(n);t.forEach((function(e){-1!==a.indexOf(e.name)&&(r[e.name]=n[e.name]),-1!==a.indexOf(e.alias)&&(r[e.alias]=n[e.alias])}))}}}).call(this,t(23).Buffer)}}]);
//# sourceMappingURL=0.ef75efb5.chunk.js.map