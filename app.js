// //CHAPTER 1
// //Q1
alert("Hello users");

// //Q2
alert("Error! Please enter a valid password.");

// //Q3
alert("Welcome to Js land...\n Happy Coding!");

// //Q4
alert("Welcome to Js land");


// //CHAPTER 2

// //Q1
var userName;

// //Q2
var myName="Syed muhammad daniyal";

// //Q3
var message="Hello world";
alert(message);

// //Q4
var studentName="Jhone Doe";
var studentAge="15 years old";
var studentEducation="Certified Mobile Application Developer";
alert(studentName);
alert(studentAge);
alert(studentEducation);

// //Q5
var pizza="PIZZA";
var pizz="PIZZ";
var piz="PIZ";
var pi="PI";
var p="P";
alert(pizza+'\n'+pizz+'\n'+piz+'\n'+pi+'\n'+p);

// //Q6
var email="syeddaniyal982@gmail.com"
alert("My email address is"+email);

// //Q7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// //Q8

document.write("Yah! i can write HTML content from JavaScript");

// //Q9
var a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);


// //CHAPTER 3

// //Q1
var age= 15;
alert("i am "+age+"years old");


// //Q2
var visited=14
alert("You have visited this website"+visited+"times");

// //Q3
// var birthYear= 1998;
document.write("<br>"+"My birth year is"+birthYear+"<br>"+"Data type of my declared variable is number");

// //Q4
var VisitorName="John Doe";
var producdTitle=" 5 T-shirt(s) ";
var Quantity=" XYZ Clothing store";
document.write("<br>"+VisitorName+"ordered"+producdTitle+"on"+Quantity);


// //CHAPTER 5

// //Q1
var a,b,c;

//Q2
//Legal
var myName,_a,age,Responsive,abc2;
//Illegal

// var !myname,@age,12,Function,%abc;


//Q3
document.write('<h1>'+ "Rules for naming JS variable" +'</h1>');
document.write(" Variable names can only contain numbers,$ and _. For example $my_1stVariable" +'<br>'+ "Variables must begin with a letter or _ . For example $name, _name or name"+ '<br>'+  "Variable names are case sensitive"+'<br>'+ "Variable names should not be JS Keywords")


// //CHAPTER 6

// //Q1  Q2
var a=+prompt("Enter first number");
var b= +prompt("Enter second number");
var sum= a + b;
var sub = a - b;
var mul = a * b;
var divi = a % b;
document.write('<br>'+"sum of"+a+ "and" +b+ "is"+sum);
document.write('<br>'+"subtraction of"+a+ "and" +b+ "is"+sub);
document.write('<br>'+"multiply of"+a+ "and" +b+ "is"+mul);
document.write('<br>'+"division of"+a+ "and" +b+ "is"+divi);



// //Q3
var val = prompt("Enter value");
document.write("<br>"+"value after variable declaration is:" +" "+val);
var initial=5;
document.write("<br>"+"Initial value is:"+" "+initial);
var ini= ++initial;
document.write("<br>"+"value after increment is:"+" "+ini);
var ad= ini+7;
document.write("<br>"+"value after addition is:"+" "+ad);
var dec= --ad;
document.write("<br>"+"value after decrement is:"+" "+dec);
var rem= dec % 3;
document.write("<br>"+"The remainder is:"+" "+rem);

// //Q4
// var CostOfMovie= 600;
var CostOfBuy=5;
var total=CostOfBuy*CostOfMovie;
document.write("<br>"+"The total cost to buy 5 tickets to a movie is:"+" "+total+"PKR");

// //Q5

document.write("<br>"+"<h1>"+"Table of 4"+"</h1>");
document.write("<br>"+"4X1=4");
document.write("<br>"+"4X2=8");
document.write("<br>"+"4X3=12");
document.write("<br>"+"4X4=16");
document.write("<br>"+"4X5=20");
document.write("<br>"+"4X6=24");
document.write("<br>"+"4X7=28");
document.write("<br>"+"4X8=32");
document.write("<br>"+"4X9=36");
document.write("<br>"+"4X10=40");

//Q6
var cel=25;
var  Fahrenheit=+prompt("Enter Fahrenheit ");
var C=(Fahrenheit-32)*5/9;
var f=(25 * 9 / 5) +32;
document.write("<br>"+"25 C is"+ C +"F");
document.write("<br>"+"70F is"+ f +"C");

