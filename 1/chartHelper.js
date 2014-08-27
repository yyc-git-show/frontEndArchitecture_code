(function () {
    window.chartHelper = {
        draw: function (containerId, seriesDataArr) {
            var tickInterval = 5 * 24 * 3600 * 1000,
                chartData = null;

            chartData = {
                chart: {
                    renderTo: containerId,
                    type: "line"

                },
...
                series: seriesDataArr
            };
            new Highcharts.Chart(chartData);
        }
    }
}());
