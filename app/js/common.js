$(function () {

//form style
    $('.form_style').styler({
        selectSearch: true
    });

    //all page
    $('.all_pages').click(function () {
        $('.all_pages').toggleClass('open');
    });

    //counter
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 3000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
    });

    //user header buttom

    $('.menu-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('close');

        $(".user_header_nav").slideToggle();

    });

    //galleryy
    $('.fancybox_gall').fancybox({

    });

    //TABS
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);


});
$(function () {

    Highcharts.theme = {
        colors: ['#cac096', '#dbd4b8', '#ece8da', '#8eb03b', '#a2c038', '#b8d434'],
        chart: {}
    };
    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);


});

$(function () {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_1',

            type: 'pie'
        },
        title: {
            text: '<span class="chart_title"><b>Sold</b> <br> businesses</span>',
            align: 'center',

            verticalAlign: 'middle',
            y: 0
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
            borderWidth: 0,
            borderRadius: 0,
            shadow: false,
            padding: 0,

            backgroundColor: "rgba(255,255,255,1)",

            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        series: [{
            name: 'Browsers',
            data: [

                ['sold businesses\n' +
                'in Europe', 15780],
                ['sold businesses in\n' +
                'North America', 32830],
                ['sold businesses\n' +
                'in Asia', 8150],

            ],
            size: '60%',
            innerSize: '70%',
            borderWidth: 1,
            showInLegend: false,

            dataLabels: {

                useHTML: true,

                format: '<b>{point.y}</b><br/><small>{point.name}</small>',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }

        }]
    });
});


$(function () {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_2',

            type: 'pie'
        },
        title: {
            text: '<span class="chart_title"><b>bought</b> <br> businesses</span>',
            align: 'center',

            verticalAlign: 'middle',
            y: 0
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
            borderWidth: 0,
            borderRadius: 0,
            shadow: false,
            padding: 0,


            backgroundColor: "rgba(255,255,255,1)",

            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        series: [{
            name: 'Browsers',
            data: [

                ['bought businesses in Europe', 9630],
                ['bough  businesses in Asia', 11730],
                ['bought businesses in North America', 12570],

            ],
            size: '60%',
            innerSize: '70%',
            borderWidth: 1,
            showInLegend: false,

            dataLabels: {
                enabled: true,
                useHTML: true,

                format: '<b> {point.y}</b><br/><small>{point.name}</small>',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }

        }]
    });
});

$(function () {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_3',

            type: 'pie'
        },
        title: {
            text: '<span class="chart_title"><b>Invested</b>  <br> businesses</span>',
            align: 'center',

            verticalAlign: 'middle',
            y: -3
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
            borderWidth: 0,
            borderRadius: 0,
            shadow: false,
            padding: 0,


            backgroundColor: "rgba(255,255,255,1)",

            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },

        series: [{
            name: 'Browsers',
            data: [
                ['invested in Europe', 2400000],
                ['invested in North America', 1500000],
                ['invested in Asia', 1800000],

            ],
            size: '60%',
            innerSize: '70%',
            borderWidth: 1,
            showInLegend: false,

            dataLabels: {
                enabled: true,
                useHTML: true,

                format: '<b>${point.y}</b><br/><small>{point.name}</small>',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }

        }]
    });
});

