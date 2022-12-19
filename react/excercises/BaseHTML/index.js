document.title = 'My Site';

const headerEle = document.createElement('header');
headerEle.style.backgroundColor = 'pink';
const pHeaderEle = document.createElement('p');
pHeaderEle.innerHTML = 'My Site <strong>Strong</strong>';
pHeaderEle.classList.add('lead');
headerEle.appendChild(pHeaderEle);

const h1Ele = document.createElement('h1');
h1Ele.innerText = 'Test';

const divEle = document.createElement('div');
divEle.id = 'mainDiv';

const imgEle = document.createElement('img');
imgEle.src = "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png";
imgEle.style.width = '300px';
imgEle.style.height = 'auto';

const pEle = document.createElement('p');
pEle.innerText = "Lorem ipsum dolor sit amet.";

const ulEle = document.createElement('ul');
ulEle.classList.add('mainList');
ulEle.classList.add('withBullets');
const arr = ['one', 'two', 'three'];
arr.forEach(item => {
    const liEle = document.createElement('li');
    liEle.innerText = item;
    ulEle.appendChild(liEle);

    liEle.addEventListener('click', function () {
        this.style.color = this.style.color === 'red' ? 'unset' : 'red';
    });
})

divEle.appendChild(imgEle);
divEle.appendChild(pEle);
divEle.appendChild(ulEle);

document.body.appendChild(headerEle);
document.body.appendChild(h1Ele);
document.body.appendChild(divEle);

// Add event listners
const pTagItems = document.getElementsByTagName('p');
// console.log(pTagItems);
for (let i = 0; i < pTagItems.length; i++) {
    pTagItems[i].addEventListener('click', function () {
        this.style.color = 'green';
    });
}

const divTwoElem = document.createElement('div');
// Fetch todos
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        const data = json.slice(0, 5);
        const ulElem = document.createElement('ul');
        data.forEach(item => {
            const liElem = document.createElement('li');
            liElem.innerText = item.title;
            liElem.style.backgroundColor = item.completed && 'red';
            ulElem.appendChild(liElem);

            liElem.addEventListener('click', function () {
                data.forEach(item => {
                    if (item.title === this.innerHTML) {
                        this.style.backgroundColor = !item.completed && 'red';
                        return { ...item, completed: !item.completed }
                    }
                    return item;
                });
            })
        });
        divTwoElem.appendChild(ulElem);
    });

document.body.appendChild(divTwoElem);



console.log(document.links);
console.log(document.images);