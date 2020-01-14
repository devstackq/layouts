0cc5b647-c1df-4637-891a-dec35c318583 - value setting cpu amd

//hacker rank 10 days JS
//--------------------//
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    let textIn = parameterVariable;
    // textIn = a +b /2;
    // if(a != b %2 ===0)
    console.log(textIn)
}
greeting(45);

function evenOrNot(a,b) {

	let res = a / b *2;
	if(res % 2 ===0) {
		console.log('even num');
	} else {
		console.log('odd num');
	}
}
evenOrNot(10, 5);

function isOdd(num) {
	return num %2;
}
idOdd(3); //1 true

function performOperation(secondInteger, secondDecimal, secondString) {    
	const firstInteger = 4;
	const firstDecimal = 4.0;   
	const firstString = 'HackerRank ';
	
	let intSum = (firstInteger + (+secondInteger) );
	let decimalSum = (firstDecimal + (+secondDecimal));
	let stringSum = (firstString.concat(secondString));

	console.log(intSum);
	console.log(decimalSum);
	console.log(stringSum);

}

performOperation(4, 2.34, 'sucks hackerrunk)');
//parseInt()
//ParseFloat
//concat()

//vowel and consonants гласный соглайсный

function vac(symbol) {
	let vowels = ["a", "e", "o", "i", "u"];

	for (let value of symbol) {
		if(vowels.includes(value)) 
			console.log('vowel is ' + value);
	}

	for (let value of symbol) {
		if(!vowels.includes(value)) {
			console.log('consonans is ' + value);
		}
	}
}
vac('javascriptloops');


function isPositive(a) {
	if(a == 0) {
		throw Error('Error zero')
	} else if(a < 0) {
		throw Error('Error negative');
	} else {
		return 'Yes';
	}
}
isPositive(0);

//наследование прототипа

Reactangle.prototype.area = function() {
	return(this.w*this.h);
};
..дочерний класс

class Square extends Rectangle {
	constructor(s) {
		super(props);
		this.h = s;
		this.w = s;
	}
}

//polygon class
class Polygon {
	constructor(sides) {
		this.sides = sides
	}
	perimeter() {
		let sum =0;
		for(let i=0; i < this.sides.length; i++) {
			sum = sum + this.sides[i];
		}	
		return sum;
		
	}
}
let triangle = new Polygon([3,6,7]);
console.log(triangle.perimeter()); //16



// btn click count ++
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Button</title>
</head>
<body>
<button  id="btn" onclick="( ()=>this.innerHTML++) ()"> 0 </button>
</body>
</html>


const button = document.querySelector('#btn');
let count = 0;

button.addEventListener('click', (e) => {
	count += 1;
	return button.innerHTML = `${count}`;
})

function getArea(length, width) {
	let area;
	// Write your code here
	return length * width;

	
	return area;
}




function getPerimeter(length, width) {
	let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    
    return perimeter;
}



const PI = Math.PI;
let r = readLine();
console.log(PI * Math.pow(r, 2));
console.log(2 * PI * r);


// area, perimter, rectngle
function Rectangle(a, b) {
	this.length = a;
	this.width =  b;
	this.area = a * b;
	this.perimeter = 2 * (a+b); 
}

//arrow func, devide modul if i % 2 ==0
return i * 2 else i * 3

function modifyArray(nums) {
	let something =function(n) { 
		if(n % 2 == 0) {
			return n *2
		} else {
			return n * 3
		}

	}
	let newArray = nums.map(something); //1 nums map, 2 something/ map func each element - callback function something
	return newArray;
}
modifyArray([1,3,4,6,8]); //3,9, 8, 12, 16

//other method 
function modifyArray(nums) {
	return nums.map(n => n = (n%2==0) ? n*2: n*3);   
}
//other method
let nums =  [2,4,5,7,8];
var newArray=[];

nums.map(function(n) {
	if(n % 2 ==0) {
		newArray = n *2;
		
	} else {
		newArray = n * 3;
	}
	return newArray;
});

	//bitwise operator

	function getMaxLessThanK(n,k) {
		let max_anb = 0;
		for(let b = n; b > 0; b--) {
			for(let a = b-1;  a > 0; a--) { 
					if((a & b ) < k  && (a & b) > max_anb) { //1loop a4,b5 < k(4) // 2loop 3,4 < 4// 3loop 2,3 < 4 true
						max_anb = (a & b); // 3 loop max = 2, 3
					}
				}
			}
			return max_anb;
		}
		getMaxLessThanK(5,4);
