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
          color:"#D52B1E",
          highlight: "#903000",
          label: "Germany"
        },
        {
          value: 27782,
          color: "#0052A5",
          highlight: "#9A3E00",
          label: "United States"
        },
        {
          value: 21792,
          color: "#009a44",
          highlight: "#A34D00",
          label: "Ethiopia"
        },
        {
          value: 11000,
          color: "#FF0000",
          highlight: "#AD5B00",
          label: "China"
        },
        {
          value: 4338,
          color: "#245239",
          highlight: "#B66A00",
          label: "Czech Republic"
        },
        {
          value: 2206,
          color: "#f8f8f8",
          highlight: "#C07800",
          label: "Poland"
        },
        {
          value: 2000,
          color: "#C60C30",
          highlight: "#ff2200",
          label: "North Korea"
        },
        {
          value: 1650,
          color: "#348064",
          highlight: "#D39500",
          label: "Albania"
        },
        {
          value: 1650,
          color: "#959234",
          highlight: "#DDA300",
          label: "United Kingdom"
        },
        {
          value: 1338,
          color: "#q53213",
          highlight: "#E6B200",
          label: "Slovenia"
        },

      ];

      window.onload = function(){
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
      };