//Q7
var price1= 650;
var price2= 100;
var quan1=3;
var quan2=7;
var shipping=100;

var item1= price1*quan1;
var item2= price2*quan2;
var total= item1+item2+shipping;
document.write("<br>"+"<h1>"+"Shopping Cart"+"</h1>");
document.write("<br>"+" Price of item 1 is 650");
document.write("<br>"+" Quantity of item 1 is 3");
document.write("<br>"+" Price of item 2 is 100");
document.write("<br>"+" Quantity of item 2 is 7");
document.write("<br>"+" Shipping charges is 100");
document.write("<br>");
document.write("<br>");
document.write("<br>"+" Total cost of your order is "+" "+total);


// //Q8
document.write("<br>"+"<h1>"+"Mark Sheet"+"</h1>");
var totMarks=980;
var obtainMark=804;
var per= (obtainMark/totMarks)*100;
document.write("<br>"+" Total Marks : 980");
document.write("<br>"+" Marks obtained : 804");
document.write("<br>"+" Percentage :"+" "+per);


// //Q9
var usd=10;
var saudiR= 25;
var pak= (10*104.80)+(25*28);
document.write("<br>"+"<h1>"+" Currency in PKR :"+" </h1>");
document.write("<br>"+" Total Currency in PKR is"+" "+pak);

// //Q10
var ad=5;
var mul=10;
var divd=2;
var cal=(ad*mul)/divd;
document.write("<br>"+" Total :"+" "+ cal);


// //Q11
var cyear=2016;
var bYear=1992;
var ag=cyear-bYear
document.write("<br>"+"<h1>"+" Age Calculator :"+" </h1>");
document.write("<br>"+" Current year : 2016");
document.write("<br>"+" Birth year : 1992");
document.write("<br>"+" Your age is :"+" "+ag);

// //Q12

var radius= 20;
var circ= 3.142;
var area= 2*radius*circ;
document.write("<br>"+"<h1>"+" The Geometrizer"+" </h1>");
document.write("<br>"+" The  Radius of a circle  is: 20");
document.write("<br>"+" The  Circumference  is: 125.6799999");
document.write("<br>"+" The area is :" +area);

// //Q13
document.write("<br>"+"<h1>"+" The Lifetime suppply Calculator"+" </h1>");
document.write("<br>"+" The  Favourite Snack: Chocolate chip");
document.write("<br>"+"Current age : 15");
document.write("<br>"+"Estimated maximum age : 65");
document.write("<br>"+"Amount of snacks per day : 3");
document.write("<br>"+"You will need 150 chocolate chips to last until the ripe old age of 65");



//CHAPTER 6-9

//Q1
var a= 10;
document.write("<br>"+"<h1>"+" Result:"+" </h1>");
document.write("<br>"+"The value of a is :"+ a);
document.write("<br>"+".....................");
document.write("<br>"+"The value of ++a is :"+ ++a);
document.write("<br>"+"Now the value of a is :"+ a);
document.write("<br>"+"The value of a++ is :"+ a++);
document.write("<br>"+"Now the value of a is :"+ a);
document.write("<br>"+"The value of --a is :"+ --a);
document.write("<br>"+"Now the value of a is :"+ a);
document.write("<br>"+"The value of a-- is :"+ a--);
document.write("<br>"+"Now the value of a is :"+ a);


//Q3
var nameGre= prompt("Enter your name");
if(nameGre=!" "){
    alert("Welcome")
}
else{
    alert("Enter name")
}


// //Q6
var sub1=prompt("Enter first subjust ");
var sub2=prompt("Enter Second subjust ");
var sub3=prompt("Enter Third subjust ");
document.write("<br>"+"<h5>"+"Subjects Total marks Obtained marks Percentage"+"</h5>")
document.write("<br>"+sub1+ " "+ " "+ " "+"100"+ " "+ " "+ " "+ " "+ " "+ "54"+ " "+ " "+ " "+ " "+ " "+"54%");
document.write("<br>"+sub2+ " "+ " "+ " "+"100"+ " "+ " "+ " "+ " "+ " "+ " 54"+ " "+ " "+ " "+ " "+ " "+"54%");
document.write("<br>"+sub3+ " "+ " "+ " "+"100"+ " "+ " "+ " "+ " "+ " "+ "48"+ " "+ " "+ " "+ " "+ " "+"48%");
document.write("<br>"+" "+ " "+ " "+ " "+"300"+ " "+ " "+ " "+ " "+ " "+ " "+ " "+ " "+"48%");



