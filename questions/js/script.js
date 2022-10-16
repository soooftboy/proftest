let pageNumber = document.location.href
        .split('/').pop()
        .split('question-')[1]
        .split('.html')[0];

// function nextPage(el) {
//     localStorage.setItem(`answer${pageNumber}`, el.id);
//     if (pageNumber === '7') {
//         window.location.href=`../result/index.html`;
//     } else {
//         pageNumber++;
//         window.location.href=`question-${pageNumber}.html`;
//     }
// }

console.log(document.querySelector('.answer'));



document.querySelector('#documentologist').onclick = () => {
    localStorage.setItem('documentologist', +localStorage.getItem('documentologist') + 1);
    if (pageNumber === '7') {
        window.location.href=`../result/index.html`;
    } else {
        pageNumber++;
        window.location.href=`question-${pageNumber}.html`;
    }
}

document.querySelector('#electronic').onclick = () => {
    localStorage.setItem('electronic', +localStorage.getItem('electronic') + 1);
    if (pageNumber === '7') {
        window.location.href=`../result/index.html`;
    } else {
        pageNumber++;
        window.location.href=`question-${pageNumber}.html`;
    }
}

document.querySelector('#it').onclick = () => {
    localStorage.setItem('it', +localStorage.getItem('it') + 1);
    if (pageNumber === '7') {
        window.location.href=`../result/index.html`;
    } else {
        pageNumber++;
        window.location.href=`question-${pageNumber}.html`;
    }
}


document.querySelector('.question__back').onclick = () => {
    function prevPage() {
        if (pageNumber === '1') {
            window.location.href=`../index.html`;
        } else {
            pageNumber--;
            window.location.href=`question-${pageNumber}.html`;
        }
    }
}