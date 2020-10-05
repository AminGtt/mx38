let bod = document.querySelector('#bod'),
    yam = document.querySelector('#yam'),
    honda = document.querySelector('#honda'),
    kawa = document.querySelector('#kawa'),
    ktm = document.querySelector('#ktm'),
    husq = document.querySelector('#husq'),
    suz = document.querySelector('#suz'),
    header_div = document.querySelector('#brand_font'),
    brand_title = document.querySelector('header h1'),
    logo_img = document.querySelector('header img');

yam.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'blue';

  brand_title.innerHTML = 'Yamaha team';
  logo_img.src = ('img/logo_yam.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '500px';
});

honda.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'red';

  brand_title.innerHTML = 'Honda team';
  logo_img.src = ('img/logo_honda.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '100px';
});

kawa.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'limegreen';

  brand_title.innerHTML = 'Kawasaki team';
  logo_img.src = ('img/logo_kawa.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '500px';
});

ktm.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'orange';

  brand_title.innerHTML = 'KTM team';
  logo_img.src = ('img/logo_ktm.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '200px';
});

husq.addEventListener('click', () =>{
  bod.style.backgroundImage = 'linear-gradient(to right, #000090, #ffffff)';

  brand_title.innerHTML = 'Husqvarna team';
  logo_img.src = ('img/logo_husq.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '100px';
});

suz.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'yellow';

  brand_title.innerHTML = 'Suzuki team';
  logo_img.src = ('img/logo_suz.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '100px';
});