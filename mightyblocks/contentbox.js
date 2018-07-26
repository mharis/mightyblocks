function wpMightyBlocksContentBoxTemplate( className, attributes, editing ) {
    let graphic = '';
    let icon = '';
    let iconStyle = '';
    let linkData = '';
    let button = '';
    let buttonStyle = '';
    let contentStyle = '';

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
        .${ className }-${ attributes['blockId'] } .${ className }-icon:hover {
            background-color: ${ attributes['iconHoverPrimaryColor'] };
        }
        .${ className }-${ attributes['blockId'] } .${ className }-icon:hover i {
            color: ${ attributes['hoverIconColor'] };
        }`;
    }

    if ( attributes['link'] && attributes['linkType'] !== 'button'  ) {
        linkData = `data-link="${ attributes['link'] }"
        data-newwindow="${ attributes['newwindow'] }"`;
    }

    if ( attributes['linkType'] === 'button' ) {
        buttonStyle = `.${ className }-${ attributes['blockId'] } .${ className }-button a {
            background-color: ${ attributes['buttonBackgroundColor'] };
            color: ${ attributes['buttonTextColor'] };
            border-radius: ${ attributes['buttonBorderradius'] };
        }
        .${ className }-${ attributes['blockId'] } .${ className }-button a:hover {
            background-color: ${ attributes['buttonHoverBackgroundColor'] };
            color: ${ attributes['buttonHoverTextColor'] };
        }`;

        button = `<div class="${ className }-button">
            <a
                class="${ className }-button-size-${ attributes['buttonSize'] } ${ ( attributes['buttonFullwidth'] ) ? `${ className }-button-fullwidth` : '' }"
                href="${ (editing) ? '#' : attributes['link'] }"
                rel="${ attributes['nofollow'] ? 'nofollow': '' }"
                target="${ attributes['newwindow'] ? '_blank' : '' }"
            >
                <span class="${ className }-button">
                    <div data-type="button"></div>
                </span>
            </a>
        </div>`;
    }

    if ( attributes['contentBackgroundColor'] ) {
        contentStyle += `.${ className }-${ attributes['blockId'] } {
            background-color: ${ attributes['contentBackgroundColor'] };
        }`;
    }

    if ( attributes['contentTextColor'] ) {
        contentStyle += `.${ className }-${ attributes['blockId'] } {
            color: ${ attributes['contentTextColor'] };
        }`;
    }

    return `<div
        class="${ className } ${ className }-${ attributes['blockId'] } ${ className }-heading-${ attributes['headingAlignment'] } ${ className }-icon-${ attributes['iconAlignment'] } ${ className }-content-${ attributes['contentAlignment'] } ${ className }-button-${ attributes['buttonAlignment'] }"
        ${ linkData }
    >
        <style type="text/css" scoped="scoped">
        ${ contentStyle }
        ${ iconStyle }
        ${ buttonStyle }
        </style>
        ${ graphic }
        <div data-type="title"></div>
        <div data-type="content"></div>
        ${ button }
    </div>`;
}