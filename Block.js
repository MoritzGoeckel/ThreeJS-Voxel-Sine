function Block(position, size)
{
    this.position = position;
    this.size = size;

    var geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.castShadow = true;

    this.update = function()
    {
        //Update Mesh
        this.mesh.position.x = this.position.x;
        this.mesh.position.y = this.position.y;
        this.mesh.position.z = this.position.z;

    };

    this.addToScene = function(scene)
    {
        scene.add(this.mesh);
    };

    this.update();
}
