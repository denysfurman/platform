$(function () {

//form style
    $('.form_style').styler({
        selectSearch: true
    });

    //counter
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 3000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
    });




});
$(function() {

    Highcharts.theme = {
        colors: ['#cac096', '#dbd4b8', '#ece8da', '#8eb03b', '#a2c038', '#b8d434'],
        chart: {
        }
    };
    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);



});

$(function() {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_1',
            type: 'pie'
        },
        title: {
            text: 'Sold businesses'
        },
        yAxis: {
            title: false
        },
        plotOptions: {
            pie: {
                shadow: false
            }
        },
        tooltip: {
            useHTML: true,
            borderWidth:0,
            borderRadius:0,
            shadow: false,
            padding: 10,

            backgroundColor: "rgba(255,255,255,1)",

            formatter: function() {
                return  this.y + "<br/>" + this.point.name;
            }
        },
        series: [{
            name: 'Browsers',
            data: [
                ['sold businesses in\n' +
                'North America', 32830],
                ['sold businesses\n' +
                'in Europe', 15780],
                ['sold businesses\n' +
                'in Asia', 8150],

            ],
            size: '60%',
            innerSize: '60%',
            borderWidth: 4,
            showInLegend: false,

            dataLabels: {
                enabled: true,
                useHTML: true,

                format: '<b>{point.y}</b><br/><small>{point.name}</small>',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }

        }]
    });
});
