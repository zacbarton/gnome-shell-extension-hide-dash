const Lang = imports.lang;
const Main = imports.ui.main;

let hideDash;


// extension functions
function init() {
	hideDash = new HideDash();
}

function enable() {
	hideDash.enable();
}

function disable() {
	hideDash.disable();
}


// our HideDash object
HideDash = function() {
    this.init();
}

HideDash.prototype = {
	init: function() {
		this.observer = null;

		// store the values we are going to override
		this.old_x = Main.overview._viewSelector.actor.x;
		this.old_width = Main.overview._viewSelector.actor.get_width();
	},
	
	enable: function() {
		// global.log("enable hide-dash");
		this.observer = Main.overview.connect("showing", Lang.bind(this, this.hide));
	},
	
	disable: function() {
		// global.log("disable hide-dash");
		Main.overview.disconnect(this.observer);
		this.show();
	},

	hide: function() {
		// global.log("show dash");
		Main.overview._dash.actor.hide();
		Main.overview._viewSelector.actor.set_x(0);
		Main.overview._viewSelector.actor.set_width(Main.overview._group.get_width());
		Main.overview._viewSelector.actor.queue_redraw();
	},

	show: function() {
		// global.log("hide dash");
		Main.overview._dash.actor.show();
		Main.overview._viewSelector.actor.set_x(this.old_x);
		Main.overview._viewSelector.actor.set_width(this.old_width);
		Main.overview._viewSelector.actor.queue_redraw();
	}
};
