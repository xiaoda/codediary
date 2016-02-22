var HSGame = function(options) {

    var OPTIONS = {
        id: 'game',
    }
    var FUNCS = {};
    var $ELEMENT;

    function _gameSizeInit() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();
        $ELEMENT.css({
            width: OPTIONS.width ? OPTIONS.width : windowWidth,
            height: OPTIONS.height ? OPTIONS.height : windowHeight,
        });
        $('body').css({
            width: windowWidth,
            height: windowHeight,
        });
    }
    function _eventsInit() {
        $(window).on('resize', function(){
            _gameSizeInit();
        });
    }

    FUNCS.init = function() {
        $.extend(OPTIONS, options);
        $ELEMENT = $('#' + OPTIONS.id);
        _gameSizeInit();
        _eventsInit();
    }

    return FUNCS;

}