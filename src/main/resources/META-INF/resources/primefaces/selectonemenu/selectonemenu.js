/**
 * PrimeFaces SelectOneMenu Widget
 * AASYS addition for handle enter key on dropdowns fix : https://github.com/primefaces/primefaces/issues/1127
 */

PrimeFaces.widget.SelectOneMenu = PrimeFaces.widget.DeferredWidget.extend({

    handleEnterKey: function(event) {
        if(this.panel.is(':visible')) {
            this.selectItem(this.getActiveItem());
            event.preventDefault();
            event.stopPropagation();
        }
    }

});