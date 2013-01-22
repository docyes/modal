define(['underscore', 'backbone', 'boostrap', 'ModalDelegate'], function(_, Backbone, undefined, ModalDelegate) {
    return Backbone.view.extend({
        className: modalDelegate.className,
        attributes: {
            style: 'display:none'
        },
        initialize: function() {
            var delegateOptions = _.extend({el: this.el}, _.pick(this.options, ['backdrop', 'keyboard', 'show', 'remote']));
            this.delegate = new ModalDelegate(delegateOptions);
            this.delegate.on('all', function() {
                this.trigger.apply(this, arguments);
            }, this);
            if (this.options.onhiddenRemove) {
                this.on('hidden', this.remove, this);
            }
        },
        show: function() {
            this.delegate.show();
        }, 
        hide: function() {
            this.delegate.hide();
        },
        toggle: function() {
            this.delegate.toggle();
        },
        template: ModalDelegate.template
    });
});
