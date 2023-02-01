//Capitalize a Word
export function capitalize(word) {
    const FirstLetter = word.charAt(0).toUpperCase();
    const OtherLetters = word.slice(1).toLowerCase();
    return FirstLetter + OtherLetters;
}
//Calculate Horse Weight
export function calculateWeight(girth, length, redTape, blackTape) {
    let gweight = ((girth*girth) * length)/300;
    if (girth > 0 && length > 0 && redTape > 0 && blackTape > 0) {                   
        return ((gweight+ redTape + blackTape)/3).toFixed(2)

    } else if (girth > 0 && length > 0 && blackTape > 0) {               
        return ((gweight + blackTape) / 2).toFixed(2)

    } else if (girth > 0 && length > 0 && redTape > 0) {
              
        return ((gweight + redTape)/2).toFixed(2)

    } else if (girth > 0 && length > 0) {        
        return gweight.toFixed(2)
    } else {
        return null;
    }
}

//Format dates
export function formatDate(input) {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "August", "Sept", "Octr", "Nov", "Dec"
    ];
    
    const date = new Date(input);
    let year = date.getFullYear();
    let month = monthNames[date.getMonth()];
    let day = date.getDate()+1;   
    return `${month} ${day}, ${year}`

}

//random number
export function random(max){
    return Math.floor(Math.random() * max)
}