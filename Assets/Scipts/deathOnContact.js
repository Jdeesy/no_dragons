#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other: Collider) {
	Destroy(other.gameObject);
//	Debug.Log("hit something");
}