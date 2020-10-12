//
// L30S01 - Stringify and Parse
//

var bookList = [{
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
];

gs.info(bookList); // That's not very helpful!
// *** Script: [object Object],[object Object],[object Object]

var bookListStr = JSON.stringify(bookList);
gs.info(bookListStr); // I can read it - sort of
// *** Script: [{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]

var bookListStrFormat = JSON.stringify(bookList, null, 4);
gs.info(bookListStrFormat); // Ah - that's better!
/*
*** Script: [
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
]
*/