//CHAPTER 9-11

//Q1

var City=prompt("Enter City name");
var ka="karachi";
if(City==ka){
    alert("welcome to city of light")
}
else{
    alert("entered name is different")
}


//Q2
 var gen=prompt("Enter Gender ");
var male="male";
var female="female";
if(gen==male){
    alert("Good Morning Sir")
}
else if (gen==female){
    alert(" Good Morning Ma’am")
}

else{
    alert("wrong input")
}


//Q3
var signal=prompt("Enter Signal color ");

if(signal=="Red"){
    alert("Must Stop")
}
else if (signal=="Yellow"){
    alert("Ready to move")
}

else if (signal=="Green"){
    alert("Ready to move")
}
else{
    alert(" Wrong input")
}



//Q4
var fuel=+prompt("Enter remaining fuel")
if(fuel<=0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("Go on")
}


//Q6
document.write("<br>"+"Marksheet");
document.write("<br>"+"Total Marks : 300");
document.write("<br>"+"Obtained Marks : 219");
document.write("<br>"+"Percentage : 73%");
var grade=prompt("Enter  Percentage");
if(grade<=59){
    document.write("<br>"+"Grade F")
    document.write("<br>"+"Sorry")
}
else if(grade>=60 && grade<=69){
    document.write("<br>"+"Grade B")
    document.write("<br>"+"You need to improve")
}
else if(grade>=70 && grade<=79){
    document.write("<br>"+"Grade A")
    document.write("<br>"+"Goood")
}
else if(grade>=80 && grade<=99){
    document.write("<br>"+"A one")
    document.write("<br>"+"Excellent")
}
else{
    document.write("<br>"+"Enter corrent input")
}


//Q7

var secN0=7;
var guessNo=+prompt("Guess number");
if(guessNo==secN0){
    alert("“Bingo! Correct answer");
}
else if(++guessNo==secN0){
    alert("Close enough to the correct answer")
}
else{
    alert("sorry")
}


//Q8
var noDiv=+prompt("Enetr number");
var  divide=3;
var corr= noDiv%divide;
if(corr==0){
    alert("divi")
}
else{
    alert("no")
}

//Q9
var check=+prompt("Enter number");
var even= check%2
if(check=!even)
{
    alert("no is even")
}
else{
    alert("odd")
}

//Q10

var t=+prompt("Enter tempeture");
if(t>=40){
    document.write("<br>"+"It is too hot outside")
  
}
else if(t>=30 &&t<=39){
    document.write("<br>"+"The Weather today is Normal")

}
else if(t>=20 && t<=29){
    document.write("<br>"+"Today’s Weather is cool")
    
}
else if(t>=10 && t<=19){
    document.write("<br>"+"“OMG! Today’s weather is so Cool")
   
}
else{
    document.write("<br>"+"Enter corrent input")
}


//Q11
var firstInput=+prompt("Enter First Input");
var secondInput=+prompt("Enter Second Input");
var op=prompt("Enter operation Add Sub Mul Div Rem");

if(op==Add){
    var opAdd= firstInput+secondInput;
    alert(opAdd)
}
else if(op==Sub){
    var opSub=firstInput-secondInput;
    alert(opSub)
}

else if(op==Mul){
    var opMul=firstInput*secondInput;
    alert(opMul)
}

else if(op==Div){
    var opdiv=firstInput/secondInput;
    alert(opdiv)
}
else if(op==Rem){
    var opRem=firstInput%secondInput;
    alert(opRem)
}
else{
    alert("Wrong")
}



//CHAPTER 12-13

//Q1
var num=prompt("Enter character");
if(num===A){
("Upper case")
}
else if(num==Z){
    ("Upper case")
    }
else if(num==z){
        ("Lower case")
        }
else if(num==a){
            ("Lower case")
            }
else{
alert("num")
            }

//Q2
var equal1=+prompt("Enter first number");
var equal2=+prompt("Enter second number");

if(equal1>equal2){
    alert(equal1+" is Greater")
}
else if(equal1<equal2){
    alert(equal2+" is Greater")
}
else if(equal2==equal1){
    alert("Both are equal")
}
else{
    alert("Invalid")
}

