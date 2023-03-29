function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function msToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function generateRandomNumber(min,max){
    return Math.random() * (max - min) + min;
}

async function type(text, inputNode){
    inputNode.focus();
    await sleep(generateRandomNumber(800,1600));
    inputNode.value = text;
    inputNode.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}))
    await sleep(generateRandomNumber(800,1600));
    inputNode.blur();
}

function setBool(id, value){
    localStorage.setItem(id, value);
}

function getBool(id){
 let typeBool = localStorage.getItem(id);
    if(typeBool == 'true'){
        return true;
    }
    return false;
}

function setInt(id, value){
    localStorage.setItem(id, value);
}

function getInt(id){
    let value = localStorage.getItem(id);
    return parseInt(value);
}

function setString(id, value){
    localStorage.setItem(id,value);
}

function getString(id){
    const value = localStorage.getItem(id);
    return value;
}

async function awaitElement(node){
    while(true){
        try{
            const elementNode = document.querySelector(node);
            if(elementNode == null){
                console.log('await element');
            }else{
                return elementNode;
            }
        }catch(e){}
        await sleep(500);
    }
}