//count similar objects

//regexp String  starts with the prefix Mr., Mrs., Ms., Dr., or Er

function regexVar() {

	let re = /^(?:Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;
	return re;
}

//dateString day name

function getDayName(dateString) {


	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return weekDays[new Date(dateString).getDay()];


}
getDayName(15/09/2017); //Thursday
//


function getCount(objects) {
	let ctr=0;
	for(let i =0; i < objects.length; i++) {
		if(objects[i].x == objects[i].y) {
			ctr++;
		}
	}
	console.log(getCount( [
		{x:1,y:1}, { x:2,y:3}, {x:4, y:7}, {x:88, y:88} ] ))

	modify([2,4,5,7]);
//if statement grade

function getGrade(score) {
	let grade;
    // Write your code here
    if (score > 25) {
    	grade = 'A';
    } else if (score > 20) {
    	grade = 'B';
    } else if (score > 15) {
    	grade = 'C';
    } else if (score > 10) {
    	grade = 'D';
    } else if (score > 5) {
    	grade = 'E';
    } else {
    	grade = 'F';
    }
    return grade; 
}

console.log(getGrade(16) );


//switch alpahbet group
function getLetter(s) {
	let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]): // if will be simialar letter
        return 'A';
        break;
        case 'bcdfg'.includes(s[0]):
        return 'B';
        case 'hjklm'.includes(s[0]):
        return 'C';
        case 'npqrstvwxyz'.includes(s[0]):
        return 'D';
    }   
    return letter;
}

//template literal
function sides(literal, ...expression) {
	let A = expression[0]; // give value 0 elem, destructor perimter
	let P = expression[1]; // area
	let answers = [];
	let s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4; //2304 - 2240 = 64; sqrt 64 = 8; 48 + 8 /4 =14
	let s2 = (P - Math.sqrt(Math.pow(P, 2) -16 * A  )) /4;
	


	answers.push(s1); //push inside array answer - s1 value
	answers.push(s2);

	return answers.sort();  // sort asc
}

console.log(sides( 'The area is: , .\nThe perimeter is: ', 140, 48 ));

//perimter = 2 (a+b) 4+5 * 2 =18
//area  = a *b 4*5 = 20
//second max num is array 
function getSecondLargest(nums) { //2,17,3,9
	let large = Math.max(...nums);// large 17

	let secondLarge = 0;

	for(let num of nums) {  // 1loop = 2
		if(num > secondLarge && num != large) { 
			secondLarge = num; // 1loop = 2, 2 loop = 5, 2loop false, 3loop false
		}
	}
	return secondLarge;
}
let result = getSecondLargest([2,5,9,18]);
console.log('второе большое по значению число является ', result);



//----------------------//





// prompt
var nums = prompt("...").split(" ").map(Number);

//hacker rank challenage
//array elem sum
let arr = [1, 2, 3, 5, 6, 10];

function arraySum(arr) {
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		total = total + arr[i];
	}
	return total;
}
console.log(arraySum(arr));

//compare values between two arrays
function compareTriplets(a, b) {
	let aliceScore = 0;
	let bobScore = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			aliceScore = aliceScore + 1;
		}
		if (a[i] < b[i]) {
			bobScore = bobScore + 1
		}
	}
	return [aliceScore, bobScore]
}

console.log(compareTriplets([1, 2, 3], [5, 22, 10]));


// big sum arr

function bigSum(arr) {
	let result = 0;
	arr.forEach((value) => {
		result = result + value
	})
	return result;
}

console.log(bigSum([10002, 20006, 30007]))

function bigSum(arr) {
	let result = 0;
	for(let i =0; i < arr.length; i++) {
		result = result+ arr[i];
	}
	return result;
}
console.log(bigSum([10006, 100004, 20004, 20005]));

//matrix diagonal

function differenceDiagonal(input) {
	inputAll = input.split("\n");
	let currentLine = 0;
	let numberOfInputs = parseInt(inputAll[currentLine].trim(), 10);

	currentLine = 
}


//array line sum
function arrayLineSum(arr, range) {
	let sum=0;
	for(let i = 0; i< range; i++) {
		for(let j =0; j< range; j++){
			sum = sum + arr[i][j];
		}
	}
	return sum;
}

console.log(arrayLineSum([[2,2,4], [1,7,2], [2,9,5]], 3 ));


//regexp first and last vowel symbol
function regexVar(str) {

	let re = new RegExp(/^([aeiou]).\+1$/);
	return re;

}
regexVar('abcda');


//array row sum

