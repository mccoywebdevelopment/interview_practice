/*
    The encoder is responsible for marking the position of bits.
    the position are marked with a key.
*/
const decoded = [['x','w','v','u','t','s','r','q'],
                 ['p','n','m','l','k','j','h','g'],
                 ['f','e','d','c','b','a','9','8'],
                 ['7','6','5','4','3','2','1','0']];

const encoded = [['x','p','f','7','w','n','e','6'],
                 ['v','m','d','5','u','l','c','4'],
                 ['t','k','b','3','s','j','a','2'],
                 ['r','h','9','1','q','g','8','0']];

// Convert character to 8-bit
function charToStringBits(char){
    var binaryText = char.charCodeAt(0).toString(2);

    while(binaryText.length<8){
        binaryText = "0" + binaryText;
    }

    return binaryText;
}

// Convert 8-bit to array
function stringToArray(string){
    return string.split('');
}

// Reverse String
function reverseString(text){
    var array = text.split('');
    array.reverse();

    return array.join('');
}

// Given a string of length # return # of 8-bit array(s)
function textToBinaryArrays(isLeastSignificantBit,text,numberOfCharacters){
    var array = [];

    if(isLeastSignificantBit){
        text = reverseString(text);
    }

    for(var i=0;i<text.length;++i){
        array.push(stringToArray(charToStringBits(text.charAt(i))))
    }

    /*  Add 0 8-bit at the beginning like the first example if 
        it's a least significant bit and the length is not equal
        to 4.
    */
    if(numberOfCharacters>text.length && isLeastSignificantBit){

        while(numberOfCharacters>array.length){
            array.unshift(['0','0','0','0','0','0','0','0']);
        }
    }else if(numberOfCharacters>text.length){

        while(numberOfCharacters>array.length){
            array.push(['0','0','0','0','0','0','0','0']);
        }
    }

    return array;
}

function findIndex(item,encoder){
    var position = {
        wordIndex:null,
        bitIndex:null
    }
    for(var i=0;i<encoder.length;++i){
        for(var ix=0;ix<encoder[i].length;++ix){
            if(item===encoder[i][ix]){
                position.wordIndex = i;
                position.bitIndex = ix;
                return position;
            }
        }
    }

    return null;
}

function getStringFormat(arrays){
    var text = "";
    for(var i=0;i<arrays.length;++i){
        text = text + "      " + arrays[i].join('');
    }
    return text;
}

/*
    1. loop through rawArrays
    2. get the associated place of the decoder array
    3. find the position of the docoder item in the encoder
    4. push the 
*/
function encode(rawArrays,decoder,encoder){
    var encodeArr = [];
    for(var i=0;i<rawArrays.length;++i){
        encodeArr.push([]);
        for(var ix=0;ix<rawArrays[i].length;++ix){
            var encoderItem = encoder[i][ix];
            var pos = findIndex(encoderItem,decoder);
            encodeArr[i].push(rawArrays[pos.wordIndex][pos.bitIndex]);
        }
    }
    return encodeArr;
}

// Format
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFormat Example:");
console.log("Decoded/Raw:")
console.log(getStringFormat(decoded));
console.log("Encoded:");
console.log(getStringFormat(encoded));

// Example #1
var text = "A"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #1 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #2
var text = "FRED"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #2 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #3
var text = " :^)"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #3 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log(dec);

// Example #4
var text = "foo"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #4 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #5
var text = " foo"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #5 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #6
var text = "foot"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #6 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #7
var text = "BIRD"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #7 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #8
var text = "...."
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #8 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #9
var text = "^^^^"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #9 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #10
var text = "Woot"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #10 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #11
var text = "no"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #11 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #12
var text = "a@b."
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #12 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);

// Example #12
var text = "cmmc"
var rawArrays = textToBinaryArrays(true,text,decoded.length);
var encodeArrays = encode(rawArrays,decoded,encoded);
var dec = parseInt(getStringFormat(encodeArrays).replace(/\s/g, ''), 2);
console.log("\n\n\n\n\n\nExample #12 input: \""+text+"\"")
console.log("Decoded/Raw:")
console.log(getStringFormat(rawArrays));
console.log("Encoded:");
console.log(getStringFormat(encodeArrays));
console.log("Decimal:");
console.log(dec);