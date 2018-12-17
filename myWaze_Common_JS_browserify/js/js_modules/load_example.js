function load_example(){
	
  this.coordinatesSet =	"22802 WESTERN AV, TORRANCE, 90501\n1601 Kingsdale Ave, Redondo Beach, CA 9027\n3525 W Carson St, Torrance, CA 90503\n20401 Victor St, Torrance, CA 90503\n2015 W Redondo Beach Blvd C, Gardena, CA 90247",

	
  this.loadExampleCoordinates = function(){
	  $("#coordsInput").val(this.coordinatesSet); //  was \n  in the  end 
   }
}

module.exports = load_example;




