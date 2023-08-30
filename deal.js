const deleteButton = document.getElementById('button-delete');

const addDealToScreen = (deal) => {
    const title = document.getElementById('title');
    title.innerHTML = deal.title;

    const info = document.getElementById('info');
    info.innerHTML = deal.info;

    const location = document.getElementById('location');
    location.innerHTML = deal.location;

    const price = document.getElementById('price');
    price.innerHTML = deal.price;

    const image = document.getElementById('deal-image');
    image.src = deal.image_url;

};

