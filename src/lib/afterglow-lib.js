// Here are some helper functions that may be used within afterglow

/**
 * IE8 compliant way of handling event bindings with the possibility to remove them lateron, with support for multiple events at once
 * @param {domelement} elem  The element to bind
 * @param {string} eventType The events to react to
 * @param {function} handler The function to execute
 */
function addEventHandler(elem,eventType,handler) {
    var evts = eventType.split(' ');
    for (var i=0, iLen=evts.length; i<iLen; i++) {
    	if (elem.addEventListener)
    		elem.addEventListener (evts[i],handler,false);
    	else if (elem.attachEvent)
    		elem.attachEvent ('on'+evts[i],handler);
    } 
}

/**
 * IE8 compliant way of handling removing event bindings which were added before
 * @param {domelement} elem  The element to unbind
 * @param {string} eventType The events to react to
 * @param {function} handler The function to detach
 */
function removeEventHandler(elem,eventType,handler) {
    var evts = eventType.split(' ');
    for (var i=0, iLen=evts.length; i<iLen; i++) {
    	if (elem.removeEventListener) 
    		elem.removeEventListener (evts[i],handler,false);
    	if (elem.detachEvent)
    		elem.detachEvent ('on'+evts[i],handler); 
    }
}

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

/**
 * Gets a youtube video thumbnail
 * @param  {string} id 	The videos youtube id
 * @return {string} the url to the thumbnail
 */
function loadYoutubeThumbnailUrl(id){
    var uri = 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg';
    return uri;
};


/**
 * Sets a variable 'ie' holding the IE version (if IE)
 */
var ie = (function(){

    var undef,
        v = 6,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 7 ? v : undef;

}());