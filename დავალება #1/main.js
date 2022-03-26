/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
   კომენტარები გაფუჭდა თქვენი დავალებაა
   არასწორად დაწერილი კომენტარი ჩაასწოროთ
   და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



// 2 ცვლადები

/*
  მსურს ჩემი Spotify ლისტის განახლება 
  ამაში კი თქვენი დახმარება მჭირდება
  აღწერეთ თქვენი საყვარელი მომღერლის
  (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  გაითვალისწინეთ რომ ამისთვის უნდა
  გამოიყენოთ მხოლოდ (const, let)
  (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ

  const name = "Marshall";
  const middleName = "Bruce";
  const lastName = "Mathers";
  let age1 = 49;
  const birthDay = 1972;
  const birtPlace = "United States"





  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  // წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;



// >>>> კოდი დაწერეთ აქ

// ახალი კრიპტოს მაგალითი:
  
  const cryptoName = "Dato";
  const ownerName = "Dato vardidze";
  const createdDate = "2022/03/26";
  let listedprice = "3.76$";
  let quantity = 40000000;
  

// 3 მონაცემთა ტიპები

/*
  აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  დროს გაასწოროთ შეცდომა;
*/



let age = 1;
const hisName = "bob";
let isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 true

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)



// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ

console.log( num + 2);
console.log( num * 2);
console.log( num ** 2);






// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ
let myAge = 17;
let aboutMe = "I'am " + myAge + " years old"
console.log(aboutMe);
console.log(typeof aboutMe);

let numbers = 77 + 33;
console.log(typeof numbers , numbers);

let RussiaIsoccupant = true;
console.log(typeof RussiaIsoccupant , RussiaIsoccupant)



