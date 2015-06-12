function Block(position, size)
{
    this.position = position;
    this.size = size;

    var geometry = new THREE.CubeGeometry(size.x, size.y, size.z);
    var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.castShadow = true;
    this.mesh.position = this.position;

    this.update = function()
    {
        //Update Mesh
        this.mesh.position = this.position;
    };

    this.addToScene = function(scene)
    {
        scene.add(this.mesh);
    };
}
