function doMove(obj,fangx,att,spe,end){
      att = parseInt(getStyle( obj, fangx ))< spe ? att:-att;
       clearInterval(obj.time);
        obj.time = setInterval(function () {
          var speed = parseInt(getStyle( obj, fangx )) + att;
            if ( speed > spe && att>0 ||  speed < spe && att<0 ) {
              speed = spe;
                 }
                 obj.style[fangx] = speed + 'px';
                    if ( speed == spe ) {
                        clearInterval( obj.timer );
                         end && end();
                            }
                        },30)

                }

            function getStyle( obj, attr ){
                return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
            }


function opacity(obj,fangx,att,spe,end){
    att = parseInt(getStyle( obj, fangx ))< spe ? att:-att;
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        var speed = parseFloat(getStyle( obj, fangx )) + att;
        if ( speed > spe && att>0 ||  speed < spe && att<0 ) {
            speed = spe;
        }
        obj.style[fangx] = speed + 'px';
        if ( speed == spe ) {
            clearInterval( obj.timer );
            end && end();
        }
        obj.style[fangx]=speed;
    },100)

}

