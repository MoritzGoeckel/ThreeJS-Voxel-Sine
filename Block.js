function Block(position, size, scene)
{
    this.size = size;
    this.scene = scene;

    this.update = function()
    {

    };

    this.setPosition = function(position){
      this.mesh.position.x = position.x;
      this.mesh.position.y = position.y;
      this.mesh.position.z = position.z;
    };

    this.setZ = function(z){
      this.mesh.position.z = z;
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
    this.setPosition(position);
    this.update();

    this.scene.add(this.mesh);
}
