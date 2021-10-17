// Stacked area chart for global consumption by type
var vg_1 = "js/area_chart.vg.json";
vegaEmbed("#global_consumption_by_type_area", vg_1);

// Scatterplot of consumption per capita vs GDP per capita
var vg_2 = "js/scatterplot.vg.json";
vegaEmbed("#gdp_consumption_scatterplot", vg_2);

// Choropleth map of consumption per capita
var vg_3 = "js/choropleth_map.vg.json";
vegaEmbed("#consumption_choropleth", vg_3);

// Choropleth map for energy access
var vg_4 = "js/energy_access_map.vg.json";
vegaEmbed("#energy_access_choropleth",vg_4);

// Bar chart for country renewable energy proportion
var vg_5 = "js/country_consumption_bar.vg.json";
vegaEmbed("#country_renewable_bar",vg_5);

// Stacked are chart for global renewables consumption
var vg_6 = "js/global_renewables_consumption.vg.json";
vegaEmbed("#global_renewables_vis",vg_6);

// Line chart for energy access %
var vg_7 = "js/access_line.vg.json";
vegaEmbed("#access_percent_line",vg_7)

// Line chart for global consumption per capita
var vg_8 = "js/world_consumption_per_capita.vg.json";
vegaEmbed("#global_consumption_line",vg_8);