let arr = [
[2, 5, 3, 0],
[6, 4, 7],
[1, 9]
];
let res = [];

for(let i=0;i<arr.length;i++){
	for(let j=0;j<arr[i].length;j++){
		res[j] = (res[j] || 0) + arr[i][j];
	}
}

console.log(res);



// diagonal difference
let arr =[ 
[11,2,4],
[5,8,1],
[3,-4, 12]
];

function diagonalDifference(arr) {
	let diNum1 = 0; let diNum2 = 0;

	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(i == j) {
				diNum1 = diNum1 + arr[i][j];
				console.log(arr[i][j]); //31
			} 
			if(i == arr.length - j -1) { // 0 == [2]; 1 == [1]; 2 == [0]
				diNum2 = diNum2 + arr[i][j];
				console.log(arr[i][j]); //15
			}
		}
	}
	return Math.abs(diNum2 - diNum1); //-16
}

console.log(diagonalDifference(arr));

// i [ [j],[j],[j] ] two array nested list


//22 - 5
// 22/ 5 = 4
// a = 5; b = 2;
// 5/2 = 1
// a = 2; b =1;
// a = 2; b = 0;

// //evklid algoritm
// 23, 5
// 23 - 5;
// 18 -5
// 13-5
// 8-5
// b 5- a3
// a 3 - b2
// b 2 - a1
// 1 


function evklid(a,b) {
	while(a != b) {
		if (a > b) {
			a = a -b;
		} else {
			b = b- a;
		}

	}
	return a;
}
console.log(evklid(22,5));


function evklidAlgoritm(a,b) {
	// let a = 0;
	// let b = 0;
	let c;

	while(b>0) {
		c = a % b;
		a = b;
		b =c;
	}

	return a,b;
}

console.log(evklidAlgoritm(22,5));


// pos, negative and  0 = accum their value, variable after that 
// devide by array length, and toFixed(6)


//2 
arr.map(el => {
	el ==0 ? zero++ : (el > 0 ? positive++ : negative++)
})

//1 
arr.forEach(el => {
	if(n >0) {
		positive++;
	} else if(n <0) {
		negative++;
	} else {
		zero++
	}
})
console.log(   (positive / length).toFixed(6) );
console.log( (negative / length).toFixed(6));
console.log( (zero / length).toFixed(6) );


var arr = [4,-6, 0, 8, 3, -5];
function plusMinus(arr) {
	
	let positive = 0, negative = 0, zero = 0, length = arr.length;

    // for (let i = 0; i < length; i++) {
    //     if (arr[i] > 0) {
    //         positive++;
    //     } else if (arr[i] < 0) {
    //         negative++;
    //     } else {
    //         zero++;
    //     }
    arr.forEach(el => {
    	if(n >0) {
    		positive++;
    	} else if(n <0) {
    		negative++;
    	} else {
    		zero++
    	}
    })
    console.log(   (positive / length).toFixed(6) );
    console.log( (negative / length).toFixed(6));
    console.log( (zero / length).toFixed(6) );
}

plusMinus([-4, 3, -9, 0, 4, 1,]);

m.breeze__



function starcase1(n) {

	for(let  i= 1; i <= n; i++){
		console.log('#'.repeat(i).padStart(n)
			)
	}
}
starcase1(6);

function starcase(n) {
	for(let i =0; i < n; i++) {
		console.log(i, n);
		console.log("x".repeat(n-i-1)+ "#".repeat(i+1));
	}
}
starcase(6);

var n= 10; //дано
i = 0 .. счетчик
i<=0 условие для цикла
i++ счетчик увеличвается
repeat - сколько
padStart - где

for(let i = 1; i <= n; i++) { //цикл
	console.log(i, n);
	console.log(  
		'*'.repeat(i).padStart(n)
		)
}
//reverse text

function reverse(text) {
	let revElem = '';
	for(var i= text.length -1; i >= 0; i--)
		console.log(i, text[i]);
	revElem= revElem+ text[i];
	return revElem;
}

reverse('torrent');

	//reverse num

	function reverseNum(nv) {
		nv = nv+'';
		try {
			return nv.split('').reverse().join('');
		}
		catch(e) {
			console.log(e.message); 
			
		} finally {
			console.log(res);
		}
	}

	reverseNum(54233);
//split поделит на строки, toString()
//reverse - обратный  массив из элементов
// join соединяет обратно элементы в 1 целое 


//algorim at js

