const webfontsGenerator = require('webfonts-generator');

webfontsGenerator({
    files: [
        'src/icons/lightbulb.svg',
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
