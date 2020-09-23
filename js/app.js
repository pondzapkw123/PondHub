
$(function() {

   
    document.addEventListener('init', function(event) {
        var page = event.target;

        console.log(page.id);
        if (page.id === 'Home') {
            
            page.querySelector('#demon').onclick = function() {
                document.querySelector('#myNavigator').pushPage('view/movie1.html');

            };
            page.querySelector('#fivecen').onclick = function() {
                document.querySelector('#myNavigator').pushPage('view/movie2.html');
            };
            page.querySelector('#yourname').onclick = function() {
                document.querySelector('#myNavigator').pushPage('view/movie3.html');
            }; 
        } else if(page.id ==='search'){
            page.querySelector('#demon').onclick = function() {
                document.querySelector('#myNavigator2').pushPage('view/movie1.html');

            };
            page.querySelector('#fivecen').onclick = function() {
                document.querySelector('#myNavigator2').pushPage('view/movie2.html');
            };
            page.querySelector('#yourname').onclick = function() {
                document.querySelector('#myNavigator2').pushPage('view/movie3.html');
            };
        
        
        }else if (page.id === 'demon' || page.id === 'fivecen' || page.id === 'yourname') {

            document.querySelector('ons-back-button').onclick = function(event) {
                document.querySelector('#myNavigator1').popPage();
               
                
            };

        
        }
       



    });
})
