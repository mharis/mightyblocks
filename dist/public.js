jQuery( document ).ready( function ( $ ) {
    // Content Box
    const contentBox = $( '.wp-block-mightyblocks-block-contentbox' );
    if ( $.trim( contentBox.attr( 'data-link' ) ) ) {
        alert('wat');
    }
} );