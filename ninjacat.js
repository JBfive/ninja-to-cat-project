$(document).ready(function(){

	// var htmlStr = "";
	// for(var i=1; i<6; i++){
	// 	htmlStr= "<img  src='ninja"+(i-1)+".png' cat='cat"+(i-1)+".png' >";
	// 	console.log(htmlStr);}
		
	// 	$("#container").html(function(){
	// 		$(this).html(htmlStr);
			
	
	// 	})
	
	// }


	$("img").click(function(){
		 var ninja = $(this).attr("src");
		 var cat = $(this).attr("alt-src");
		console.log($(this).attr("src"), $(this).attr("alt-src"));
		// console.log( cat, ninja );
		// if($(this).attr("src") == ninja){
		// 	$(this).attr("src", "cat");
		// 	$(this).attr("alt-src", "ninja");
		// }
		// else 
		// 	$(this).attr("src", "ninja")
		// 		$(this).attr("alt-src", "cat");
		if($(this).attr("src") == ninja){
			$(this).attr("src", cat);
			$(this).attr("alt-src", ninja);
		}
		else if($(this).attr("src") == cat){
			$(this).attr("src", ninja);
			$(this).attr("alt-src", cat);
		}

		
	})
});