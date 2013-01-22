modal
=====

Backbone/Bootstrap Modal View

General Architecture:

1) Simple inheritable view class for modals (ModalView)

2) Generic behavioral driver for bootstrap modal plugin (ModalDelegate)

```js
define('HelloWorldModal', ['ModalView'], function(ModalView) {
     return Modalview.extend({
        initialize: function() {
            ModalView.prototype.initialize.apply(this, arguments);
        },
        render: function() {
            this.$el.html(this.template);
            this.$('.modal-body').html('w00t!');
            return this;
        }
     });
});

define(['HelloWorldModal'], function(HelloWorldModal) {
     var helloWorldModal = new HelloWorldModal({onhiddenRemove: true});
     helloWorldModal.append(helloWorldModal.render().el);
     helloWorldModal.show();
});
```
