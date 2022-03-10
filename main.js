$(document).ready(function(){

    // icons control reset
    controlCircles();
    // controlSquares(); // not needed if we start with the row of circles only

    // circle onclick function
    $('.circles').on('click', '.circle', function(){
        // add new square to squares as a last element
        $('.squares').append("<div><div class='square " + transferColor(this)[0] + "'></div><p class='" + transferColor(this)[1] + " hidden'>" + transferColor(this)[2] + "</p></div>");
        
        // remove clicked circle
        $(this).parent("div").remove();

        // icons control reset
        controlCircles();
        controlSquares();
    });

    // square onclick function
    $('.squares').on('click', '.square', function(){    
        // add new circle to circles as a first element
        $('.circles').prepend("<div><div class='circle " + transferColor(this)[0] + "'></div><p class='" + transferColor(this)[1] + " hidden'>" + transferColor(this)[2] + "</p></div>");

        // remove clicked square
        $(this).parent("div").remove();

        // icons control reset
        controlCircles();
        controlSquares();
    });
    
    // circles control
    function controlCircles(){
        var circles = $('.circle');

        // unfade all circles if any left faded after previous click
        circles.stop().fadeTo('fast',1);

        // fade other circles on circle hover
        circles.on('mouseenter mouseleave', function(e){
            circles.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.5:1);
            
            // show color label on hover
            $(this).siblings('p').removeClass('hidden');
        });
        
        // remove color label on mouseleave
        circles.on('mouseleave', function(){
            $(this).siblings('p').addClass('hidden');
        })
                
    }

    // squares control
    function controlSquares(){
        var squares = $('.square');

        // unfade all squares if any left faded after previous click
        squares.stop().fadeTo('fast',1);

        // fade other squares on square hover
        squares.on('mouseenter mouseleave', function(e) {
            squares.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.5:1);

            // show color label on hover
            $(this).siblings('p').removeClass('hidden');
        });

        // remove color label on mouseleave
        squares.on('mouseleave', function(){
            $(this).siblings('p').addClass('hidden');
        })
    }

    // transfer shape color, label color, and label title from removed circle to a new square and vice versa
    function transferColor(element){
        if ($(element).hasClass("icon-red")){
            return ["icon-red", "p-red", "Red"];
        }else if ($(element).hasClass("icon-green")){
            return ["icon-green", "p-green", "Green"];
        }else if ($(element).hasClass("icon-blue")){
            return ["icon-blue", "p-blue", "Blue"];
        }else if ($(element).hasClass("icon-orange")){
            return ["icon-orange", "p-orange", "Orange"];
        }else if ($(element).hasClass("icon-yellow")){
            return ["icon-yellow", "p-yellow", "Yellow"];
        }
    }
})