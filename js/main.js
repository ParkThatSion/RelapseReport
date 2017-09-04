$(document).ready(function() {
	function updateTable(relapseArr) {
		var toAppend = '';

		for (var i = 0; i < relapseArr.length; i++) {
			toAppend += '<tr>'
			toAppend += '<td>' + relapseArr[i].date + '</td>';
			toAppend += '<td>' + (relapseArr[i].relapse ? "Yes" : "No") + '</td>';
			toAppend += '<td>' + relapseArr[i].emotion.bored + '</td>';
			toAppend += '<td>' + relapseArr[i].emotion.lonely + '</td>';
			toAppend += '<td>' + relapseArr[i].emotion.angry + '</td>';
			toAppend += '<td>' + relapseArr[i].emotion.stressed + '</td>';
			toAppend += '<td>' + relapseArr[i].emotion.tired + '</td>';
			toAppend += '<td>' + relapseArr[i].count + '</td>';
			toAppend += '<td>' + (relapseArr[i].bible ? "Yes" : "No") + '</td>';
			toAppend += '<td>' + (relapseArr[i].exercise ? "Yes" : "No") + '</td>';
			toAppend += '</tr>'
		}

		$("#relapse-record").append(toAppend);
	}

	$.ajax({
		url: '/resources/relapse_list.txt',
		method: 'GET',
		dataType: 'text json',
		// data: {param1: 'value1'},

		success: function(data) {
			// $("#debug-output").text(data.relapseArr[0].date);
			updateTable(data.relapseArr);
		}
	});
});