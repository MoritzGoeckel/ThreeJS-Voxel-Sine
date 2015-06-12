function Block(position, size, scene)
{
    this.position = position;
    this.size = size;
    this.scene = scene;

    this.update = function()
    {
        //Update Mesh
        this.mesh.position.x = this.position.x;
        this.mesh.position.y = this.position.y;
        this.mesh.position.z = this.position.z;
    };

    this.setSize = function(h){
      scene.remove(this.mesh);
      this.size.z = h;

      this.init();
      this.update();
      
      this.scene.add(this.mesh);
    };

    this.init = function(){
      var geometry = new THREE.BoxGeometry(this.size.x, this.size.y, this.size.z);
      var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
      this.mesh = new THREE.Mesh( geometry, material );
      this.mesh.castShadow = true;
    };

    this.init();
    this.update();

    this.scene.add(this.mesh);
}
