		$(function(){
			$().timelinr({
				orientation: 	'vertical',
				issuesSpeed: 	300,
				datesSpeed: 	100,
				arrowKeys: 		'true',
				startAt:		3
			})
		});

        $( document ).ready(function() {
            rrimages = new Array();
            for (var i=0; i<9; i++) {
                rrimages[i] = new Image();
                rrimages[i].src = "images/" + "phantom_" + i + ".jpg"
            }
            console.log(rrimages);


            });
