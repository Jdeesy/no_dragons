#pragma strict

//var speed : float = 5.0;
var strafeSpeed : float = 5.0;

function Start () {

}

function Update () {
	// move dragon forward
	transform.position.x += Input.GetAxis("Horizontal") * strafeSpeed * Time.deltaTime;


}