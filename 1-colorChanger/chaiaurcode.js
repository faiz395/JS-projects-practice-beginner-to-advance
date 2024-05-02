const all = document.querySelectorAll('.button');
all.forEach((ele)=>{
  ele.addEventListener('click',(e)=>{
    const color = e.target.id;
    document.body.style.backgroundColor=color;
  })
})

// const gray = document.querySelector('#grey');
// gray.addEventListener('click',(e)=>{
//   e.preventDefault();
//   const canvas = document.querySelector('.canvas');
//   canvas.style.backgroundColor="gray";
// })
// const white = document.querySelector('#white');
// white.addEventListener('click',(e)=>{
//   e.preventDefault();
//   const canvas = document.querySelector('.canvas');
//   canvas.style.backgroundColor="white";
// })
// const blue = document.querySelector('#blue');
// blue.addEventListener('click',(e)=>{
//   e.preventDefault();
//   const canvas = document.querySelector('.canvas');
//   canvas.style.backgroundColor="blue";
// })
// const yellow = document.querySelector('#yellow');
// yellow.addEventListener('click',(e)=>{
//   e.preventDefault();
//   const canvas = document.querySelector('.canvas');
//   canvas.style.backgroundColor="yellow";
// })