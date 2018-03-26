/**
 * This file adds some LIVE preview to the Under Construction Maintenance Mode in WordPress Customizer.
 */
( function( $ ) {

    // header text h1
  	// wp.customize( 'ucmm_wpbrigade_customization[ucmm_logo_width]', function( value ) {
  	// 	value.bind( function( newval ) {
    //
    //     if ( '' != newval) {
    //       $('#customize-preview iframe').contents().find( '.ucmm-logo img' ).css( 'width',  newval );
    //     }
    //
  	// 	} );
  	// } );
    // // header text h1
  	// wp.customize( 'ucmm_wpbrigade_customization[ucmm_logo_height]', function( value ) {
  	// 	value.bind( function( newval ) {
    //
    //     if ( '' != newval) {
    //       $('#customize-preview iframe').contents().find( '.ucmm-logo img' ).css( 'height',  newval );
    //     }
    //
  	// 	} );
  	// } );
	// header text h1
	wp.customize( 'ucmm_wpbrigade_customization[header_text]', function( value ) {
		value.bind( function( newval ) {

      if ( '' != newval) {
        $('#customize-preview iframe').contents().find( '.ucmm-logo h1' ).html(newval);
      }

		} );
	} );

  // footer text h2
	wp.customize( 'ucmm_wpbrigade_customization[footer_text]', function( value ) {
		value.bind( function( newval ) {

      if ( '' != newval) {
        $('#customize-preview iframe').contents().find( '.ucmm-logo h2' ).html(newval);
      }

		} );
	} );

  // footer text "Love" hide and show
	wp.customize( 'ucmm_wpbrigade_customization[ucmm_display_footer_text]', function( value ) {
		value.bind( function( newval ) {
      console.log(newval);
      if ( false == newval) {
        $('#customize-preview iframe').contents().find( '.footer-love' ).hide();
      } else {
        $('#customize-preview iframe').contents().find( '.footer-love' ).show();
      }

		} );
	} );





} )( jQuery );
