# BatteryCost.me

A web app for modeling the cost of lithium ion batteries

https://www.batterycost.me

### Usage
This web app implements a simple bottom-up model of the cost of lithium ion batteries. Move the sliders to change the input parameters and see the cost breakdown change in real time. 

The Cell sections allows users to specify major parameters in the cell design, and the Price section allows users to specify the prices of materials used in the cell as well as the cell manufacturing and pack costs.

The Statistics section shows the energy per cell (in Wh), the cell-level cost ($/kWh), and the pack-level cost ($/kWh). The pack-level cost is simply the cell-level cost with the pack integration costs added. 

The Cost Breakdown section shows the breakdown of the pack cost by component. Graphs can be hovered to see the individual component costs.

The Compare section shows a stacked bar chart comparison between the user's current cell and several standard cells such as NMC111, NCA811, LFP, and NCA.

### Tech
App written in React, styling with vanilla CSS, interactive plots with Chart.js.

### Disclaimer
This cost model is build using arbitrary prices which do not reflect real-world figures. Results should not be taken to represent present-day battery costs.