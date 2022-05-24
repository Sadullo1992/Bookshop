// data json
async function dataJson(){    
    try {
        const response = await fetch('../assets/books.json');
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        const data = await response.json();
        return data;
      } catch {
        throw new Error("Something went wrong!");
    }
}

// let main = document.createElement

let allCartBooks = [];

function updateBooks(books) {
    document.querySelector('header').remove();
    document.body.prepend(Header(books));
}

function Header(books = []) {
    let fragment = document.createDocumentFragment();

    let header = document.createElement('header');
    header.classList.add('header');
    
    let container = document.createElement('div');
    container.classList.add('container');

    let headerInner = document.createElement('div');
    headerInner.classList.add('header-inner');

    let logo = document.createElement('h3');
    logo.classList.add('logo'); 
    logo.textContent = 'Bookshop';

    let shoppingCartPhoto = document.createElement('div');
    shoppingCartPhoto.classList.add('shopping-cart-photo');
    shoppingCartPhoto.addEventListener('click', shoppingCartModal);

    let orderCount = document.createElement('div');
    orderCount.classList.add('order-count');    
    
    let span = document.createElement('span');
    span.textContent = `${books.length}`;
    
    orderCount.append(span);

    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/shopping-cart.png');
    img.setAttribute('alt', 'shopping cart');

    header.append(container);

    container.append(headerInner);

    headerInner.append(logo);
    headerInner.append(shoppingCartPhoto);

    if(books.length > 0) {
        shoppingCartPhoto.append(orderCount);
    }
    shoppingCartPhoto.append(img);

    fragment.append(header);

    return fragment;
}
document.body.append(Header());


async function BookCatalog() {
    const books = await dataJson();

    let fragment = document.createDocumentFragment();

    let bookCatalog = document.createElement('section');
    bookCatalog.classList.add('bookcatalog');

    let container = document.createElement('div');
    container.classList.add('container');

    let h2 = document.createElement('h2');
    h2.textContent = 'Book catalog';

    let bookCatalogContainer = document.createElement('div');
    bookCatalogContainer.classList.add('bookcatalog-container');

    bookCatalog.append(container);

    container.append(h2);
    container.append(bookCatalogContainer);

    books.forEach(item => {
        bookCatalogContainer.append(BookItem(item.author, item.imageLink, item.title, item.price, item.description));
    });

    fragment.append(bookCatalog);

    document.body.append(fragment);
    return fragment;
}
BookCatalog();

function BookItem(author, imageLink, title, price, description) {
    let fragment = document.createDocumentFragment();

    let bookItem = document.createElement('div');
    bookItem.classList.add('book-item');

    let img = document.createElement('img');
    img.setAttribute('src', imageLink);
    img.setAttribute('alt', title);

    let h4 = document.createElement('h4');
    h4.classList.add('book-title');
    h4.textContent = title;

    let p = document.createElement('p');
    p.classList.add('book-author');
    p.textContent = author;

    let h3 = document.createElement('h3');
    h3.classList.add('book-price');
    h3.textContent = `$${price}`;

    let showBtn = document.createElement('button');
    showBtn.classList.add('btn-basic');
    showBtn.textContent = 'Show more';
    showBtn.addEventListener('click', () => descModal(author, imageLink, title, description));


    let addBtn = document.createElement('button');
    addBtn.classList.add('btn', 'btn--primary');
    addBtn.textContent = 'Add to cart';
    addBtn.addEventListener('click', () => addToCart(title));

    bookItem.append(img);
    bookItem.append(h4);
    bookItem.append(p);
    bookItem.append(h3);
    bookItem.append(showBtn);
    bookItem.append(addBtn);

    fragment.append(bookItem);

    return fragment;
}

function descModal(author, imageLink, title, description){
    let fragment = document.createDocumentFragment();
    
    document.body.style.overflow = 'hidden';

    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'flex';

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let modalClose = document.createElement('div');
    modalClose.classList.add('modal-close');
    modalClose.addEventListener('click', ()=> {
        document.body.style.overflow = 'visible';
        modal.style.display = 'none';
    });

    let imgClose = document.createElement('img');
    imgClose.setAttribute('src', './assets/images/cancel.svg');
    imgClose.setAttribute('alt', 'close');

    let modalBookItem = document.createElement('div');
    modalBookItem.classList.add('modal-book-item');

    let img = document.createElement('img');
    img.setAttribute('src', imageLink);
    img.setAttribute('alt', title);

    let modalBookItemContent = document.createElement('div');
    modalBookItemContent.classList.add('modal-book-item-content');

    let h4 = document.createElement('h4');
    h4.classList.add('modal-book-title');
    h4.textContent = title;

    let p = document.createElement('p');
    p.classList.add('modal-book-author');
    p.textContent = author;

    let desc = document.createElement('p');
    desc.classList.add('book-desc');
    desc.textContent = description;
    
    modal.append(modalContent);

    modalContent.append(modalClose);
    modalContent.append(modalBookItem);

    modalClose.append(imgClose);

    modalBookItem.append(img);
    modalBookItem.append(modalBookItemContent);

    modalBookItemContent.append(h4);
    modalBookItemContent.append(p);
    modalBookItemContent.append(desc);    

    fragment.append(modal);

    document.body.append(fragment);
}

