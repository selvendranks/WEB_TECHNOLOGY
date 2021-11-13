////////////////////////////////////////////selecting by tagname

// const allimages = document.getElementsByTagName('img');

// for(let img of allimages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg" ;
// }


///////////////////////////////////////////selecing  by classname

// const allimages = document.getElementsByClassName('square');

// for(let img of allimages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg" ;
// }

/////////////////////////////////////////////selecting by id


// const allimages = document.getElementsById('banner');

// for(let img of allimages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg" ;
// }

////////////////////////////////////////////query selector all-in-one-selector returns only first match/

// const allimages = document.querySelector('.square');

// const allimages = document.querySelector('img');

// const allimages = document.querySelector('#banner');

// document.querySelector('a[title="java"]);

////////////////////////////////////////////query selectorall    all-in-one-selector returns  collection of match


// const allimages = document.querySelectorAll('.square');

// const allimages = document.querySelectorAll('img');

// const allimages = document.querySelectorAll('p a');

////////////////////////////////////////////////innerText

// const alllinks = document.querySelectorAll('a');

// for(let link of alllinks){
//                link.innerText = 'click here';
// }

///////////////////////////////////////////innerHTML

// document.querySelector('p').innerHTML = '<b>drag</b>';
// document.querySelector('h1').innerHTML += '<sub>47</sub>';

/////////////////////////////////////////getAttribute

// const firstlink = document.querySelector('a');
// firstlink.getAttribute('href');

////////////////////////////////////////////setAttribute

// firstlink.setAttribute('href','www.drag.com')

//////////////////////////////////////////

// const input = document.querySelector('input:[type="text"]');
// input.type = 'color';

/////////////////////////////////////////////

// const links  = document.querySelectorAll('a')
// for(let link of links){
//     link.style.color = 'red';
//     link.style.textDecorationColor = 'crimson'
//     link.style.textDecorationStyle = 'wavy'
// }

//////////////////////////////////////getComputedStyle

// window.getComputedStyle(h1).fontSize
// window.getComputedStyle(h1).color

//////////////////////////////////////add directly to class

// h2.classList.add("purple")
// h2.classList.add("border")
// h2.classList.remove("purple")
// h2.classList.contains("border") //true
// h2.classList.contains("purple") //false
// h2.classList.toggle("purple") on and off


/////////////////////////////////// parentElement,children

// const firstbold = document.querySelector('b');
// firstbold.parentElement   // gives parent element
// firstbold.children  //array of children

///////////////////////////////////nextElementSibling ,previousElementSibling

// image = document.querySelector('img');
// image.nextElementSibling
// image.previousElementSibling

/////////////////////////////////////// create element(add image)(node)

// const newImg = document.createElement('img');
// newImg.src = 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80';
// document.body.appendChild(newImg)
// newImg.classList.add('square')

///////////////////////////////////////create element(add text)(node)  

// const text = document.createElement('h3');
// text.innerText = "i am the ultimate don";
// document.body.appendChild(text);
// document.body.prependChild(text);

/////////////////////////////////////////append (not node)

// const p = document.querySelector('p');
// p.append("i am the new boss");

// const image = document.querySelector('img')
// image.src = "https://images.unsplash.com/photo-1635274767752-0a64a3bb5464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80";
// document.body.append(image)
// / document.body.prepend(image)
 
/////////////////////////////////////////add element as sibling  ( .insertAdjacentElement(position,element))
/////////////////////////////////////////position = beforebegin ,afterbegin,beforeend,afterend

// const text = document.createElement('h3');
// text.innerText = "i am the ultimate don";
// const h1 = document.querySelector('h1');
// h1.insertAdjacentElement('afterend',text);


//////////////////////////////////////// .after,.before
// const text = document.createElement('h3');
// text.innerText = "i am the ultimate don";
// const h1 = document.querySelector('h1');
// h1.after(text);
//h1.before(text);


/////////////////////////////////// remove()

// const childr = document.querySelector('li');
// childr.remove();

// //or

// document.querySelector('li').remove()


const container = document.querySelector('#container');
const baseurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i=1;i<899;i++){

    const divi = document.createElement('div');
    const texti = document.createElement('span')
    const image = document.createElement('img');
    image.src = `${baseurl}${i}.png`; 
    texti.innerText = `#${i}`;
    divi.append(image);
    divi.append(texti);
    container.append(divi);
}



