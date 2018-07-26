jQuery( document ).ready( function ( $ ) {
    // Content Box
    $( '.wp-block-mightyblocks-block-contentbox' ).each( function() {
        var contentBox = $( this );

        if ( $.trim( contentBox.attr( 'data-link' ) ) ) {
            contentBox.css( 'cursor', 'pointer' );
            contentBox.on( 'click', function( e ) {
                e.preventDefault();
                
                if ( contentBox.attr( 'data-newwindow' ) === 'false' ) {
                    window.location = contentBox.attr( 'data-link' );
                } else {
                    window.open( contentBox.attr( 'data-link' ), '_blank' );
                }
            } );
        }
    } );
} );