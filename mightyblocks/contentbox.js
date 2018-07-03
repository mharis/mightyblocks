function wpMightyBlocksContentBoxTemplate( className, attributes, editing ) {
    let graphic = '';
    let icon = '';
    let iconStyle = '';
    
    if ( attributes['image']['url'] ) {
        graphic = `<div data-type="image"></div>`;
    }

    if ( attributes['icon'] ) {
        icon = `<div class="${ className }-icon-container">
            <span class="${ className }-icon">
                <i class="${ attributes['icon'] }" aria-hidden="true"></i>
            </span>
        </div>`;
        
        graphic = icon;
        iconStyle = `.${ className }-${ attributes['blockId'] } .${ className }-icon {
            background-color: ${ attributes['iconPrimaryColor'] };
            padding: ${ attributes['iconPadding'] }px;
            border-radius: ${ attributes['iconBorderradius'] };
            border-width: ${ attributes['iconBorderwidth'] };
            border-color: ${ attributes['iconSecondaryColor'] };
        }
        .${ className }-${ attributes['blockId'] } i {
            font-size: ${ attributes['iconSize'] }px;
            color: ${ attributes['iconSecondaryColor'] };
            transform: rotate(${ attributes['iconRotate'] }deg);
        }
        .${ className }-${ attributes['blockId'] } a.${ className }-icon:hover {
            background-color: ${ attributes['iconHoverPrimaryColor'] };
        }
        .${ className }-${ attributes['blockId'] } a.${ className }-icon:hover i {
            color: ${ attributes['hoverIconColor'] };
        }`;
    }

    return `<div
        class="${ className } ${ className }-${ attributes['blockId'] } ${ className }-heading-${ attributes['headingAlignment'] } ${ className }-icon-${ attributes['iconAlignment'] } ${ className }-content-${ attributes['contentAlignment'] }"
        data-link="${ attributes['link'] }"
        data-newwindow="${ attributes['newwindow'] }"
    >
        <style type="text/css" scoped="scoped">
        ${ iconStyle }
        </style>
        ${ graphic }
        <div data-type="title"></div>
        <div data-type="content"></div>
    </div>`;
}