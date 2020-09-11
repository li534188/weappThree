import gLTF from '../../jsm/loaders/GLTFLoader'
import { OrbitControls } from '../../jsm/controls/OrbitControls'

export default function (canvas, THREE) {
  let GLTFLoader = gLTF(THREE);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.shadowMap.enabled = true;

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#DEFEFF');

  {
    const planeSize = 80;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('http://localhost:3000/brain/boli.jpg');
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.magFilter = THREE.NearestFilter;
    // const repeats = planeSize / 2;
    // texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    mesh.position.y = -10
    scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.castShadow = true;
    light.position.set(-250, 800, -850);
    light.target.position.set(-550, 40, -450);

    light.shadow.bias = -0.004;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    scene.add(light);
    scene.add(light.target);
    const cam = light.shadow.camera;
    cam.near = 1;
    cam.far = 2000;
    cam.left = -1500;
    cam.right = 1500;
    cam.top = 1500;
    cam.bottom = -1500;

    const cameraHelper = new THREE.CameraHelper(cam);
    scene.add(cameraHelper);
    cameraHelper.visible = false;
    const helper = new THREE.DirectionalLightHelper(light, 100);
    scene.add(helper);
    helper.visible = false;

    // function makeXYZGUI(gui, vector3, name, onChangeFn) {
    //   const folder = gui.addFolder(name);
    //   folder.add(vector3, 'x', vector3.x - 500, vector3.x + 500).onChange(onChangeFn);
    //   folder.add(vector3, 'y', vector3.y - 500, vector3.y + 500).onChange(onChangeFn);
    //   folder.add(vector3, 'z', vector3.z - 500, vector3.z + 500).onChange(onChangeFn);
    //   folder.open();
    // }

    function updateCamera() {
      // update the light target's matrixWorld because it's needed by the helper
      light.updateMatrixWorld();
      light.target.updateMatrixWorld();
      helper.update();
      // update the light's shadow camera's projection matrix
      light.shadow.camera.updateProjectionMatrix();
      // and now update the camera helper we're using to show the light's shadow camera
      cameraHelper.update();
    }
    updateCamera();

    // class DimensionGUIHelper {
    //   constructor(obj, minProp, maxProp) {
    //     this.obj = obj;
    //     this.minProp = minProp;
    //     this.maxProp = maxProp;
    //   }
    //   get value() {
    //     return this.obj[this.maxProp] * 2;
    //   }
    //   set value(v) {
    //     this.obj[this.maxProp] = v / 2;
    //     this.obj[this.minProp] = v / -2;
    //   }
    // }

    // class MinMaxGUIHelper {
    //   constructor(obj, minProp, maxProp, minDif) {
    //     this.obj = obj;
    //     this.minProp = minProp;
    //     this.maxProp = maxProp;
    //     this.minDif = minDif;
    //   }
    //   get min() {
    //     return this.obj[this.minProp];
    //   }
    //   set min(v) {
    //     this.obj[this.minProp] = v;
    //     this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
    //   }
    //   get max() {
    //     return this.obj[this.maxProp];
    //   }
    //   set max(v) {
    //     this.obj[this.maxProp] = v;
    //     this.min = this.min;  // this will call the min setter
    //   }
    // }

    // class VisibleGUIHelper {
    //   constructor(...objects) {
    //     this.objects = [...objects];
    //   }
    //   get value() {
    //     return this.objects[0].visible;
    //   }
    //   set value(v) {
    //     this.objects.forEach((obj) => {
    //       obj.visible = v;
    //     });
    //   }
    // }

    // const gui = new GUI();
    // gui.close();
    // gui.add(new VisibleGUIHelper(helper, cameraHelper), 'value').name('show helpers');
    // gui.add(light.shadow, 'bias', -0.1, 0.1, 0.001);
    // {
    //   const folder = gui.addFolder('Shadow Camera');
    //   folder.open();
    //   folder.add(new DimensionGUIHelper(light.shadow.camera, 'left', 'right'), 'value', 1, 4000)
    //     .name('width')
    //     .onChange(updateCamera);
    //   folder.add(new DimensionGUIHelper(light.shadow.camera, 'bottom', 'top'), 'value', 1, 4000)
    //     .name('height')
    //     .onChange(updateCamera);
    //   const minMaxGUIHelper = new MinMaxGUIHelper(light.shadow.camera, 'near', 'far', 0.1);
    //   folder.add(minMaxGUIHelper, 'min', 1, 1000, 1).name('near').onChange(updateCamera);
    //   folder.add(minMaxGUIHelper, 'max', 1, 4000, 1).name('far').onChange(updateCamera);
    //   folder.add(light.shadow.camera, 'zoom', 0.01, 1.5, 0.01).onChange(updateCamera);
    // }

    // makeXYZGUI(gui, light.position, 'position', updateCamera);
    // makeXYZGUI(gui, light.target.position, 'target', updateCamera);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  let curve;
  let curveObject;
  {
    const controlPoints = [
      [1.118281, 5.115846, -3.681386],
      [3.948875, 5.115846, -3.641834],
      [3.960072, 5.115846, -0.240352],
      [3.985447, 5.115846, 4.585005],
      [-3.793631, 5.115846, 4.585006],
      [-3.826839, 5.115846, -14.736200],
      [-14.542292, 5.115846, -14.765865],
      [-14.520929, 5.115846, -3.627002],
      [-5.452815, 5.115846, -3.634418],
      [-5.467251, 5.115846, 4.549161],
      [-13.266233, 5.115846, 4.567083],
      [-13.250067, 5.115846, -13.499271],
      [4.081842, 5.115846, -13.435463],
      [4.125436, 5.115846, -5.334928],
      [-14.521364, 5.115846, -5.239871],
      [-14.510466, 5.115846, 5.486727],
      [5.745666, 5.115846, 5.510492],
      [5.787942, 5.115846, -14.728308],
      [-5.423720, 5.115846, -14.761919],
      [-5.373599, 5.115846, -3.704133],
      [1.004861, 5.115846, -3.641834],
    ];
    const p0 = new THREE.Vector3();
    const p1 = new THREE.Vector3();
    let con = controlPoints.map((p, ndx) => {
      p0.set(...p);
      p1.set(...controlPoints[(ndx + 1) % controlPoints.length]);
      return [
        (new THREE.Vector3()).copy(p0),
        (new THREE.Vector3()).lerpVectors(p0, p1, 0.1),
        (new THREE.Vector3()).lerpVectors(p0, p1, 0.9),
      ];
    });
    curve = new THREE.CatmullRomCurve3(
      [].concat(...con),
      true,
    );
    {
      const points = curve.getPoints(250);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
      curveObject = new THREE.Line(geometry, material);
      curveObject.scale.set(100, 100, 100);
      curveObject.position.y = -621;
      curveObject.visible = false;
      scene.add(curveObject);
    }
  }

  const cars = [];
  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('http://localhost:3000/brain/scene.gltf', (gltf) => {
      const root = gltf.scene;
      root.position.y = 5
      root.scale.set(5,6,5)
      scene.add(root);

      root.traverse((obj) => {
        if (obj.castShadow !== undefined) {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });

      const loadedCars = root.getObjectByName('Cars');
      const fixes = [
        { prefix: 'Car_08', y: 0, rot: [Math.PI * .5, 0, Math.PI * .5], },
        { prefix: 'CAR_03', y: 33, rot: [0, Math.PI, 0], },
        { prefix: 'Car_04', y: 40, rot: [0, Math.PI, 0], },
      ];

      root.updateMatrixWorld();
    
        for (const car of loadedCars.children.slice()) {
          const fix = fixes.find(fix => car.name.startsWith(fix.prefix));
          const obj = new THREE.Object3D();
          car.position.set(0, fix.y, 0);
          car.rotation.set(...fix.rot);
          obj.add(car);
          scene.add(obj);
          cars.push(obj);
        }
      

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();
    }, (e) => {
      console.log('loading')
    });
  }
  

  let infodata = [{
		title:'视觉联络区',
		info:'主要的视觉区',
    id:'vision',
    position:{x:-1,y:11,z:3},
    color:0xEC3C00
	},{
		title:'主要运动区',
		info:'管理运动',
    id:'motion',
    position:{x:-1,y:12,z:0,},
    rotation:{x:Math.PI * -.5},
    color:0x030c36
	},{
		title:'听觉联络区',
		info:'主要的视觉区',
    id:'hearing',
    position:{x:3,y:8,z:0},
    rotation:{y:Math.PI * .5},
    color:0xBFED00
	},{
		title:'额叶',
		info:'主要的视觉区',
    id:'lobe',
    position:{x:1,y:8,z:-4},
    rotation:{y:Math.PI },
    color:0xf5f5f5
	},{
		title:'小脑',
		info:'主要的视觉区',
    id:'cerebellum',
    position:{x:-1,y:5,z:-3},
    rotation:{y:Math.PI },
    color:0x030c36
  },];
  let  group = new THREE.Group();
  {
    let loader =new THREE.FontLoader().load('http://localhost:3000/FZFangSong-Z02T_Regular.json',function(font){
      infodata.map(item=>{
        var txtGeo = new THREE.TextGeometry(item.title,{
          font: font,
          size: 0.4,
          height: 0.1,
          curveSegments: 12,
          
        });
　      var txtMater = new THREE.MeshPhongMaterial({color: item.color});
        var txtMesh = new THREE.Mesh(txtGeo,txtMater);
        txtMesh.position.set(item.position.x,item.position.y,item.position.z);
        if(item.rotation){
          txtMesh.rotation.set(item.rotation.x||0, item.rotation.y||0,item.rotation.z||0 )
          console.log(txtMesh.rotation)
        }
        txtMesh.name = item.id
        group.add(txtMesh)
        
      });
      scene.add(group);
    })
      　
  }

  const mousedown = (e) =>{

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let touch = e.touches[0];
    console.log(touch)
    wx.getSystemInfo({
      success: function (res) {
        console.log(touch.clientX , res.screenWidth)
        mouse.x = (touch.clientX / res.screenWidth) * 2 -1 ;
        mouse.y = -(touch.clientY / res.screenHeight) * 2 +1;
        console.log(mouse)
        let vector = new THREE.Vector3(mouse.x, mouse.y,0.5).unproject(camera);
        let objects = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = raycaster.intersectObjects(objects);
        console.log(group.children)
        console.log(intersects)
        console.log(9999)
        if (intersects.length > 0) {
          console.log(intersects[0].object.name)
        }
      }
    });
    
  }



  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  // create 2 Vector3s we can use for path calculations
  const carPosition = new THREE.Vector3();
  const carTarget = new THREE.Vector3();

  function render(time) {
    time *= 0.001;  // convert to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    {
      const pathTime = time * .01;
      const targetOffset = 0.01;
      cars.forEach((car, ndx) => {
        // a number between 0 and 1 to evenly space the cars
        const u = pathTime + ndx / cars.length;

        // get the first point
        curve.getPointAt(u % 1, carPosition);
        carPosition.applyMatrix4(curveObject.matrixWorld);

        // get a second point slightly further down the curve
        curve.getPointAt((u + targetOffset) % 1, carTarget);
        carTarget.applyMatrix4(curveObject.matrixWorld);

        // put the car at the first point (temporarily)
        car.position.copy(carPosition);
        // point the car the second point
        car.lookAt(carTarget);

        // put the car between the 2 points
        car.position.lerpVectors(carPosition, carTarget, 0.5);
      });
    }

    renderer.render(scene, camera);

    canvas.requestAnimationFrame(render);
  }

  canvas.requestAnimationFrame(render);

  return {camera, controls, mousedown};
}