var answer = document.getElementsByClassName("ans");
var outcome = document.getElementsByClassName("outcome");
var score = document.getElementById("score");

function checkSolution(){
	var sum=0;
	setTimeout(function(){
		for(var i = 0; i<answer.length; i++){
			if(answer[i].checked){
				sum++;
				outcome[i].style.backgroundColor="rgba(0, 153, 0, 0.3)";
			}else{
				outcome[i].style.backgroundColor="rgba(255, 71, 26, 0.4)";
			}
		}
	},500);

	setTimeout(function(){
		var percentage = (sum/answer.length)*100;
		if(percentage < 50){
			score.innerHTML = "You have scored : "+ percentage + "%";
			score.style.color = "#ff4d4d";
			score.style.border = "1px solid #ff4d4d";
		}else if(percentage >= 50 && percentage < 100){
			score.innerHTML = "You have scored : "+ percentage + "%";
			score.style.color = "#29a329";
			score.style.border = "1px solid #29a329";
		}else if(percentage === 100){
			score.innerHTML = "Congratulation! You have scored : "+ percentage + "%";
			score.style.color = "#29a329";
			score.style.border = "1px solid #29a329";
		}
		
		scroll(0,0);
	},500);
}