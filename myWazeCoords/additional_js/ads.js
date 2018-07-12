$(document).ready(function(){

    // flash effect
    setInterval(function(){  $('#ads').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });        }, 4000);
    //$('.ads').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

	var textArray = ['Автоматический Геокодинг', 'Геокодинг получение lat/lon']; // text to change
	
	//run function that changes text in banner
	setInterval(changeMyImage, 8000);
    var x = 0;
	
	
	//Function that changes text in banner
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **  
    function changeMyImage()
    {
        //$(".ads img").attr('src', images[x]); //assign a picture
		//$("#link").attr('href', url[x]);  //assign href
		
		// change img with animation
		$("#adsSpan").stop().fadeOut("slow",function(){ 
		    $(this).html(textArray[x]);
						}).fadeIn(1000);
	    // END change img with animation
		
		
		
        x++;
		// if iterator has the same as length as array with text, zero it
        if (textArray.length == x) {
            x = 0; 
        }
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
  
  
  
	
	
	//clicking the link to Youtube causes Ajax
	$("#adsLink").click(function() {  
		sendAjaxYoutube();
    });
	
	
	
	// Send s Ajax when u click Link to Youtube
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **  
	
	function sendAjaxYoutube()
    {
		// send  data  to  PHP handler  ************ 
        $.ajax({
            url: 'ajax_php_script/RecordYouTube.php',
            type: 'POST',
			dataType: 'text', // json/text
			//passing the city
            data: { },
            success: function(data) {
                // do something;
                
            },  //end success
			error: function (error) {
				
            }	
        });                                         
       //  END AJAXed  part 
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
// END READY
});