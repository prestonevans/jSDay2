// const day = 5;

// switch (day) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
//     case 7:
//         console.log('Sunday')
//         break;
//     default:
//         console.log('Ooops')
//         break;
// }

// const num = 1;
// switch (num) {
//     case 1:
//         console.log('One')
//         break;
//     case 2:
//         console.log('Two')
//         break;
//     case 3:
//         console.log('Three')
//         break;
//         case 4:
//             console.log('Four')
//             break;
//         case 5:
//             console.log('Five')
//             break;
//         case 6:
//             console.log('Six')
//             break;
//         case 7: 
//             console.log('Seven')
//             break;
//         case 8:
//             console.log('Eight')
//             break;
//         case 9:
//             console.log('Nine')
//             break;
//     default:
//         console.log('Please try again...')
//         break;
// }

document.querySelector('#Greeting').addEventListener('click', () => {
        
        let select = document.querySelector('select');
        let timeOfDay = select.options[select.selectedIndex].innerText;
        switch (timeOfDay) {
            case '12 am':
            case '1 am':
            case '2 am':
            case '3 am':
            case '4 am':
            case '5 am':
            case '6 am':
            case '7 am':
            case '9 am':
            case '10 am':
            case '11 am':
            case '12 pm':
                alert('Good Morning')
                break;
            case '1 pm':
            case '2 pm':
            case '3 pm':
            case '4 pm':
                alert('Good afternoon')
                break;
            case '5 pm':
            case '6 pm':
            case '7 pm':
            case '8 pm':
                alert('Good evening')
                break;
            case '9 pm':
            case '10 pm':
            case '11 pm':
                alert('Good night!!!!')
                break;
        }
    })
// let myReply = 'nO'
// switch (myReply.toUpperCase()) {
//     case 'YES':
//         console.log('You said Yes')
//         break;
//     case 'NO':
//         console.log('You said No')
//         break;
//     case 'MAYBE':
//         console.log('You said Maybe')
//         break;
//     default:
//         console.log(`You said ${myReply}`)
//         break;
// }

// let shit = 'hello' 
// for (let i = 0; i < shit.length; i++) {
//     console.log(shit[i]);
// }

// shit === 'hello' ? console.log('Yes') : console.log('No')

// let userinput = prompt('enter a number');
// if(userinput) {
//     alert('hello')
// } else {
//     userinput = prompt('try again')
// }

// const num = 7;
// let myNum = num || 7;
// console.log(myNum)
// function modOf3or5(num) {
//     if(num % 5 === 0 && num % 3 === 0) {
//         alert('FizzBuzz');
//     } else if(num % 5 === 0) {
//         alert('Buzz');
//     } else if (num % 3 === 0) {
//         alert('Fizz');
//     } else {
//         alert(num);
//     }
// }

// function try2(num) {
//     let ans = '';
//     if(num % 3 === 0) {
//         ans += 'Fizz'
//     }
//     if(num % 5 === 0) {
//         ans += 'Buzz'
//     }
//     console.log(ans ? ans : num)
// }
// try2(14)


// let media = 'magazine';

// switch (media.toLowerCase()) {
//     case 'book':
//         console.log('Boo')
//         break;
//     case 'magazine':
//         console.log('Meh')
//         break;
//     case 'cd':
//         console.log('Better')
//         break;
//     case 'dvd':
//         console.log('Nice!!')
//         break;
//     default:
//         console.log('Ummmm...')
//         break;
// }

// userInput = prompt('Enter a number...')
// modOf3or5(userInput);