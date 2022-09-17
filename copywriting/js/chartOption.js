var lineOptions = {
	legend: {
		show: true,
		x: 'center',
		y: '35',
		icon: 'stack',
		itemWidth: 10,
		itemHeight: 10,
		textStyle: {
			color: '#1bb4f6'
		},
		data: ['吴刚', '熊明远']
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		axisLabel: {
			color: '#397cbc'
		},
		axisTick: {
			show: false,
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: '#195384'
			}
		},
		data: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			textStyle: {
				color: '#186afe'
			}
		},
		axisTick: {
			show: false,
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: '#11366e'
			}
		}

	},
	series: [
		{
			name: '熊明远',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					color: 'rgba(247,49,49,1)',
					lineStyle: {
						color: "rgba(247,49,49,1)",
						width: 1
					},
					areaStyle: {
						//color: '#94C9EC'
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(247,49,49,0.1)'
						}, {
							offset: 1,
							color: 'rgba(247,49,49,0.9)'
						}]),
					}
				}
			},
			data: ['40', '41', '40', '39', '39', '38', '36']
		},
		{
			name: '吴刚',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					color: 'rgba(243,183,73,1)',
					lineStyle: {
						color: "rgba(243,183,73,1)",
						width: 1
					},
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(243,183,73,0.1)'
						}, {
							offset: 1,
							color: 'rgba(243,183,73,0.9)'
						}]),
					}
				}
			},
			data: ['37', '37', '36', '35', '35', '34', '32']
		}
	]
}