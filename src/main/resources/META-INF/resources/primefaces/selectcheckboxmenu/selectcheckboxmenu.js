/**
 * PrimeFaces SelectCheckboxMenu Widget
 * AASYS addition
 */

PrimeFaces.widget.SelectCheckboxMenu = PrimeFaces.widget.DeferredWidget.extend({

    show: function() {
        this.alignPanel();
        if(!this.panel.width() || this.panel.width() < this.jq.width()){
            this.panel.width(this.jq.width());
        }
        this.panel.show();
        this.postShow()
    }

});