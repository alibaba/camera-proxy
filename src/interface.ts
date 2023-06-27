/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

/**
 * 标准地图机位
 */
export interface GeographicStates {
	/**
	 * 视觉焦点 坐标
	 * {east, north, up} 相对于世界中心地表
	 */
	center: number[]
	/**
	 * 倾斜角
	 * 相对于垂直向下方向的倾斜角度
	 */
	pitch: number
	/**
	 * 旋转角
	 * 相对于正南方向的顺时针倾斜角度
	 */
	rotation: number
	/**
	 * 缩放级别
	 */
	zoom: number
}

/**
 * 标准笛卡尔坐标系机位
 */
export interface CartesianStates {
	/**
	 * 相机机位的世界坐标
	 */
	position: number[]

	/**
	 * 相机自身的旋转角 （欧拉角）
	 */
	rotationEuler: number[]

	/**
	 * 焦距，视觉焦点离相机的距离，
	 * - 需要这个值来计算 GeographicStates.center[2]
	 * - 如果该值为0，则
	 * 		- 视觉焦点 定为 视线和地平面的交点
	 * 		- 视觉焦点 定为 视线和地平面的交点
	 * 		- GeographicStates.center[2] = 0
	 */
	distance: number
}

export type States = GeographicStates | CartesianStates

/**
 * TS 类型保护
 */
export function isGeographicStates(sth: States): sth is GeographicStates {
	return !!(sth as any).center
}

/**
 * 默认状态
 */
export function defaultGeographicStates() {
	return {
		center: [0, 0, 0],
		pitch: 0.7,
		rotation: 0.4,
		zoom: 13.5,
	}
}

export function defaultCartesianStates() {
	return {
		position: [10, 10, 10],
		rotationEuler: [0, 0, 0],
		distance: 1000,
	}
}

/**
 * 地图相机状态变化范围
 */
export interface Limit {
	/**
	 * 缩放级别
	 * {下限, 上限}
	 */
	zoom?: number[]
	/**
	 * 倾斜角度限制
	 * {下限, 上限}
	 */
	pitch?: number[]
	/**
	 * 旋转角度限制
	 * {下限, 上限}
	 */
	rotation?: number[]
	/**
	 * 中心坐标限制
	 * {下限{east, north, up}, 上限{east, north, up}}
	 */
	center?: number[][]
}

export const defaultLimit: Limit = {
	zoom: [0.5, 25],
	pitch: [0, Math.PI / 2],
	rotation: [-Infinity, Infinity],
	center: [
		[-Infinity, -Infinity, -Infinity],
		[Infinity, Infinity, Infinity],
	],
}

// 缓动函数
export interface EasingFunc {
	(p: number): number
}
