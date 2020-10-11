console.log('location.search',location.search);
const a = location.search;
const b = a.substr(1);
// const b = 'おはよ🤪うございます🤪⏰';
const d = decodeURIComponent(b);
console.log(b);
console.log(d);
document.querySelector('.test').innerText = d;

// http://127.0.0.1:5500/?
// %F0%9F%91%8F

// http://127.0.0.1:5500/?%E2%8F%B0