---
API:
 - name: icon
   type: String
   parameters: feather icon name
   description: statistics card icon
   default:
 - name: statistic
   type: String, Number
   parameters: statistics
   description: Shows statistics of chart
   default:
 - name: statisticTitle
   type: String
   parameters: statistics title
   description: Shows statistics title of chart
   default:
 - name: chartData
   type: Object
   parameters: 
   description: chart data
   default:
 - name: color
   type: String
   parameters: theme colors
   description: Change chart color
   default: primary
 - name: type
   type: String
   parameters: line, area
   description: You can choose between area chart or line chart
   default: 
 - name: iconRight
   type: Boolean
   parameters: true, false
   description: add icon to statistics card
   default: 
---


# Statistics Card

<box header>
	
Quickly create awesome looking statistics card.

</box>


<box>
	
## Overview

**Component Name:** statistics-card-line
  
**Use case:** Quickly create statistics card

**Path:** src/components/statistics-cards/StatisticsCardLine.vue

**Is Globally Registered**: false

</box>

<box>

## Creating Statistics Card

`statistics-card-line` component uses `vue-apex-chart` library to create charts. To create statistics card you have to pass chart data along with other required props.

<vuecode md>
<div slot="demo">
<img :src="$withBase('/demo/scard1.png')" alt="scard1">
</div>
<div slot="code">

```html
<template lang="html">
	<statistics-card-line
		icon="UsersIcon"
		statistic="92.6k"
		statisticTitle="Subscribers Gained"
		:chartData="subscribersGainedChartData"
		type='area' />
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
  components: {
    StatisticsCardLine
  },
  data() {
    return {
      subscribersGainedChartData: {
          series: [{
              name: 'Subscribers',
              data: [28, 40, 36, 52, 38, 60, 55]
          }],
          chartOptions: {
              grid: {
                  show: false,
                  padding: {
                      left: 0,
                      right: 0
                  }
              },
              chart: {
                  toolbar: {
                      show: false,
                  },
                  sparkline: {
                      enabled: true
                  }
              },
              dataLabels: {
                  enabled: false
              },
              stroke: {
                  curve: 'smooth',
                  width: 2.5
              },
              fill: {
                  type: 'gradient',
                  gradient: {
                      shadeIntensity: 0.9,
                      opacityFrom: 0.7,
                      opacityTo: 0.5,
                      stops: [0, 80, 100]
                  }
              },
              xaxis: {
                  type: 'numeric',
                  lines: {
                      show: false,
                  },
                  axisBorder: {
                      show: false,
                  },
                  labels: { show: false }
              },
              yaxis: [{
                  y: 0,
                  offsetX: 0,
                  offsetY: 0,
                  padding: { left: 0, right: 0 },
              }],
              tooltip: {
                  x: { show: false }
              },
          },
      },
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Changing Color

You can change the color of chart using `color` prop.

<vuecode md>
<div slot="demo">
<img :src="$withBase('/demo/scard2.png')" alt="scard2">
</div>
<div slot="code">

```html
<template lang="html">
	<statistics-card-line
		icon="ShoppingBagIcon"
		statistic="97.5K"
		statisticTitle="Orders Received"
		:chartData="ordersReceviedChartData"
		color='warning'
		type='area' />
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
  components: {
    StatisticsCardLine
  },
  data() {
    return {
      ordersReceviedChartData: {
          series: [{
              name: 'Orders',
              data: [10, 15, 8, 15, 7, 12, 8]
          }],
          chartOptions: {
              grid: {
                  show: false,
                  padding: {
                      left: 0,
                      right: 0
                  }
              },
              chart: {
                  toolbar: {
                      show: false,
                  },
                  sparkline: {
                      enabled: true
                  }
              },
              dataLabels: {
                  enabled: false
              },
              stroke: {
                  curve: 'smooth',
                  width: 2.5
              },
              fill: {
                  type: 'gradient',
                  gradient: {
                      shadeIntensity: 0.9,
                      opacityFrom: 0.7,
                      opacityTo: 0.5,
                      stops: [0, 80, 100]
                  }
              },
              xaxis: {
                  type: 'numeric',
                  lines: {
                      show: false,
                  },
                  axisBorder: {
                      show: false,
                  },
                  labels: { show: false }
              },
              yaxis: [{
                  y: 0,
                  offsetX: 0,
                  offsetY: 0,
                  padding: { left: 0, right: 0 },
              }],
              tooltip: {
                  x: { show: false }
              },
          },
      },
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Changing Options

You can change options like `icon`, `statistics title`, `statistics`, `chart type` etc. For exploring default values of prop please check component at `/src/components/statistics-cards/StatisticsCardLine.vue`.

<vuecode md>
<div slot="demo">
<img :src="$withBase('/demo/scard3.png')" alt="scard3">
</div>
<div slot="code">

```html
<template lang="html">
	<statistics-card-line
		icon="MonitorIcon"
		icon-right
		statistic="78.9k"
		statisticTitle="Site Traffic"
		:chartData="siteTrafficChartData" />
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
  components: {
    StatisticsCardLine
  },
  data() {
    return {
      siteTrafficChartData: {
          series: [{
              name: 'Traffic Rate',
              data: [150, 200, 125, 225, 200, 250]
          }],
          chartOptions: {
              grid: {
                  show: false,
                  padding: {
                      left: 0,
                      right: 0
                  }
              },
              chart: {
                  type: 'line',
                  dropShadow: {
                      enabled: true,
                      top: 5,
                      left: 0,
                      blur: 4,
                      opacity: 0.10,
                  },
                  toolbar: {
                      show: false,
                  },
                  sparkline: {
                      enabled: true
                  }
              },
              stroke: {
                  width: 5,
                  curve: 'smooth'
              },
              xaxis: {
                  type: 'numeric',
              },
              colors: ['#7367F0'],
              fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'dark',
                      gradientToColors: ['#A9A2F6'],
                      shadeIntensity: 1,
                      type: 'horizontal',
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [0, 100, 100, 100]
                  },
              },
              markers: {
                  size: 0,
                  hover: {
                      size: 5
                  }
              },
              tooltip: {
                  x: { show: false }
              },
          }
      },
    }
  }
}
</script>
```

</div>
</vuecode>

:::tip
If you want to learn more about what chart-data contains, you can always check their docs or for quick refrence you can always check our chart-data file.
  
`/src/views/ui-elements/card/analyticsData.js`
:::

</box>