//factorial smultiply all elem from 1 to n.length -1
// 1x2x3x4x5x6 = 720
function factorial(n) {
	total = 1;
	for(let i =1; i<= n; i++) {
		total = total * i;
		console.log(total);
	}
	return total
}
console.log(factorial(6));
//alternative
function(n) {
	return n*(n+1) /2;
}




//fibonacci = recursion
previous + prev previuous
fib(9 )0,1, 1,2 ,3,5,8,13, 21  = 34


function fibonacci(n) {
	let fib =[];
	fib[0] = 0;
	fib[1]=1;
	for(let i =2; i < n; i++) {
		fib[i] = fib[i-2] + fib[i-1];
		console.log(fib);
	}
	return fib;
}
console.log(fibonacci(9));


//array elements sum, and max and min group
 //28 06
 function miniMaxSum(arr) {

 	let sum =0;
 	let min = +Infinity;
 	let max = -Infinity;

 	for(let i =0; i < arr.length; i++) {
sum = sum + arr[i]; //15 1+2+3+4+5
if(arr[i] < min) {
min = arr[i]; //1
}if(arr[i] > max) {
	max = arr[i]; //5
}

}
console.log(sum - max, sum - min); // 15 - 5 =10; 15- 1 = 14;
}

miniMaxSum([1,2,3,4,5]);

//find  max min elemen in array
function arrMaxMin(arr) {
	let min = +Infinity, max = -Infinity;
	let statmin=0, statmax=0;
	for(let i=0; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
			statmin++;
		}
		if(arr[i] > max) {
			max = arr[i];
			statmax++;
		}
	}
	console.log(max, min);
}



//how length caтdles

function birthdayCakeCandles(ar) {
	let max = Math.max(...ar);

	let result = ar.filter(c => c === max);
	return result.length;

}
birthdayCakeCandles([2, 3, 4, 5, 4]); //2 длинных свечи задуты

//split(",") удаялет в свтроке, , :, '' и т.д и возвращает в виде массива
slice(0, -2) от 0 до предпоследнего эленмета выбирает и возвращает
join(":") соединяет элементы в массиве, в данном примере  через двоеточия :

//time conversion
function timeConversion(s) {

let AMPM = s.slice(-2); // вырежем строка и в массив два псоледних элемента  AM or PM
let timeArr = s.slice(0, -2).split(":"); // разбить строку на массив [0] hour[1] minutes[2] seconds ["00" : "22" : "32"] массив строк от 0 до -2

// spli(':') удаляет из строки указанный элемент и возвращаетв виде массива
if(AMPM == "AM" && timeArr[0] === "12") {// if AM and [0] === 12 => [0] = 00:22:32
	timeArr[0] = "00";
} else if(AMPM === "PM") {  
	// everything with PM can just be mod'd and added with 12 - the max will be 23
 timeArr[0] = (timeArr[0] % 12) + 12; //5% 12 /+ 12 = [17, 13, 02].join(":") =>'17:13:02'
}
return timeArr.join(":"); //array join with : and return string array come back stringss
}

timeConversion('05:13:02PM'); 
//------------------- aloritm js// 


//anagram
function anagram(input){
// let input = 'zoz, guga, dola, lol, sobka';
let words = input.split(", "); // через запятую сделал массив из строквс
console.log(words);

for(let i =0; i < words.length; i++) {
	let word = words[i];
	let alphabet = word.split("").sort().join(""); // every word sort ASCI 'oozz, aggu' etc

	for(let j =0; j < words.length; j++) {
		if( i === j ) {
			continue;
		}
		let other = words[j];
		if(alphabet=== other.split("").sort().join("")){
			console.log(word + " - " + other + " (" + i + ", " + j + ")");

		}
	}
}
}
anagram('zoz, guga, dola, lol, aksob, sobka, gagu');

//other method anagram
function isAnagram(str1, str2) {
	if(str1.length !== str2.length) {
		return false;
	}``

	 let sortStr1 = str1.toLowerCase().split('').sort().join(''); //1letter words, 2 string to array, sort Asci, Ascending, 4 array to string
	 let sortStr2 = str2.toLowerCase().split('').sort().join(''); 

	return (sortStr1 === sortStr2); //loma mola - true angram

}

isAnagram('mola', 'loma');

