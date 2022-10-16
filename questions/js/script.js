window.onload = function() {
    let pageNumber = document.location.href
        .split('/').pop()
        .split('question-')[1]
        .split('.html')[0];
    localStorage.setItem('pageNumber', pageNumber);
};

function nextPage(el) {
    let pageNumber = localStorage.getItem('pageNumber');
    localStorage.setItem(`answer${pageNumber}`, el.id);
    if (pageNumber === '7') {
        window.location.href=`../result/index.html`;
    } else {
        pageNumber++;
        window.location.href=`question-${pageNumber}.html`;
    }
}

function prevPage() {
    let pageNumber = localStorage.getItem('pageNumber');
    if (pageNumber === '1') {
        window.location.href=`../index.html`;
    } else {
        pageNumber--;
        window.location.href=`question-${pageNumber}.html`;
    }
}