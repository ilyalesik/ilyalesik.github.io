

function createScene(scene) {


    var loader = new THREE.FontLoader();
    loader.load( 'fonts/ProximaNovaRg_Regular.json', function ( font ) {
        var xMid, text;
        var textShape = new THREE.BufferGeometry();
        var color = 0x006699;
        var matLite = new THREE.MeshBasicMaterial( {
            color: color,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        } );
        var message = "8 марта";
        var shapes = font.generateShapes( message, 0.5, 80 );
        var geometry = new THREE.ShapeGeometry( shapes );
        geometry.computeBoundingBox();
        xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        // make shape ( N.B. edge view not visible )
        textShape.fromGeometry( geometry );
        text = new THREE.Mesh( textShape, matLite );

        scene.add( text );
    } ); //end load function


}