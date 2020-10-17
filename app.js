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
  brand_title.style.fontFamily = "Yamaha Reg, sans-serif";
  logo_img.src = ('img/logo_yam.png');
  logo_img.hidden = false;
  logo_img.style.height = '40px';
  logo_img.style.width = '200px';
});

honda.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'red';

  brand_title.innerHTML = 'Honda team';
  brand_title.style.fontFamily = "Honda Reg, sans-serif";
  logo_img.src = ('img/logo_honda.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '100px';
});

kawa.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'limegreen';

  brand_title.innerHTML = 'Kawasaki team';
  brand_title.style.fontFamily = "Kawasaki Reg, sans-serif";
  logo_img.src = ('img/logo_kawa.png');
  logo_img.hidden = false;
  logo_img.style.height = '40px';
  logo_img.style.width = '200px';
});

ktm.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'orange';

  brand_title.innerHTML = 'KTM team';
  brand_title.style.fontFamily = "KTM Reg, sans-serif";
  logo_img.src = ('img/logo_ktm.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '200px';
});

husq.addEventListener('click', () =>{
  bod.style.backgroundImage = 'linear-gradient(to right, #000090, #ffffff)';

  brand_title.innerHTML = 'Husqvarna team';
  brand_title.style.fontFamily = "Husqvarna Reg, sans-serif";
  logo_img.src = ('img/logo_husq.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '100px';
});

suz.addEventListener('click', () =>{
  bod.style.backgroundImage ='none';
  bod.style.backgroundColor = 'yellow';

  brand_title.innerHTML = 'Suzuki team';
  brand_title.style.fontFamily = "Suzuki Reg, sans-serif";
  logo_img.src = ('img/logo_suz.png');
  logo_img.hidden = false;
  logo_img.style.height = '100px';
  logo_img.style.width = '100px';
});

let btn_color = document.querySelector ('.btn_color'),
    btn_width_less = document.querySelector('#btn_width_less'),
    btn_width_more = document.querySelector('#btn_width_more'),
    btn_height_less = document.querySelector('#btn_height_less'),
    btn_height_more = document.querySelector('#btn_height_more'),
    pimp_me_style = document.querySelector('#pimp_me');

btn_color.addEventListener('input', () =>{
  pimp_me_style.style.color = btn_color.value
});

if(pimp_me_style.style.fontSize == ""){
  pimp_me_style.style.fontSize = '2em'
};

let new_size_str = pimp_me_style.style.fontSize;
let new_size = new_size_str.replace(/\D/g, "");

btn_size_less.addEventListener('click', () =>{
  pimp_me_style.style.fontSize = new_size * 0.9 + 'em';
  new_size_str = pimp_me_style.style.fontSize;
  new_size = new_size_str.replace("em", " ")
});

btn_size_more.addEventListener('click', () =>{
  pimp_me_style.style.fontSize = new_size * 1.1 + 'em';
  new_size_str = pimp_me_style.style.fontSize;
  new_size = new_size_str.replace("em", " ")
});