//countApplesAndOranges
function countApplesAndOranges(s, t, a, b, apples, oranges) {

	let numApples = 0;
	let numOranges = 0;

	for (let i = 0; i < apples.length; i++) {
		if ((apples[i] + a) >= s && (apples[i] + a) <= t) {
			numApples++;
		}
	}

	for (let i = 0; i < oranges.length; i++) {
		if ((oranges[i] + b) >= s && (oranges[i] + b) <= t) {
			numOranges++;
		}
	}    

//charc= count
function charCount(str) {
	let result ={};
	for(let i =0; i < str.length; i++) { // 1 loop h
	let char = str[i].toLowerCase(); // char =h
	if(result[char] > 0) { // false
		result[char]++;
	}	 else {
		result[char] = 1; // true +1
	}
}
	return result; // h =1
	

}
charCount('holla Amigozz');


//oher count char

function charCount(str) {
	let obj = {};
	for (let char of str) {
		char =  char.toLowerCase();
		if(/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

charCount('single Text Soap');

O(n*n) nested loops

function printAllPairs(n) {
	for(let i =0; i< n; i++) {
		for(let j=0; j < n; j++) {

			console.log(i,j);
		}
	}
}

// elements multiply at 2
function double(arr) {
	let newArr = [];
	for(let i=0; i< arr.length; i++) {
		newArr.push( 2 * (arr[i] ));
	}
	return newArr;
}
console.log(double([1,2,4]));


// anagram 3 method
function validAnagram(first, second) {
	if(first.length !== second.length) {
		return false;
	}
	const lookup = {};

	for(let i =0; i< first.length; i++) {
		let letter = first[i];

		lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
	}
	for(let i=0; i< second.length; i++) {
		let letter = second[i];
		if(!lookup[letter]) {
			return false;
		}  else {
			lookup[letter] -=1;
		}
		
	}
	return true;


}
validAnagram('daf', 'fdad');


//dar 

//  let a,b;
// //rectangle
// a = +prompt('enter a side ');
// b = +prompt('enter b side ');

// console.log('perimter is'+ 2*(a+b));
// console.log('area is '+ (a*b));

//area triangle
// let a,b,c,sum, area;
// a = +prompt('enter a side '); //3,4,5
// b = +prompt('enter b side ');
// c = +prompt('enter c side ');

// if(a + b >c && b+c > a && c+a > b) {
// 	sum  = (a + b + c) / 2;
// area = Math.sqrt(sum* (sum - a) * (sum -b) * (sum -c)); // 6* 6-3 * 6-4 * 6-5 //36 sqrt = 6
// console.log('area triangle is ' + area);	
// console.log('perimeter is ' + sum*2);
// } else {
// 	console.log('no such triangle');
// }


//average value
let a = +prompt();
let b = +prompt();
let c = +prompt();
//4,3,5 a
//6,7,3 a

//5,8,12 b
//12,6,4 b

//5,7, 6 c
// 5, 11, 7 c

if( (a >b && a<c) || (a <b && a>c ) ) {
	console.log(a);
} else if( (b> a&& b <c) || (b< a && b>c) ) {
	console.log(b);
} else {
	console.log(c);
}



//area geron formula triangle

area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//jangoroo function
//Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.
x1 0,v1 3, x2 4, v2 2 - yes

3 !== 2 &&
4 % 1 =0 
Yes

function kangoroo(x1,v1, x2,v2) {
	if( (x1< x2 ) && (v1 < v2)) //false, true
		return "NO"
	else {
		if ((v1 != v2) && ((x2 - x1) % (v1 -v2) )  == 0)
			return 'YES';
		else {
			return 'NO';
		}
	}
}


x1 =2
v1 =1
x2 =1 
v2 =2
x1 =x1+v1 = 3
x2 = x2+v2 = 3


function sumZero(arr) {
	let left = 0;
	let right = arr.length -1;
	while(left < right ) {
		let sum = arr[left] + arr[right];
		if(sum === 0) {
			return [arr[left], arr[right]];
		} else if(sum > 0) {
			right --;
		} else {
			left++;
		}
	}
}

sumZero([-5,-4,-3,-2,-1,0,1,5,6,7,9]);

function countUniqueValue(arr) {
	if(arr.length ===0) return 0;
	let i =0;
	for (let j =1; j < arr.length; j++) {
		if(arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i+1;
}

countUniqueValue([1,2,2,4,6,6,7,12,55]); //7


let books = ['story my life', 'little pig', 'cat and pussy', 'pussyhunter', 'Bittlejuice'];

let addBooks = books.push('how i will be dictator'); 

let delBook = books.pop();


push = добавляет элемент в конец массива
pop - удаляет элемент в конце массива


let addBooksFirst = books.unshift('Live and life between 30 from 60 age'); //books[0] - new elem, return count elem

let delBookFirts = books.shift(); //del books[0] - return 'name' del elem
unshift - добавляет элемент в начало массива
shift -	удаляет элемент в начале массива

indexOf - поиск элемента в массива - return index элемента

let pos = books.indexOf('pussyhunter'); //4

let removeItem = books.splice(pos, 1); // del pussyhunter

books.forEach(function(item, index ) {
	console.log(item, index);
})

// массив передается по ссылке, а не копируется - в функциях

let n =2, pos =0; // delete 2 elem from 0 index

let removeItems = books.splice(pos, n); // запишет удаленнеы жлементы

removeItems =  запишет удаленнеы жлементы
books - текущий массив изменен

splice = заменяет элементы в массиве или удаляет
slice = копирует массив 
split() - разбивает на массив(строку на символы)
join() - склеивает элемменты в массив
let newBooks = books.slice(); //create new array newBooks - elem from books



//objects, contructor

function Tree(sort, color, where, owner, methodTree) {
	this.sort = sort;
	this.color = color;
	this.where = where;
	this.owner = owner;
	this.methodTree = methodTree;
}

let bekzhan = {name: 'Bekzhan', age: 25, status: 'life'};

let karaagash = new Tree('blacktree', 'black', 'central asia', bekzhan,
	methodTree: function() {
		console.log(this.owner.age + this.sort);
	});




//link object;
let strawberry = {
	sort: 'blue',
	price: 21,
	color: 'blue'
}
let x = strawberry;
x - link => object strawberry
// get value object

let x = strawberry.sort;


//function js
function changeValueObject(object) {
	object.sort = 'red';
}
let strawberry = {
	sort: 'blue',
	price: 21,
	color: 'blue'
};
let x = strawberry.sort; //blue
changeValueObject(strawberry);

let y = strawberry.sort; //red

функция изменит значения свойств объекта - глобально

let square = function(num) {
	return num * num;
}
square(5);
25
let l = square(9);

функция в качестве аргумента, передается другой функции

//В следующим коде наша функция принимает функцию, которая является function definition expression, и выполняет его для каждого элемента принятого массива вторым аргументом.

function map(f,n) {
	res = [];

	for(let i=0; i < n.length; i++)
		res[i]= f(n[i]);
	return res;

}

fs = function(x) {
	return x *x*x;
}
numbers = [1,2,3,4,7,12];
cube = map(fs, numbers);
console.log(cube);


//function decalaration - работает поднятие - hoisting
function joinClub() {
	...
}

//function expression = не работает hoisting

let makeMoney = function(n,x) {
	n*n +x /2;
}

//функция может принимать аргументом - лбъект, примитивы, массивы

//функиця вызывает саму себя
function factorial(n) {
	if ((n === 0) || (n === 1))
		return 1;
	else
		return (n * factorial(n - 1));
}

factorial(170);


//лбласть видимости функции

вложенные функции

var num1=90,
num2 = 44,
name = 'Villi';

function getScore() {
	var num1=9,
	num2 =2;

	function add() {
		return name+ ' scored ' + (num1+num2);
	}
	return add();
}

getScore();


Вложенная функция имеет доступ ко всем инструкциям внешней функции.
Вложенная функция формирует closure: она может использовать аргументы и переменные внешней функции, в то время как внешняя функция не может использовать аргументы и переменные вложенной функции.

//

function addSquare(a,b) {
	function square(x) {
		return x*x;
	}
	return square(a) + square(b);
}
let a = addSquare(2,5);
a;
29
let b = addSquare(6, 8);

//аргументы для обоих фунций - внешней и внутренней 
function oustide(x) {
	function inside(y) {
		return x+y;
	}
	return inside;
}
outside(4)(7);

arguments = сколько угодно аргумментов принимает

// var multiply = function(){
// 	return arguments + arguments;
// }

// var getSum = (a,b) => a + b;

// var evenArr = arr.filter(el => el %2 ===0);

//nested functions

function A(a) {
	
	function B(b){
		
		function C(c) {
		console.log(a*b*c);

		}
		C(4);
	}
	B(8);
}
A(2);

//НОК, НОД
//LCM, GCD
function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

//НОД GCD
function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) { // y6- / y2/ y0 false return x =2
    var t = y; //t6 / t2 /
    y = x % y; //y =2 / y0 6%2
    x = t; //x =6/ x2/
  }
  return x; //x2
}
//GCD
console.log(gcd_two_numbers(24, 36)); // 12
//LCM
console.log(lcm_two_numbers(24,36)); //24*36 /12 == 72