// Shopping Cart
async function addToCart(title) {    
    const books = await dataJson();  
      
    let obj = books.find(item => item.title === title);
    if(allCartBooks.findIndex(item => item.title === obj.title) === -1) {
        allCartBooks.push(obj);           
        updateBooks(allCartBooks); 
    }else {
        alert('Already, This book is added!');
    }  

}

function removeFromCart(title) {
    let index = allCartBooks.findIndex(item => item.title === title);
    allCartBooks.splice(index, 1);
    updateBooks(allCartBooks);
    document.querySelector('.shopping-modal').remove();
    shoppingCartModal();
}

function shoppingCartModal() {
    let fragment = document.createDocumentFragment();
    
    document.body.style.overflow = 'hidden';

    let shoppingModal = document.createElement('div');
    shoppingModal.classList.add('shopping-modal');
    shoppingModal.style.display = 'block';

    let shoppingModalContent = document.createElement('div');
    shoppingModalContent.classList.add('shopping-modal-content');

    let shoppingCartHeader = document.createElement('div');
    shoppingCartHeader.classList.add('shopping-cart-header');

    let logo = document.createElement('h3');
    logo.classList.add('logo'); 
    logo.textContent = 'Shopping cart';

    let shoppingCartClose = document.createElement('div');
    shoppingCartClose.classList.add('shopping-cart-photo');
    shoppingCartClose.addEventListener('click', () => {
        document.body.style.overflow = 'visible';
        document.querySelector('.shopping-modal').remove();
    });

    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/cancel.png');
    img.setAttribute('alt', 'shopping cart close');

    let shoppingCartContainer = document.createElement('div');
    shoppingCartContainer.classList.add('shopping-cart-container');

    let shoppingTotalContainer = document.createElement('div');
    shoppingTotalContainer.classList.add('shopping-total-container');
    let total = allCartBooks.reduce((sum, item) => sum + item.price, 0)
    let p = document.createElement('p');
    p.innerHTML = `Total: <span>$${total}</span>`;

    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('btn');
    if(!total) {
        confirmBtn.classList.add('btn-disabled');
        confirmBtn.classList.remove('btn--primary');
    } else {
        confirmBtn.classList.remove('btn-disabled');
        confirmBtn.classList.add('btn--primary');
        confirmBtn.addEventListener('click', ()=> {
            document.querySelector('header').remove();
            document.querySelector('.shopping-modal').remove();
            document.querySelector('.bookcatalog').remove();
            document.querySelector('form').style.display = 'block';
            document.body.style.overflow = 'visible';
        }, false);
    }  
    confirmBtn.textContent = 'Confirm';
    

    shoppingModal.append(shoppingModalContent);

    shoppingModalContent.append(shoppingCartHeader);
    shoppingModalContent.append(shoppingCartContainer);

    shoppingCartHeader.append(logo);
    shoppingCartHeader.append(shoppingCartClose);

    shoppingCartClose.append(img);    

    allCartBooks.forEach(item => {
        shoppingCartContainer.append(shoppingCartItem(item.author, item.imageLink, item.title, item.price));
    });
    
    shoppingCartContainer.append(shoppingTotalContainer);

    shoppingTotalContainer.append(p);
    shoppingTotalContainer.append(confirmBtn);

    fragment.append(shoppingModal);

    document.body.append(fragment);
}

function shoppingCartItem(author, imageLink, title, price) {
    let fragment = document.createDocumentFragment();

    let shoppingCartItem = document.createElement('div');
    shoppingCartItem.classList.add('shopping-cart-item');

    let img = document.createElement('img');
    img.setAttribute('src', imageLink);
    img.setAttribute('alt', title);

    let shoppingCartItemContent = document.createElement('div');
    shoppingCartItemContent.classList.add('shopping-cart-item-content');

    let h4 = document.createElement('h4');
    h4.classList.add('book-title');
    h4.textContent = title;

    let p = document.createElement('p');
    p.classList.add('book-author');
    p.textContent = author;

    let h3 = document.createElement('h3');
    h3.classList.add('book-price');
    h3.textContent = `$${price}`;

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('btn-remove');
    removeBtn.addEventListener('click', () => removeFromCart(title));

    let removeBtnImg = document.createElement('img');
    removeBtnImg.setAttribute('src', './assets/images/cancel.png');
    removeBtnImg.setAttribute('alt', 'close');

    shoppingCartItem.append(img);
    shoppingCartItem.append(shoppingCartItemContent);

    shoppingCartItemContent.append(h4);
    shoppingCartItemContent.append(p);
    shoppingCartItemContent.append(h3);
    shoppingCartItemContent.append(removeBtn);

    removeBtn.append(removeBtnImg);

    fragment.append(shoppingCartItem);

    return fragment;
}
