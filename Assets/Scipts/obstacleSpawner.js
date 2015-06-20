#pragma strict


var obstacle : GameObject;
var range : float = 10.0;
var spawnChance : float = 0.02;

function Start () {

}

// todo add chance increase over time

function Update () {
	if (Random.value < spawnChance) {
		var obstaclePosition = Mathf.Sin(Time.time * Random.value)  * range ;
		Instantiate(obstacle, transform.position + new Vector3(obstaclePosition, 0, 0), Quaternion.identity);
	}
}