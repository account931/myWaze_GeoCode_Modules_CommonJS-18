function copy_process(){
	
  this.copy_to_clipboard = function(){
    
      // creating new textarea element and giveing it id 't'
      var t = document.createElement('textarea');
      t.id = 't';
      // Optional step to make less noise in the page, if any!
      t.style.height = 0;
      // You have to append it to your page somewhere, I chose <body>
      document.body.appendChild(t);
     // Copy whatever is in your div to our new textarea
     t.value = document.getElementById('tableResults').innerText;
     // Now copy whatever inside the textarea to clipboard;
     var selector = document.querySelector('#t');
     selector.select();
     document.execCommand('copy');
     // Remove the textarea;
    document.body.removeChild(t);
	
	$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
      
   }

}

module.exports = copy_process;




/*


	
	
	
	*/