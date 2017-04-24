$(document).ready(function() {
			
            
            $('.dropdown').hover(
            function(){
            $('.sub-menu').slideDown(200,stop()); 
            },
            function(){
            $('.sub-menu').slideUp(200,stop()); 
            }
            );
            function stop(){
            $('.sub-menu').stop(true, true);
            }
            


            //fullpage jquery
            $('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000
			});
     
		});
