const hamburger = document.querySelector('.hamburger'),
      nav = document.querySelector('.nav'),
      navList = document.querySelector('.nav-list'),
      sandwich = document.querySelector('.hamburger__lines');

let showMenu = false


const toggleMenu = () => {
  if(!showMenu) {
    sandwich.classList.add('toggle');
    nav.classList.add('toggle');
    navList.classList.add('toggle');

    showMenu = true
  } else {
    sandwich.classList.remove('toggle');
    nav.classList.remove('toggle');
    navList.classList.remove('toggle');

    showMenu = false
  }

}

hamburger.addEventListener('click', toggleMenu);


const skill = document.querySelector('.skill');

const typewriter = new Typewriter(skill, {
  loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Programmer')
    .pauseFor(2500)
    .start();

const canDo = document.querySelector('.services__can-do');

const effectCan = new Typewriter(canDo, {
  loop: true
});

effectCan.typeString('Can')
    .pauseFor(1500)
    .deleteChars(3)
    .typeString("CAN'T")
    .pauseFor(1500)
    .deleteAll()
    .pauseFor(50)
    .start();

