const webfontsGenerator = require('webfonts-generator');

webfontsGenerator({
    files: [
        'src/icons/video.svg',
        'src/icons/icon.svg',
        'src/icons/contentbox.svg',
        'src/icons/button.svg',
    ],
    dest: 'dist/',
    fontName: 'mb-icon-font',
    templateOptions: {
      classPrefix: 'mb-icon-',
      baseSelector: '.mb-icon'
    }
}, function(error) {
    if (error) {
        console.log('Fail!', error);
    } else {
        console.log('Done!');
    }
})
