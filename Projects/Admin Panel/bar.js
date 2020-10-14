new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: ["Shavers", "Soap", "Water", "Coke"],
		datasets: [
			{
				label: "Products Ordered",
				backgroundColor: ["#f15025", "#a610e5", "#2b5cb9", "#740d06"],
				data: [150, 120, 100, 45]
        }
      ]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Predicted Sales'
		}
	}
});
