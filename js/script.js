$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});

/* DOUGHNUT of HOPS*/

var doughnutData = [
        {
          value: 34434,
          color:"#245239",
          highlight: "#903000",
          label: "Germany"
        },
        {
          value: 27782,
          color: "#306343",
          highlight: "#9A3E00",
          label: "United States"
        },
        {
          value: 21792,
          color: "#3B744C",
          highlight: "#A34D00",
          label: "Ethiopia"
        },
        {
          value: 11000,
          color: "#478556",
          highlight: "#AD5B00",
          label: "China"
        },
        {
          value: 4338,
          color: "#52965F",
          highlight: "#B66A00",
          label: "Czech Republic"
        },
        {
          value: 2206,
          color: "#5EA769",
          highlight: "#C07800",
          label: "Poland"
        },
        {
          value: 2000,
          color: "#6AB772",
          highlight: "#C07800",
          label: "North Korea"
        },
        {
          value: 1650,
          color: "#75C87C",
          highlight: "#D39500",
          label: "Albania"
        },
        {
          value: 1650,
          color: "#81D985",
          highlight: "#DDA300",
          label: "United Kingdom"
        },
        {
          value: 1338,
          color: "#8CEA8F",
          highlight: "#E6B200",
          label: "Slovenia"
        },

      ];

      

function createChart() {
  data = {
      labels: [ "Russia", 
                "Ukraine", 
                "France", 
                "Germany", 
                "Spain", 
                "Australia", 
                "Canada",
                "Turkey",
                "United Kingdom",
                "Argentina"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [ 16938000, 
                      9097700, 
                      8775000, 
                      8733800, 
                      8328200, 
                      7994720, 
                      7755700, 
                      7600000, 
                      5494000, 
                      4076940]
          }]}
  var cht = document.getElementById('barley-chart');
  var ctx = cht.getContext('2d');
  var barChart = new Chart(ctx).Bar(data,{responsive : true});
}
//window.onload = createChart;
window.onload = function(){
  var ctx = document.getElementById("chart-area").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
  createChart(false);
};