//Q3
var pos=+prompt("Enter num")
if(pos<0){
    alert("negative")
}
else if(pos>0){
    alert("Positive")
}
else if(pos==0){
    alert("No is zero")
}

//Q4
var vowel=prompt("Enter vowel");
if(vowel==a){
    alert("vowel")
}
else if(vowel==e){
    alert("vowel")
}
else if(vowel==i){
    alert("vowel")
}
else if(vowel==o){
    alert("vowel")
}
else if(vowel==u){
    alert("vowel")
}
else{
    alert("not a vowel")
}

//Q5
var password=+prompt("Enter password");
var pass=12345;
if(pass==password){
    alert("Correct! The password you entered matches the original passwor")
}
else if(password!=pass){
    alert("Incorrect password")
}
else if(pass==""){
    alert(" Please enter your password")
}

//CHAPTER 14-16
//Q1-7
var students=[];
var anyBoolen = ["yes","no"];
var numArr=["1","2"];
var mixarr=["1","ali","yes"]
var qua=["SSC","HSC","BCS","BCOM","BS","MS","MPHIL","PHS"];
document.write("<br>"+"QUALIFICATION");
document.write("<br>"+qua+'<br/>');
 
//Q8
var arrName=["Michael","John","Tonyy"];
var arrScr=["320","230","480"];
var arrPer=["64","46","96"];
document.write("<br>"+"Score of"+" "+arrName[0]+" "+"is"+" "+arrScr[0]+".Percentage is:"+arrPer[0]);
document.write("<br>"+"Score of"+" "+arrName[1]+" "+"is"+" "+arrScr[1]+".Percentage is:"+arrPer[1]);
document.write("<br>"+"Score of"+" "+arrName[2]+" "+"is"+" "+arrScr[2]+".Percentage is:"+arrPer[2]);

//Q9


//Q10
var scrAsc=[320,230,480,120];
 document.write("<br>"+"Scores of students:"+scrAsc);
 scrAsc.sort()
document.write("<br>"+"Ordered scores of students:"+scrAsc)

// //Q11
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>"+"Cities list :");
document.write("<br>"+cities);
var selected1=prompt("Select cities");
var selected2=prompt("Select cities");
var selected3=prompt("Select cities");
var bb=[selected1,selected2,selected3];
document.write("<br>"+"Selected cities :");
document.write("<br>"+bb);

//Q12
var arr1 = ["This","is","my","cat"];
document.write("<br>"+"Array:");
document.write("<br>"+arr1);
document.write("<br>"+"String:");
document.write("<br>"+ arr1.join(" "));

//Q13
var devices=["keyboard","mouse","printer","monitor"];
document.write("<br>"+"Devices");
document.write("<br>"+devices);
document.write("<br>"+"Out:");
document.write("<br>"+devices[0])
document.write("<br>"+"Out:");
document.write("<br>"+devices[1])
document.write("<br>"+"Out:");
document.write("<br>"+devices[2])
document.write("<br>"+"Out:");
document.write("<br>"+devices[3])


//Q14
var devices2=["keyboard","mouse","printer","monitor"];
document.write("<br>"+"Devices");
document.write("<br>"+devices2);
document.write("<br>"+"Out:");
document.write("<br>"+devices2.pop())
document.write("<br>"+"Out:");
document.write("<br>"+devices2.pop())
document.write("<br>"+"Out:");
document.write("<br>"+devices2.pop())
document.write("<br>"+"Out:");
document.write("<br>"+devices2.pop())


//CHAPTER 17-20

//Q1
var arr1A = ["A", "B", "C", "D"]; 
var arr1B = [1, 2, 3, 4, 5];

// //Q2
var ar1=[0,1,2,3];
var ar2=[1,0,1,2];
var ar3=[2,1,0,1];
document.write("<br>"+ar1.join(" "));
document.write("<br>"+ar2.join(" "));
document.write("<br>"+ar3.join(" "));

//Q3
var numeric=["1","2","3","4","5","6","7","8","9","10"];
var crr=""
for (var i = 0; i < numeric.length; i++) {
   crr+=numeric[i]+"<br>";
}
document.write("<br>"+crr+"<br>");

