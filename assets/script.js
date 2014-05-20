var $videos = $('video');

$videos.each(function (i, video) {
    video.volume = 0;
});

$videos
    .on('mouseenter', function () {
        this.volume = 1
    })
    .on('mouseleave', function () {
        this.volume = 0
    });