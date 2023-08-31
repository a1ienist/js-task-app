const DEAL_URL = 'https://64ec612af9b2b70f2bfa32ec.mockapi.io/deals/';

const deleteButton = document.getElementById('button-delete');


const url = new URL(window.location.href);
const dealId = url.searchParams.get('dealId');

const addDealToScreen = (deal) => {
    const title = document.getElementById('title');
    title.innerHTML = deal.title;

    const info = document.getElementById('info');
    info.innerHTML = deal.info;

    const location = document.getElementById('location');
    location.innerHTML = deal.location;

    const price = document.getElementById('price');
    price.innerHTML = deal.price;

    const image = document.getElementById('deal-page-image');
    image.src = deal.image_url;
};

const getDeal = async () => {
    try {
        const response = await fetch(DEAL_URL + dealId
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const deleteDeal = async () => {
    try {
        const response = await fetch(DEAL_URL + dealId, {
            method: 'DELETE',
        });

        const data = await response.json();
        return data;
    } catch (error) {
        return false;
    }
};

const onDealDeleted = (data) => {
    const infoMessage = document.getElementById("info-message");

    if (data) {
        infoMessage.innerHTML = "Deal will be deleted";

        const confirmation = window.confirm("Deal will be deleted. Do you want to go back to the index page?");
        if (confirmation) {
            window.location.replace("./index.html");
        } else {
            infoMessage.innerHTML = "Deal was NOT deleted";
        }
    } else {
        infoMessage.innerHTML = "Deal was NOT deleted, please try later";
    }
};

const onClickDeleteButton = async () => {
    try{
        const response = await deleteDeal();
        onDealDeleted(response);
    }catch (error){
        console.log(error);
    }
};

deleteButton.addEventListener("click", onClickDeleteButton);

const displayDeal = async () => {
    const deal = await getDeal();
    deal && addDealToScreen(deal);
};

displayDeal();
