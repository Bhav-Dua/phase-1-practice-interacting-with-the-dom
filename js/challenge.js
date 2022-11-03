let isPlaying = true;
let timer = startTimer();

function startTimer() {
    return setInterval(() => {
        const time = document.querySelector('#counter');
        time.textContent = parseInt(time.textContent, 10) + 1;
    }, 1000)
}

document.querySelector('#minus').addEventListener('click', handleMinus);
document.querySelector('#plus').addEventListener('click', handlePlus);
document.querySelector('#heart').addEventListener('click', handleLike);
document.querySelector('#pause').addEventListener('click', handlePause);
document.querySelector('#comment-form').addEventListener('submit', handleSubmit);


function handleMinus() {
    const time = document.querySelector('#counter');
    time.textContent = parseInt(time.textContent, 10) - 1;
}

function handlePlus() {
    const time = document.querySelector('#counter');
    time.textContent = parseInt(time.textContent, 10) + 1;
}

function handleLike() {
    const likes = document.querySelector('.likes').children;
    const counter = document.querySelector('#counter');

    for (const like of likes) {

        const number = parseInt(like.dataset.num);
        const count = parseInt(like.dataset.count);

        if (number === parseInt(counter.textContent)) {
            like.dataset.count = count + 1;
            like.textContent = `${number} has been liked ${count + 1} times`
            return;
        }
    }

    const newLike = document.createElement('li');

    newLike.setAttribute('data-num', parseInt(counter.textContent));
    newLike.setAttribute('data-count', 1);
    newLike.textContent = `${parseInt(newLike.dataset.num)} has been liked 1 time`

    document.querySelector('.likes').appendChild(newLike);
}

function handlePause() {
    if (isPlaying) {
        isPlaying = false;
        clearInterval(timer);
        document.querySelector('#pause').textContent = 'resume';
    }
    else {
        isPlaying = true;
        timer = startTimer();
        document.querySelector('#pause').textContent = 'pause';
    }

    for (const button of document.querySelectorAll('button')) {
        if (button.id !== 'pause') button.disabled = !isPlaying;
    }
}

function handleSubmit(e) {
    e.preventDefault();

    const comment = document.createElement('p');
    comment.textContent = document.querySelector('#comment-input').value;
    document.querySelector('#list').appendChild(comment);

    e.target.reset();
}