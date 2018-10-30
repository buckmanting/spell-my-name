console.log('let\s take a look');

const nameRegex = /^([Aa]{2,})r{1}o{1}n{1}$/gm;
const nameSpelling = process.argv[2];
console.log('you tried: ', nameSpelling);
const match = nameRegex.exec(nameSpelling);
if(match){
    if(match[1].length % 2 === 0){
        console.log('nice one son, you got a match!');
    }
    else{
        console.log('didn\'t match, try again!1');
    }
}
else{
    console.log('didn\'t match, try again!2');
}

