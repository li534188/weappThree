const dataInfo = [{
        title:'视觉联络区',
        info:'主要的视觉区',
        id:'vision',
        position:{x:-1,y:11,z:3},
        color:0xEC3C00,
        camera:{x:0,y:10,z:20}
    },{
        title:'主要运动区',
        info:'管理运动',
        id:'motion',
        position:{x:-1,y:12,z:0,},
        rotation:{x:Math.PI * -.5},
        color:0x030c36,
        camera:{x:0,y:26,z:0}
    },{
        title:'听觉联络区',
        info:'主要的视觉区',
        id:'hearing',
        position:{x:3,y:8,z:0},
        rotation:{y:Math.PI * .5},
        color:0xBFED00,
        camera:{x:20,y:10,z:0}
    },{
        title:'额叶',
        info:'主要的视觉区',
        id:'lobe',
        position:{x:1,y:8,z:-4},
        rotation:{y:Math.PI },
        color:0xf5f5f5,
        camera:{x:0,y:10,z:-20}
    },{
        title:'小脑',
        info:'主要的视觉区',
        id:'cerebellum',
        position:{x:-1,y:5,z:-3},
        rotation:{y:Math.PI },
        color:0x030c36,
        camera:{x:0,y:5,z:-20}
    },];

export default dataInfo;