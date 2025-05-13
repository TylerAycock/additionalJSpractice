const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

// const book = getBook(3);
// book;
// //   const title = book.title
// //   const author = book.author

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// //The rest & spread operator

// //you can only palce a "rest" element at the end of an array destructuring
// //the above example shows a use of rest by adding all other genres into a new array within the array
// //The spread operator is much more common and can be used on both arrays and objects

// //if we want to create a new array including all the genres + a new one we use the spread

// const newGenres = [...genres, "epic fantasy"];

// newGenres;

// // spread operator with an object allows you to add new values and override data for other ones but you MUST use the spread operator FIRST

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 300,
// };

// updatedBook;

// //template literals
// // use the backticks to indicate to JS that it is a template literal

// const summary = `${title}, is a ${pages} page book published in ${
//   publicationDate.split("-")[0]
// }. . The book has a ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
// summary;

// //terniary operators

// //has three parts in order to work
// //condition (pages > 1000)

// const pagesrange = pages > 1000 ? "over 1000" : "less than 1000";
// pagesrange;

// console.log(`The book has ${pagesrange}`);

// //arrow functions

// //easy to create a one line fuction

// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

// const newSummary = `${title}, is a ${pages} page book published in ${getYear(
//   publicationDate
// )}. The book has a ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
// newSummary;

// //Short circuiting and logical operators

// //The && operator when the first operant is false

// console.log(true && "Some string");
// console.log(false && "Some other string");
// console.log(hasMovieAdaptation && "This book has a movie");

// //falsy values (0, '', null)
// console.log("jonas" && "some string");
// console.log(0 && "some other string");

// console.log(true || "Some string");
// console.log(false || "some string");

// console.log(book.translations.spanish);
// const spanishTranslations = book.translations.spanish || "Not Translated";
// spanishTranslations;

// //This showcases how using truthy falsy can go wrong for a 0 count
// // console.log(book.reviews.librarything.reviewsCount);

// // const countWrong = book.reviews.librarything.reviewsCount || "No Data";
// // countWrong;

// //this will only return the value when the first value is null or undefined
// // const count = book.reviews.librarything.reviewsCount ?? "no data";
// // count;

// //optional chaining

// //allows you to access properties of an object that might be null or undefined without causing an error. This allows for clean and concise code

/*

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount ?? 0;
  const libraryanything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + libraryanything;
}

// console.log(getTotalReviewCount(book))

// //map filter and reduce methods
// //they do not mutitate the original array but instead prodcue a new one

const books = getBooks();

let arr = [1, 2, 3, 4, 5, 6, 7].map((num) => num * 2);

console.log(arr);

let titles = books.map((book) => book.title);

titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

//filter method

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => ({ title: book.title }));

adventureBooks;

//reduce method THE MOST IMPORTANT ONE
//the goal of this method is to reduce the enitre array to just one value

const pages = books.reduce((sum, book) => sum + book.pages, 0);

pages;

// Sort Method
//commonly used to sort an array of objects
//NOTE sorted will mutate the original array which React HATES. Important to make a copy of the array before sorting
const x = [3, 1, 45, 6];
const sorted = x.slice().sort((a, b) => a - b);
sorted;
x;

const sortedByPages = [...books].sort((a, b) => a.pages - b.pages);
sortedByPages;

//Immutable Arrays

//1) Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  Author: "J.K. Rowling",
};

const booksAfterAddition = [...books, newBook];
booksAfterAddition;

//2) Delete a book object from Array
const booksAfterDelete = booksAfterAddition.filter((book) => book.id !== 3);
booksAfterDelete;

//3) Update a book object in the Array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 666 } : book
);

booksAfterUpdate;

*/

//Asynchronous Promises
//using the concept of promise methods
//in order to fetch data from an API we have fetch()
//we fetch the data from the string it then needs to wait until the request is processed and then downloads the data
//To accomplish this is we need to use .then()
//It will fetch the data wait until it downloads then converts it to json obj format then will run the cl with the data

/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Jonas");
*/

//using Async and Await which is Much cleaner and easier to work with

//await forces JS to wait for the data to download before it moves on

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);
console.log("Jonas");
