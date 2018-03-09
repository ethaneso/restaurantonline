$(function () {
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innverWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	})
});