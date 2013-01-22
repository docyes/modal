define(['bootstrap', 'backbone'], function(undefined, Backbone) {
    return Backbone.View.extend({
        initialize: function() {
            this.$el.modal(_.pluck(this.options, ['backdrop', 'keyboard', 'remote']));
            if (this.options.show) { //ensure full show event lifecycle
                this.trigger('show');
                this.$el.modal('show');
            }
            
        },
        events: {
            'show, shown, hide, hidden': function(e) { //proxy events to view
                this.trigger(e.type);
            }
        },
        show: function() {
            this.$el.modal('show');
        },
        hide: function() {
            this.$el.modal('hide');
        },
        toggle: function() {
            this.$el.modal('toggle');
        }
    },
    {
        className: 'modal',
        template: '\
            <div class="modal hide fade">\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                </div>\
                <div class="modal-body">\
                </div>\
                <div class="modal-footer">\
                </div>\
            </div>\
        '
    });
});
