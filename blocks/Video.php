<?php
/**
 * Video Block Options
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Video {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}

	public function editor_assets() {
		$options = $this->register_controls();

		// Scripts.
		wp_enqueue_script(
			'mightyblocks-block-video-template-js',
			plugins_url( '/templates/video.js', dirname( __FILE__ ) )
		);

		wp_localize_script(
			'mightyblocks-block-video-template-js',
			'mightyblocksVideo',
			$options
		);
	}
	
	/**
	 * Get block name
	 *
	 * Retrieve accordion block name
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Block name.
	 */
	public function get_name() {
		return 'video';
	}

	/**
	 * Get block title.
	 *
	 * Retrieve accordion block title.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Block title.
	 */
	public function get_title() {
		return __( 'Video', 'wpmightyblocks' );
	}

	/**
	 * Register accordion block controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function register_controls() {
        $options = array();

        $options['type'] = array(
            'label'         => __( 'Video Type', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'SelectControl',
            'default'       => 'youtube',
            'options'       => array(
				array(
					'value' => 'youtube',
					'label' => __( 'Youtube', 'wpmightyblocks' )
				),
				array(
					'value' => 'vimeo',
					'label' => __( 'Vimeo', 'wpmightyblocks' )
				)
            )
        );
        
        $options['link'] = array(
            'label'         => __( 'Video Link', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
            'default'       => 'https://www.youtube.com/watch?v=2MpUj-Aua48',
        );
        
        $options['autoplay'] = array(
            'label'         => __( 'Autoplay', 'wpmightyblocks' ),
            'description'   => 'Check to autoplay video on load.',
            'type'          => 'ToggleControl',
            'default'       => false
        );
        
        $options['suggested'] = array(
            'label'         => __( 'Suggested Videos', 'wpmightyblocks' ),
            'description'   => 'Check to show suggested video after the video ends.',
            'type'          => 'ToggleControl',
            'default'       => false
        );
        
        $options['controls'] = array(
            'label'         => __( 'Player Controls', 'wpmightyblocks' ),
            'description'   => 'Check to show player controls.',
            'type'          => 'ToggleControl',
            'default'       => true
        );
        
        $options['title'] = array(
            'label'         => __( 'Title & Actions', 'wpmightyblocks' ),
            'description'   => 'Check to show title on video and other video actions.',
            'type'          => 'ToggleControl',
            'default'       => true
        );
        
        $options['mute'] = array(
            'label'         => __( 'Mute Video', 'wpmightyblocks' ),
            'description'   => 'Check to show mute video on load.',
            'type'          => 'ToggleControl',
            'default'       => false
        );
    
		
		return $options;
    }
}
