import * as THREE from '../../libs/three.weapp.js'
import loadgLTF from './loadgLTF'

Page({
	data: {brainInfo:[{
		title:'视觉联络区',
		info:'主要的视觉区',
		id:'vision',
	},{
		title:'主要运动区',
		info:'管理运动',
		id:'motion',
	},{
		title:'听觉联络区',
		info:'主要的视觉区',
		id:'hearing',
	},{
		title:'额叶',
		info:'主要的视觉区',
		id:'lobe',
	},{
		title:'小脑',
		info:'主要的视觉区',
		id:'cerebellum',
	},],
	ThreeModule:{},
	show:false,
	buttons: [
		{
				type: 'default',
				className: '',
				text: '辅助操作',
				value: 0
		},
		{
				type: 'primary',
				className: '',
				text: '主操作',
				value: 1
		}
]
	},
	onLoad: function () {
		wx.createSelectorQuery()
			.select('#c')
			.node()
			.exec((res) => {
				const canvas = new THREE.global.registerCanvas(res[0].node)
				let ret = loadgLTF(canvas, THREE);
				this.setData({
					ThreeModule:ret
				})
			})
	},
	onUnload: function () {
		//注意清理global中的canvas对象
		THREE.global.clearCanvas()
	},
	touchStart(e) {
		console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
	},
	touchMove(e) {
		console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
	},
	touchEnd(e) {
		console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchend')(e)
	},
	touchCancel(e) {
		// console.log('canvas', e)
	},
	longTap(e) {
		// console.log('canvas', e)
	},
	tap(e) {
		// console.log('canvas', e)
	},
	clickButton(e){
		let query = e.currentTarget.dataset['id'];
		let {camera, controls} = this.data.ThreeModule;
		camera.position.set(0,30,0);
		controls.update();
	},
  changeShowStatus(){

		setTimeout(()=>{
			this.setData({
				show: true
			})
		},1000)
		
	}
})
