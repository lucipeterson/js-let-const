const teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];

let newTeachers = [
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
	}
];


const courses = ['Introducing JavaScript',
				'JavaScript Basics',
				'JavaScript Loops, Arrays and Objects',
				'Getting Started with ES2015',
				'JavaScript and the DOM',
				'DOM Scripting By Example'];
			

var i = courses.length;

function addNewTeachers(newTeachers) {
	Array.prototype.push.apply(teachers,newTeachers);
}

function printTreehouseSummary() {
  for (var i = 0; i < teachers.length; i+=1) {
	 console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
	}
  console.log(`Treehouse has ${courses.length} JavaScript courses, and ${teachers.length} Javascript teachers`);
}

addNewTeachers(newTeachers);
printTreehouseSummary();








