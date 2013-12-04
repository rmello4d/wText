WAF.define('wText', function() {
    "use strict";
    var Widget = WAF.require('waf-core/widget');

    var widget = Widget.create('wText');

    widget.addDomHtmlProperty('value');

    return widget;
});
