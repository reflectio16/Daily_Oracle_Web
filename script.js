const generateNumber = num => {
    return Math.floor(Math.random() * num);
}

const messageBox = {

    dailyLuckyNumber:['1', '2', '3', '4', '5', '6', '7', '8', '9'],

    dailyLuckyColor:['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Black', 'White'],

    dailyAdvice:['Stay at home and chill', 'Time to socialize', 'Go for a walk', 'Good time to start exercise']
    
}


function generateMessage () {

//------- Empty array for the end result -----//
let adviceArray = []

//------- Iterate over the messegeBox ------- //
for(let prop in messageBox) {

    //--- Variable for holding the result of the generated selection through messegeBox properties ---///
    let luckySelection = generateNumber(messageBox[prop].length)

    
    switch(prop) {
        case 'dailyLuckyNumber':
            adviceArray.push(`Your lucky daily number "${messageBox[prop][luckySelection]}".`)
            break

        case 'dailyLuckyColor':
            adviceArray.push(`Your lucky daily color "${messageBox[prop][luckySelection]}".`) 
            break
            
        case 'dailyAdvice':
            adviceArray.push(`Your daily advice is "${messageBox[prop][luckySelection]}".`)  
            break  
    }

}
      const finalArray = adviceArray.join('<br>');
      document.getElementById('messageOutput').innerHTML = finalArray;

}







