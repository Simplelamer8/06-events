let txt = document.getElementById('text');
let btn = document.querySelector('button');

btn.addEventListener("click", () => {
  txt.style.display = "none";
})

let button = btn;

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//answer: 1 and then 2

let remove_button = document.querySelectorAll('.remove-button');

let arr = Array.from(remove_button);

console.log(remove_button);

arr.map((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  })
})



let i = 1;
let window1 = document.querySelector('.window');

for(let li of window1.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

let buttons = document.querySelectorAll('.arrow');

buttons[1].addEventListener('click', () => {
  for (let li of window1.querySelectorAll('li'))
  {
    if (+li.style.left.substring(0, li.style.left.length - 2) <= -1170)
    {
      break;
    }
    let val = +li.style.left.substring(0, li.style.left.length - 2);
    li.style.left = `${val - 390}px`;
    console.log(li.style.left);
  }
})

buttons[0].addEventListener('click', () => {
  for (let li of window1.querySelectorAll('li'))
  {
    console.log(li.style.left);
    if (li.style.left === '0px' || li.style.left === "")
    {
      break;
    }
    let val = +li.style.left.substring(0, li.style.left.length - 2);
    li.style.left = `${val + 390}px`;
  }
})

let ul = document.querySelector('.click');

ul.addEventListener('click', () => {
  console.log("aclik");
  let children = ul.querySelectorAll('li');
  console.log(children);
  for (child of children)
  {
    if (child.style.display === 'block' || child.style.display === "")
    {
      child.style.display = 'none';
    }
    else 
    {
      child.style.display = 'block';
    }
  }
})