;(function($,window,document,undefined){var pluginName="retina",defaults={zoomValue:200};function Plugin(element,options){this.element=element;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.init(element);}
Plugin.prototype={init:function(element){var _block=$(element);var webpage=_block.find('.mobile-page'),retinaZoomer=_block.find('.retina-zoomer'),retinaSize={width:150,height:150},offset={left:webpage.offset().left,top:webpage.offset().top},mouseX,mouseY;$(".page-inner").mousemove(function(e){mouseX=e.pageX;mouseY=e.pageY;var left=mouseX-offset.left,top=mouseY-offset.top;retinaZoomer.css({'top':top-retinaSize.height/2,'left':left-retinaSize.width/2,backgroundPosition:'-'+(1.6*left)+'px -'+(1.4*top)+'px'}).fadeIn('slow');}).on('mouseleave',function(e){retinaZoomer.css('display','none');});}};$.fn[pluginName]=function(options){return this.each(function(){if(!$.data(this,"plugin_"+pluginName)){$.data(this,"plugin_"+pluginName,new Plugin(this,options));}});};})(jQuery,window,document);