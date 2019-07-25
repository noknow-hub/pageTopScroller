document.addEventListener('DOMContentLoaded', function() {

    //////////////////////////////////////////////////
    // Main process.
    //////////////////////////////////////////////////
    let toaster = new Toaster({
        //'method': 'bottom-full-width-drop-up',
    });
    
    
    document.getElementById('toaster').addEventListener('click', function() {
        toaster.error('hello', 'msgmsgmsgmsgmsgmsgmsgmsgm');
    }, false);
    
    


}, false);
