function fetchWishlist(profileURL){
    const urlPrefix = 'https://store.steampowered.com/wishlist/';
    const urlSuffix = 'wishlistdata/';

    let url = urlPrefix + profileURL.slice(27, profileURL.length) + urlSuffix;
    
    console.log("Sending request to:", url);

    fetch(url, {
        method:'GET',
        mode:'cors',
        credentials:'include',
        headers: new Headers({
            'Content-Type':'application/json',
            'Origin':'https://qubedfox.github.io/steamwishlistsorter/',
            'Access-Control-Allow-Origin':'https://qubedfox.github.io/steamwishlistsorter/'
        })
    })
        .then(response => JSON.stringify(response))
        .then(data => console.log(data))
        .catch(error => console.log(error));      
}