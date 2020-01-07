/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

const PI2 = Math.PI * 2
const PI_HALF = Math.PI / 2

/**
 * 自动判断数据类型的差值
 * @param  {[Any]} a
 * @param  {[Any]} b
 * @param  {[Any]} p
 * @return {[Any]}
 */
export function lerp(a: any, b: any, p: number): any {
	if (Array.isArray(a)) {
		const r = []
		for (let i = 0; i < a.length; i++) {
			r.push(lerp(a[i], b[i], p))
		}
		return r
	} else {
		return a * (1 - p) + b * p
	}
}

// 移植GLSL中的函数
export function clamp(x: number, min: number, max: number): number {
	return Math.min(Math.max(x, min), max)
}

// 缓动函数：sin缓动，0-1
export function easeSin01(p) {
	return 0.5 - Math.cos(Math.PI * p) / 2
	// return 0.5 + Math.sin(Math.PI * p - PI_HALF) / 2;
}
