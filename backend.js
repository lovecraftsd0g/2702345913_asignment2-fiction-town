
function like() {
    let likenum = document.getElementById('like_num');
    let currentLikes = parseInt(likenum.innerHTML);
    likenum.innerHTML = currentLikes + 1;
}