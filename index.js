// Iteration 1: Names and Input

const hacker1 = "john";
console.log(`The drivers name is ${hacker1}.`);

const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

const hacker1Lgth = hacker1.length;
const hacker2Lgth = hacker2.length;


if (hacker1Lgth > hacker2Lgth) {

    console.log(`The driver has the longest name, it has ${hacker1Lgth} characters`);
}

else if (hacker1Lgth < hacker2Lgth) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Lgth} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1Lgth} characters!`);
}

// Iteration 3: Loops */

//Iteration 3.1
const nameUppercase = hacker1.toUpperCase();
console.log(nameUppercase);

let nameWithspace = "";

for (let i = 0; i < nameUppercase.length - 1; i += 1) {
    nameWithspace += nameUppercase[i] + " ";
}
nameWithspace += nameUppercase[nameUppercase.length - 1];

console.log(nameWithspace);

//Iteration 3.2
let nameInReverse = "";

for (let j = hacker1.length - 1; j >= 0; j--) {
    nameInReverse += hacker1[j];

}
console.log(nameInReverse);

//Iteration 3.3
if (hacker1 < hacker2) {

    console.log("The driver's name goes first.")

} else if (hacker2 < hacker1) {

    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log(`What?! You both have the same name?`);
}


//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sem id nunc mollis eleifend et ac tellus. Suspendisse a placerat lectus. Donec pulvinar augue in auctor auctor. Nunc sit amet enim justo. Sed sed risus maximus, pellentesque lorem sed, auctor mi. In lacinia mauris sem, et blandit leo aliquet et. Suspendisse at lacus nec sapien rutrum dapibus at ut magna. Aliquam mi lorem, volutpat imperdiet tincidunt in, consequat eu elit. In eget ex metus. Donec et molestie enim. Praesent imperdiet ultricies lobortis. Vivamus eget metus id eros tincidunt semper. Vivamus in tortor orci. Nunc imperdiet lacinia nisl, eu ultricies quam eleifend et. Nunc in euismod risus, eget mollis neque.

Sed luctus rhoncus dictum. Vestibulum sit amet malesuada velit. Integer sed cursus tellus, sit amet rutrum nibh. Ut commodo fermentum turpis in imperdiet. In accumsan ex nec nulla efficitur, nec venenatis mi rhoncus. Aenean posuere iaculis risus, in tincidunt sapien laoreet non. Nullam scelerisque ornare sapien, eget finibus orci facilisis ut. Fusce luctus tristique tempus. Aliquam erat volutpat. Suspendisse interdum, nibh sed dignissim fermentum, nibh justo egestas tortor, id tempor diam dui ac dolor. Ut quis odio lectus.

Curabitur ultricies pharetra faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Integer placerat ultrices orci sit amet rutrum. Sed elementum a ligula ac accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet accumsan arcu ac congue. In luctus metus id mauris mattis tempus. Integer in lectus volutpat, elementum massa et, venenatis neque. Donec bibendum quam ipsum, vitae hendrerit odio lobortis iaculis. Cras dictum erat et nulla iaculis viverra. Pellentesque tortor nunc, porta dictum facilisis ac, porta in turpis.`;

let longTextNoSymbols = "";
for (let i = 0; i < longText.length; i++) {
    const c = longText[i];

    if (c == "." || c == ",") {
        longTextNoSymbols += " ";
    }
    else {
        longTextNoSymbols += c;
    }
}

const words = longTextNoSymbols.split(" ");
let wordCount = 0;
let etCount = 0;

for (i = 0; i < words.length; i++) {
    if (words[i] == "et") {
        etCount++;
    }

    if (words[i]) {
        wordCount++;
    }
}

console.log(`Word count: ${wordCount}, et count: ${etCount}`);

//Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!"

let phraseToCheckRev = "";
let phraseChars = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    const c = phraseToCheck[i].toLowerCase();

    if ((c >= "a" && c <= "z")) {
        phraseChars += c;
    }
}

for (i = phraseChars.length - 1; i >= 0; i--) {
    phraseToCheckRev += phraseChars[i];
}

if (phraseChars == phraseToCheckRev) {
    console.log("It's a palindrome");
} else {
    console.log("Not a palindrome");
} 