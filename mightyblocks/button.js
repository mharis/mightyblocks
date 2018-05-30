function wpMightyBlocksButtonTemplate( className, attributes) {
    return `<div class="${ className } wp-block-mightyblocks-block-button-${ attributes['blockId'] }">
        <style type="text/css" scoped="scoped">
        .${ className }-${ attributes['blockId'] } a {
            background-color: ${ attributes['backgroundColor'] };
            color: ${ attributes['textColor'] };
        }
        .${ className }-${ attributes['blockId'] } a:hover {
            background-color: ${ attributes['hoverBackgroundColor'] };
            color: ${ attributes['hoverTextColor'] };
        }
        </style>
        <a
            class="${ className }-size-${ attributes['size'] }"
            href="${ attributes['link'] }"
            rel="${ attributes['nofollow'] ? 'nofollow': '' }"
            target="${ attributes['newwindow'] ? '_blank' : '' }"
        >
            <span class="${ className }-content-wrapper">
                <div data-type="title"></div>
            </span>
        </a>
    </div>`;
}