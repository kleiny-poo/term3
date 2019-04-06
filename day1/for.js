/* 
 * for.js
 * for loop practice with inventors array
*/

let inventors = [
	{
		name: "Mark E. Dean",
		gender: "Male",
		invention: "ISA bus, color monitor, gigahertz chip",
		liked: false
	},
	{
		name: "Charles Richard Drew",
		gender: "Male",
		invention: "Blood banks",
		liked: false
	},
	{
		name: "Madam C.J. Walker",
		gender: "Female",
		invention: "African American hair care and cosmetics",
		liked: false
	},
	{
		name: "Guillermo Gonzalez Camarena",
		gender: "Male",
		invention: "Early color television system",
		liked: false
	},
	{
		name: "Ellen Ochoa",
		gender: "Female",
		invention: "Optical analysis systems",
		liked: false
	},
	{
		name: "Marie Van Brittan Brown",
		gender: "Female",
		invention: "Home security systems",
		liked: false
	},
	{
		name: "Alexander Miles",
		gender: "Male",
		invention: "Automatically closing elevator doors",
		liked: false
	},
	{
		name: "Dr. Patricia Bath",
		gender: "Female",
		invention: "Laserphaco Probe",
		liked: false
	}
];


/* 
 * Print all of the inventors in the inventors array,
 * list their properties
*/
console.log("-------------Inventors---------------")
//for (let i = 0; i< inventors.length; i++) {
	//console.log(inventors[i].name);
	console.log(inventors);
//}



/* 
 * Print the names of the female inventors
*/
console.log("---------------Female Inventors-----------");
for (let i = 0; i < inventors.length; i++) {
	if(inventors[i].gender == "Female") {
	console.log(inventors[i].name);
	}	
}




/* 
 * Print the names of the male inventors
*/
console.log("----------------Male Inventors---------------");
 for(let i = 0; i < inventors.length; i++) {
 	if(inventors[i].gender == "Male") {
 		console.log(inventors[i].name);
 	}
 }



/*
 * Half of the inventors have been liked on
 * social media. Assign a value of true to the liked
 * property of every other inventor. 
*/
for(let i = 0; i < inventors.length; i = i+2) {
	inventors[i].liked = true;
}




/*
 * Use a loop to count and print the number of liked inventors,
 * meaning inventors whose liked property is set to true
*/ 
let count = 0;
for(let i =0; i < inventors.length; i++) {
	if(inventors[i].liked==true){
	count++;
	}
}
console.log(count);



