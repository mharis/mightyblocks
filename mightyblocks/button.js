function wpMightyBlocksButtonTemplate( className, attributes, urlEmbed ) {
    return `<div class=${ className }>
        <iframe src=${ urlEmbed.href }></iframe>
    </div>`;
}