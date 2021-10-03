const array=[2,3,56,67,6];

const newArray=[]
const forEachArray=array.forEach(num =>num+4);


//map 

const mapArray=array.map(num => {
	return num*4
});

//filter
const filterArray=array.filter(num =>{
	return num>=20
});