#pragma strict

var speed : float = 5.0;

function Start () {

}

function Update () {
//	transform.position.z -= speed * Time.deltaTime;
	transform.Translate(-Vector3.forward * Time.deltaTime * speed);
}