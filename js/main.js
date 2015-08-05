var Menu = function() {
	this.menuButton = $("#menu-button");
	this.navi = $("#navi");
	this.naviBg = $("#navi-bg");
	
	this.hidden();
	this.menuButton.click(this.show.bind(this));
	this.naviBg.click(this.hidden.bind(this));
};
Menu.prototype.show = function() {
	this.navi.removeClass("navi-hidden");
	this.naviBg.css('display', 'block');
};
Menu.prototype.hidden = function() {
	this.navi.addClass("navi-hidden");
	this.naviBg.css('display', 'none');
};

$(function() {
	var menu = new Menu();
});
