var Menu = function() {
	this.menuButton = $("#menu-button");
	this.navi = $("#navi");

	this.hidden();
	this.menuButton.click(this.show.bind(this));
};
Menu.prototype.show = function() {
	console.log("click");
	this.navi.removeClass("navi-hidden");
};
Menu.prototype.hidden = function() {
	this.navi.addClass("navi-hidden");
};

$(function() {
	var menu = new Menu();
});