//Q4
var startTable=+prompt("Enter a number to show a multiplication table");
var end=+prompt("Enter a length of a multiplication table");
var tab=" "
for(var i=startTable; i<=end; i++){
tab+=i+"x"+end+"="+(i*end)+"<br>"
}
document.write("<br>"+"Multiplication of table 2 length 15")
document.write(tab)


//Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var p=" ";
for (var i=0 ; i<fruits.length; i++){
p+=fruits[i]+"<br>";
} 
document.write("<br>"+p+"<br>");

for(var j=0; j<=array.forEach(element,i); j++){
    fruits[j]+"<br>"
}
document.write("<br>"+fruits[j]+"<br>");

//Q6
var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
var reverseCounting=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
var even=[ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
var odd=[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
var series=[ "2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
document.write("<br>"+ "Counting:");
document.write("<br>"+ counting);
document.write("<br>"+ "Reverse Counting:");
document.write("<br>"+ reverseCounting);
document.write("<br>"+ "Even:");
document.write("<br>"+ even);
document.write("<br>"+ "Odd:");
document.write("<br>"+ odd);
document.write("<br>"+ "Series:");
document.write("<br>"+ series);

//Q7
var A = ["cake","Apple pie","cookies","chips","patties"]
var bak=prompt("Welcome to ABC bakery.What do you want to ordor sir/ma'am");
if (bak==A[0]){
    document.write("Cake is on inder 0")
}
else if (bak==A[1]){
    document.write("Apple pie is on inder 1")
}
else if (bak==A[2]){
    document.write("cookies is on inder 2")
}
else if (bak==A[3]){
    document.write("chips is on inder 3")
}
else if (bak==A[4]){
    document.write("patties is on inder 0")
}
else {
    document.write("We are sorry"+ bak+ " is not available")
}


//Q8
var find = [24, 53, 78, 91, 12];
var largest =0;
for (i=0; i<=largest;i++){
    if (find[i]>largest) {
        var largest=find[i];
    }
}
document.write("<br>"+"Array items is: "+" "+find);
document.write("<br>"+"The largest number is: "+" "+largest);

//Q9
var findSmall = [24, 53, 78, 91, 12];
var min =Math.min.apply(Math, findSmall);
document.write("<br>"+"Array items is: "+" "+findSmall);
document.write("<br>"+"The Small number is: "+" "+min);

//Q10
var n=5
for(i=1; i<=20; ++i){
    document.write("<br>"+n*i)
}


//CHAPTER 21-25

//Q1
var firstName=prompt("Enter First name");
var lastName=prompt("Enter Last namr");
alert(firstName+" "+lastName+" "+"Congratz");


//Q2
var mobileModel=prompt("Enter Mobile model");
var n= mobileModel.length;
alert("My favorite phone is"+" "+mobileModel +"\n" + "The length of the string is:"+" "+n);


//Q3
var pak=["P","a","k","i","s","t","a","n"];
document.write("<br>"+"String:"+" "+pak.join(""));
var m= pak.indexOf("n")
document.write("<br>"+"Index of n is"+" "+m)


//Q4
var hell=["H","e","l","l","o","W","o","r","l","d"];
document.write("<br>"+"String:"+" "+hell.join(""));
var m= hell.lastIndexOf("d")
document.write("<br>"+"Index of l is"+" "+m)


//Q5
var pakCharc=["P","a","k","i","s","t","a","n"];
document.write("<br>"+"String:"+" "+pakCharc.join(""));
var m= pakCharc[3];
document.write("<br>"+"Index of n is"+" "+m);


//Q7
var isl=["H","y","d","e","r","a","b","a","d"];
document.write("<br>"+"City:"+""+isl.join(""));
isl.splice(0,5,"I","s","l","a","m");
document.write("<br>"+"After Replacement:"+""+isl.join(""));


//Q8
var txt="Ali and Sami are best friends.";
var txt2="They play cricket and football together."
var newText= txt.replace("and","&");
var newText2=txt2.replace("and","&");
document.write("<br>"+""+newText+newText2);

//Q9

var val= "472";
document.write("<br>"+"Value is 472");
document.write("<br>"+"Type:"+""+typeof val);
a = parseInt(val);
document.write("<br>"+"Value is 472");
document.write("<br>"+"Type:"+""+typeof a);


//Q10
var pen=prompt("Enter");
var UpperPen= pen.toUpperCase();
document.write("<br>"+"User Input:"+""+pen);
document.write("<br>"+"UpperCase:"+""+ UpperPen);


//Q12
var no="35.36" ;
var remDec=no.replace('.','')
alert(remDec);


//Q14
var  A = ["cake","Apple pie","cookies","chips","patties"]
var bak=prompt("Welcome to ABC bakery.What do you want to ordor sir/ma'am");
var upp=bak.toLowerCase()
if (upp==A[0]){
    document.write("Cake is on inder 0")
}
else if (upp==A[1]){
    document.write("Apple pie is on inder 1")
}
else if (upp==A[2]){
    document.write("cookies is on inder 2")
}
else if (upp==A[3]){
    document.write("chips is on inder 3")
}
else if (upp==A[4]){
    document.write("patties is on inder 0")
}
else {
    document.write("We are sorry"+ bak+ " is not available")
}

//Q16
var university=[];
var z= university.push("u","n","i","v","e","r","s","i","t","y","o","f","k","a","r","a","c","h","i");
document.write("<br>"+ university.join(" "));


//Q17
var arr=[]
arr.push(prompt("Enter value"));
document.write("<br>"+"User input:"+" "+arr);
z=arr.lastIndexOf('n');
document.write("<br>"+"User input:"+" "+z);

//Q18
var no="The quick brown fox jumps over the lazy dog" ;
var mm=no.split("the").length;
document.write("<br>"+"Text: The quick brown fox jumps over the lazy dog");
document.write("<br>"+"occurrences of word “the” in given string are "+" "+mm);



//CHAPTER 26-30

//Q1
var number=+prompt("Enter positive number");
document.write("<br>"+"Number:"+" "+number);
number=Math.round(number);
document.write("<br>"+"Round of value:"+" "+number);
mmm=Math.floor(number);
document.write("<br>"+"Floor value:"+" "+mmm);
zzz=Math.ceil(number);
document.write("<br>"+"Ceil value:"+" "+zzz);


//Q2
var number=-2.673;
document.write("<br>"+"Number:"+" "+number);
number=Math.round(number);
document.write("<br>"+"Round of value:"+" "+number);
mmm=Math.floor(-2.673);
document.write("<br>"+"Floor value:"+" "+mmm);
zzz=Math.ceil(-2.673);
document.write("<br>"+"Ceil value:"+" "+zzz);


//Q3
var ab=prompt("Enter value");
var bb=Math.abs(ab);
document.write("<br>"+"The absolute value of"+" "+ab+" " +"is"+" "+bb);


//Q4
var bigDecimal = Math.random(6);
var improvedNum = (bigDecimal * 6) + 1; 
 var numberOfStars = Math.floor(improvedNum);
 document.write("<br>"+"Random dice value"+numberOfStars);
 var big = Math.random(6);
var improve = (big * 6) + 1; 
var numberOf = Math.floor(improve);
 document.write("<br>"+"Random dice value"+numberOf);

//Q5
for(var i=1 ; i<=2 ; i++){
    aa=Math.floor(Math.random(i)*3);
    if(aa==1){
        document.write("<br>"+"2 Random dice value: Heads");
    }
    else if(aa==2){
        document.write("<br>"+"1 Random dice value: Tails");
    }
}

//Q6

var ram=Math.floor(Math.random() * 100);
document.write("<br>"+"Random number 1 till 100 :"+ram);


//Q8
var rem=Math.floor(Math.random() * 10);
document.write("<br>"+"Random number 1 till 10 :"+rem);
var corr=prompt("Enter num")
if(rem==corr){
    alert("Great")
}
else{
    alert("Try again")
}


//CHAPTER 31-34

//Q1
var dat= new Date();
alert(dat)
var day= dat.getDay()

//Q2
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()];
alert("Current month : "+ thisMonth);


//Q3
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()];
var three= thisMonth.substring(0,3)
alert("Current month : "+ three);


//Q4
var dat= new Date();
var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day= week[dat.getDay()];
if(day==Thursday){
    alert("Funday")
}
else if(day==Sunday){
    alert("Funday")
}
else{
    alert("Work")
}

//Q5
var dd= new Date();
var ne= dd.getUTCDate();
if(ne<=15){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}


//Q7
var d= new Date();
var currentHrs = d.getHours();
alert(currentHrs)


//CHAPTER 35-38


//Q1
function dat(){
    var a= new Date();
    alert(a);
}
dat()



//Q2
var first=prompt("Eter first name");
var last=prompt("Enter Last name");
function greetUser(first , last)
{
alert("Your full name"+first+last);
}
greetUser(first,last)

//Q3
var firstNO=+prompt("Eter first No");
var secondNo=+prompt("Enter Last No");

function add(firstNO, secondNo){
    var addNo=firstNO+secondNo;
    alert(addNo)
}
add(firstNO,secondNo)

//Q4
var firstNO1=+prompt("Enter first No");
var secondNo2=+prompt("Enter Last No");
var Opera=prompt("Enter operation");
var sub=firstNO1-secondNo2;
var add=firstNO1+secondNo2;
var div=firstNO1/secondNo2;
var mul=firstNO1*secondNo2;


function cal(firstNO1,secondNo2,Opera){
    if (Opera=='sub'){
        subtra=firstNO1-secondNo2;
       
        alert(subtra)
    }
    if (Opera=='add'){
        subtra=firstNO1+secondNo2;
       
        alert(subtra)
    }
    if (Opera=='div'){
        subtra=firstNO1/secondNo2;
       
        alert(subtra)
    }

    if (Opera=='mul'){
        subtra=firstNO1*secondNo2;
       
        alert(subtra)
    }
   
}
cal(firstNO1,secondNo2,Opera)


//Q5
var sq=+prompt("Enter number");
function dou(sq){
    dub=sq*sq;
    alert(dub)
}
dou(sq)

//Q6
var x=+prompt("Enter number");
function fac(inp){
    var ans=1;
    for(var i=0; i<=inp; i++){

    
ans= ans*i;
    }
    
    alert (ans)
    
}
fac(inp)


//Q7
var startNum=+prompt("Enter start Number");
var endNum=+prompt("Enter end number");
function num(startNum,endNum){
    for(var j=startNum; j<=endNum ;j++){
        document.write(j)
    }
  
}
num(startNum,endNum)

//Q9
var width=+prompt("Enter width");
var height=+prompt("Enter height");
function area(width,height){
    ans=width*height
    alert(ans)
}
area(width,height)



//CHAPTER 38-42

//Q2
var year=+prompt("Is a entered year is a leap year?");
function ansLeap(year){
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        alert("is a leaf year"+" "+year)
    }
    else{
        alert(" is not a leaf year"+" "+year)
    }

}

