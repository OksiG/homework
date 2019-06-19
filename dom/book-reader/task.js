const fontSize = document.getElementsByClassName('font-size');
const book = document.getElementById('book');

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function() {
        if (book.classList.contains('book_fs-big')) {
            book.classList.remove('book_fs-big');
        } else if (book.classList.contains('book_fs-small')){
            book.classList.remove('book_fs-small');
        }

        for (let j = 0; fontSize.length > j; j++) {
            if (fontSize[j].classList.contains('font-size_active')) {
                fontSize[j].classList.remove('font-size_active');
            } 
        }       
        fontSize[i].classList.add('font-size_active');    
        

        event.preventDefault(); 
    });
}