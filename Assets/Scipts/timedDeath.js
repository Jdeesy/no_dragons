#pragma strict

var time : float = 10.0;


function Start () {
	yield WaitForSeconds(time);
	Destroy(this.gameObject);
}
