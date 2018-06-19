function wpMightyBlocksIconTemplate( className, attributes, editing ) {
    const icon = `<i class="${ attributes['icon'] }" aria-hidden="true"></i>`;
    let iconWrapper = `<span class="${ className }-icon">
        ${ icon }
    </span>`;


    if( attributes['link'].length >= 1 ) {
        iconWrapper = `<a
            class="${ className }-icon"
            href="${ (editing) ? '#' : attributes['link'] }"
            rel="${ attributes['nofollow'] ? 'nofollow': '' }"
            target="${ attributes['newwindow'] ? '_blank' : '' }"
        >
            ${ icon }
        </a>`;
    }
    
    return `<div class="${ className } wp-block-mightyblocks-block-icon-${ attributes['blockId'] }">
        <style type="text/css" scoped="scoped">
        .${ className }-${ attributes['blockId'] } .${ className }-icon {
            background-color: ${ attributes['backgroundColor'] };
            padding: ${ attributes['padding'] }px;
            border-radius: ${ attributes['borderradius'] };
            border-width: ${ attributes['borderwidth'] };
            border-color: ${ attributes['iconColor'] };
        }
        .${ className }-${ attributes['blockId'] } i {
            font-size: ${ attributes['size'] }px;
            color: ${ attributes['iconColor'] };
            transform: rotate(${ attributes['rotate'] }deg);
        }
        .${ className }-${ attributes['blockId'] } a.${ className }-icon:hover {
            background-color: ${ attributes['hoverBackgroundColor'] };
        }
        .${ className }-${ attributes['blockId'] } a.${ className }-icon:hover i {
            color: ${ attributes['hoverIconColor'] };
        }
        </style>
        ${ iconWrapper }
    </div>`;
}