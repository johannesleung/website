// from https://stackoverflow.com/questions/20719550/play-one-html-audio-element-at-a-time
$(function(){
    $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });
});