ansLeap(year)


//Q3
var a=+prompt("Enter A");
var b=+prompt("Enter B");
var c=+prompt("Enter C");
function areaOfTriangle(a,b,c){
    var S= (a+b+c)/2
    alert("Area is"+" "+S);
}
areaOfTriangle(a,b,c)

//Q4
function average (){
    var sub1=50;
    var sub2= 70;
    var sub3= 87;
    var sum=(sub1+sub2+sub3);
    var total= sum/3

}
function  Percentage(){
    average ()
    var sub1=50;
    var sub2= 70;
    var sub3= 87;
    var sum=(sub1+sub2+sub3);
    var Per= (sum/300)*100
    alert("Your percentage is"+" "+Per+"%")
   
}
Percentage()


//CHAPTER 43-48

//Q1
function display(){
    alert("Welcome to my website")
}


//Q2
function meg(){
    alert("Thanks for purchasing phone from us")
}


//Q3
function del(){
    document.getElementById("ind1").remove();
}

//Q4

//Q5

//CHAPTER 49-52

//Q1

function myFunction() { 
    var x =   document.getElementById("myText").value; 
    
    document.getElementById( "demo1").innerHTML = x; 
      var y =  document.getElementById("pass").value; 
  
  document.getElementById(  "demo2").innerHTML = y;
    var z =  document.getElementById("confPass").value; 

document.getElementById( "demo3").innerHTML = z;
    }

function expand(){
    var des="The book description is the pitch to the reader about why they should buy your book. When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales."
document.getElementById("exp").innerHTML=des;

}

//CHAPTER 58-67

//Q1 i
function tryIT() {
    
    var gtI= document.getElementById("main-content").childNodes[1].childNodes[0];
    document.getElementById("p11").innerHTML = gtI;
}

ii
var c = document.getElementById("main-content").children.length;
document.getElementById("p12").innerHTML=c

//Q2 i

 var x = document.getElementById("form-content").nodeType;
 document.getElementById("p13").innerHTML=x
