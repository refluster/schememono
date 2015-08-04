var Menu = function() {
	this.menuButton = $("#menu-button");
	this.navi = $("#navi");

	this.navi.addClass("navi-hidden");
	this.menuButton.click(this.show.bind(this));
	console.log(this.navi);
};
Menu.prototype.show = function() {
	console.log("click");
	this.navi.removeClass("navi-hidden");
};
Menu.prototype.hidden = function() {
};

$(function() {
	var menu = new Menu();
});

