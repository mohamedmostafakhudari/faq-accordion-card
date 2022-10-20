const dropBtns = document.querySelectorAll('.dropBtn');
dropBtns.forEach(dropBtn => dropBtn.addEventListener('click', toggle));
function toggle(e) {
    console.log(e.target);
    e.target.classList.toggle('active');
    let question = e.target.parentElement;
    let answer = e.target.parentElement.nextElementSibling;
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
    question.classList.toggle('text-primary-veryDarkDesaturatedBlue');
    question.classList.toggle('text-neutral-veryDarkGrayishBlue');
    question.classList.toggle('font-bold');
}