document.getElementById('click-me').onclick = calculateLifeDrinks

function calculateLifeDrinks () {
	var currentAge = document.getElementById('age').value;
	var plannedAge = document.getElementById('max-age').value;
	var favDrink = document.getElementById('item').value;
	var numPerDAy = document.getElementById('num-per-day').value;

	var lifetimeDrinks = (plannedAge - currentAge) * 365 * numPerDAy;

console.log(lifetimeDrinks);

document.getElementById('solution').innerHTML = lifetimeDrinks;
document.getElementById('drink').innerHTML - favDrink;






}