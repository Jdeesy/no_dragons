#pragma strict

var dragonBullet : GameObject;
//var scale : Vector3 = new Vector3(0,0,0);
//
//function Start () {
//
//}
//
//function Update () {
//	scale = Vector3(1,MicControl.loudness,1);
//	transform.localScale = scale;
//}

function Update() {
	if (MicControl.loudness > 0.5) {
		Instantiate(dragonBullet, transform.position, Quaternion.identity);
	}
}