var myQuestions = [
    {
		question: "What is the value of 34 * 54? \n a: 3097 \n b: 598 \n c: 1836 ",
        
		correctAnswer: 'c'
	},
    {
		question: "Who proposed the cell theory? \n a: 'Singer and Nicholsen' \n b: 'Schwann and Schleiden' \n c: 'Hook and Brown' ",
        
		correctAnswer: 'b'
	},
    {
		question: "It is the smallest cell - \n a: 'Bacteria' \n b: 'Yeast' \n c: 'Mycoplasm' ",
        
		correctAnswer: 'c'
	},
    {
		question: "What is the capital of Canada? \n a: 'Ottawa' \n b: 'Toronto' \n c: 'Montreal' ",
        
		correctAnswer: 'a'
	},
    {
		question: "What is the capital of Japan? \n a: 'Okinawa' \n b: 'Osaka' \n c: 'Tokyo' ",
        
		correctAnswer: 'c'
	},
    {
		question: "The Second World War lasted from - \n a: '1939 to 1945' \n b: '1950 to 1956' \n c: '1934 to 1938' ",
        
		correctAnswer: 'a'
	},
    {
		question: "What is the capital of China? \n a: 'Shanghai' \n b: 'Beijing' \n c: 'Wuhan' ",
        
		correctAnswer: 'b'
	},
    {
		question: "When did the First World War end? \n a: '1914' \n b: '1815' \n c: '1918' ",
        
		correctAnswer: 'c'
	},
    {
		question: "Who is the Prime Minister of Norway? \n a: 'Siv Jensen' \n b: 'Elna Solberg' \n c: 'Sindre Finnes' ",
        
		correctAnswer: 'b'
	},
	{
		question: "Who is the Prime Minister of New Zealand? \n a: 'Jacinda Ardern' \n b: 'Sanna Marin' \n c: 'Katrin Jakobsdottir ",
        
		correctAnswer: 'a'
	}
];


var score = 0;
var input = 5;


function Change() {
    
    input = Number(document.getElementById("def").value);

}



function Work() {  
    
if (input < myQuestions.length) {
    
    for (var i=0; i< input; i++) {
        var random = Math.floor(Math.random() * myQuestions.length);
        var user = window.prompt(myQuestions[random].question);
        if (user == myQuestions[random].correctAnswer) {
            score++;
            alert("CORRECT");
        } else {
            alert("INCORRECT : the correct answer is " + myQuestions[random].correctAnswer);
        }
    }
    
    alert("You got " + score + " out of " + input + " (" + (score*100)/input + "%)");
    
} else {
    
    alert("Error: irrelevent option");
    
}
}
    