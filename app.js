let bod = document.querySelector('#bod'),
    yam = document.querySelector('#yam'),
    honda = document.querySelector('#honda'),
    kawa = document.querySelector('#kawa'),
    ktm = document.querySelector('#ktm'),
    husq = document.querySelector('#husq'),
    suz = document.querySelector('#suz');

yam.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'blue';
});

honda.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'red';
});

kawa.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'limegreen';
});

ktm.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'orange';
});

husq.addEventListener('click', () =>{
  bod.style.backgroundImage = 'linear-gradient(to right, #000090, #ffffff)';
});

suz.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'yellow';
});