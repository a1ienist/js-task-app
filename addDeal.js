const dealFormButton = document.getElementById("button-post");

dealFormButton.addEventListener('click', async () => {
    const dealTitle = document.getElementById('deal-title').value;
    const dealInfo = document.getElementById('deal-info').value;
    const dealPrice = document.getElementById('deal-price').value;
    const dealImage = document.getElementById('image_url').value;
    const dealLocation = document.getElementById('deal-location').value;

    const confirmed = window.confirm("Are you sure you want to submit the data?");


    const deal = {
        title: dealTitle,
        price: dealPrice,
        image_url: dealImage,
        info: dealInfo,        
        location: dealLocation,
    };

    try {
        const response = await fetch('https://64ec612af9b2b70f2bfa32ec.mockapi.io/deals', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deal)
            
        });

        const data = await response.json();

        if (data) {
            showMessage('Position was inserted');
            if (window.confirm('Data inserted successfully. Click OK to go to another page.')) {
                window.location.replace('./index.html');
            }

        }
    } catch (err) {
        console.log('err', err);
            const messageWrapper = document.getElementById("response-message");
            messageWrapper.innerHTML = "deal was NOT inserted, ERROR";
    }
});