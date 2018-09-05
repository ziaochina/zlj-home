export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'zlj-home',
		children: [{
			name: 'gridLayout',
			component: 'GridLayout.WidthProviderGridLayout',
			draggableHandle: '.ant-card-head',
			isResizable: false,
			isDraggable: false,
			useCSSTransforms: false,
			cols: 12,
			rowHeight: 50,
			layout: [
				{ i: 'shortcuts', x: 0, y: 0, w: 12, h: 3, minW: 6, minH: 3 },
				{ i: 'list1', x: 0, y: 2, w: 7, h: 6, minW: 4, minH: 6 },
				{ i: 'list', x: 7, y: 2, w: 5, h: 6, minW: 4, minH: 6 }
			],
			children: [{
				name: 'shortcuts',
				component: '::div',
				key: 'shortcuts',
				children: {
					name: 'card',
					component: 'Card',
					title: '常用功能',
					children: [{
						name: 'content',
						component: 'AppLoader',
						appName: 'home-shortcuts'
					}]
				}
			}, {
				name: 'list1',
				component: '::div',
				key: 'list1',

				children: {
					name: 'card',
					component: 'Card',
					title: '待办列表',
					children: [{
						name: 'content',
						component: 'AppLoader',
						appName: 'home-list'
					}]
				}

			}, {
				name: 'list',
				component: '::div',
				key: 'list',

				children: {
					name: 'card',
					component: 'Card',
					title: '通知',
					children: [{
						name: 'content',
						component: 'AppLoader',
						appName: 'home-list'
					}]
				}

			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
		}
	}
}