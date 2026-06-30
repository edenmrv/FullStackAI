var firstPiece = { id: 101, name: 'Ofri' };
var seoncdPiece = { country: 'Israel' };

var fixedPassport = { ...firstPiece, ...seoncdPiece };

console.log(fixedPassport);
