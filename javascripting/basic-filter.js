 function isShort(txt) {
   return txt.length < 50
 }

 function getMessage(obj) {
   return obj.message
 }

 function getShortMessages(arr) {
   return arr.map(getMessage).filter(isShort)
 }

module.exports = getShortMessages;