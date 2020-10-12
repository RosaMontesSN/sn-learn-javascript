//
// L30S02 - Parse example
//

var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';

gs.info('length=' + libraryStr.length); // *** Script: length=186

var libraryObj = JSON.parse(libraryStr);

gs.info('length=' + libraryObj.length); // *** Script: length=3

gs.info(JSON.stringify(libraryObj, null, 4));
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