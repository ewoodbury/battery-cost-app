## BatteryCost.me
A web app for modeling the cost of lithium ion batteries.
Live demo at https://www.batterycost.me

### How to Use
This is a simple calculator that aggregates all components of the cost of a lithium ion batteries. Simply move the sliders to change the input parameters and see the cost breakdown change in real time. 

The Cell sections allows users to specify major parameters in the cell design, and the Price section allows users to specify the prices of materials used in the cell as well as the cell manufacturing and pack costs.

The Statistics section shows the energy per cell (in Wh), the cell-level cost ($/kWh), and the pack-level cost ($/kWh). The pack-level cost is simply the cell-level cost with the pack integration costs added. 

The Cost Breakdown section shows the breakdown of the pack cost by component. Users can interact with the graph by hovering over the slices to see the individual costs and by clicking on legend items to exclude that component from the graph.

The Compare section currently shows dummy data, but will show a stacked bar chart comparison between the user's current cell and several standard cells such as NMC111, NCA811, LFP, and NCA.

### Tech
This app was written in React.js, with framework provided by create-react-app. All styling was done using vanilla CSS (no frameworks). Fonts  by Google Fonts, graphs by Chart.js.

### Disclaimers
- The default cell and price inputs do not reflect real-world data, but instead show general cost estimates based on publicly available information. The default cost results do not reflect actual commercial battery costs.
- Users should not use this tool as a reflection of real-world costs, but instead as a tool to demonstrate how battery costs change as cell parameters or prices change. For instance, this app would be appropriate for estimating the cost reduction associated with a 10% improvement in the specific capacity of the cathode.
