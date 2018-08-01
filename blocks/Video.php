<?php
/**
 * Video Block Options
 *
 * @since 	1.0.0
 * @package MightyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class MightyBlocksVideo {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}

	public function editor_assets() {
		$options = apply_filters(
            'mightyblocks_' . $this->get_name() . '_settings',
            $this->register_controls()
        );

        $template = mightyblocks_locate_template( 'video.js' );

		// Scripts.
		wp_enqueue_script(
            'mightyblocks-block-video-template-js',
            $template
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
        
        $options['ytlink'] = array(
            'label'         => __( 'Video Link', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
            'default'       => 'https://www.youtube.com/watch?v=2MpUj-Aua48',
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'youtube'
                    )
                )
            )
        );

        $options['vimeolink'] = array(
            'label'         => __( 'Video Link', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
            'default'       => 'https://vimeo.com/270821275',
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'vimeo'
                    )
                )
            )
        );
        
        $options['autoplay'] = array(
            'label'         => __( 'Autoplay', 'wpmightyblocks' ),
            'description'   => 'Check to autoplay video on load.',
            'type'          => 'ToggleControl',
            'default'       => false
        );

        $options['loop'] = array(
            'label'         => __( 'Loop', 'wpmightyblocks' ),
            'description'   => 'Check to loop video.',
            'type'          => 'ToggleControl',
            'default'       => false,
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'vimeo'
                    )
                )
            )
        );

        $options['controlsColor'] = array(
            'label'         => __( 'Controls Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '',
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'vimeo'
                    )
                )
            )
        );

        $options['intro'] = array(
            'label'         => __( 'Intro Details', 'wpmightyblocks' ),
            'description'   => 'Check to show intro details before playing the video.',
            'type'          => 'ToggleControl',
            'default'       => false,
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'vimeo'
                    )
                )
            )
        );
        
        $options['suggested'] = array(
            'label'         => __( 'Suggested Videos', 'wpmightyblocks' ),
            'description'   => 'Check to show suggested video after the video ends.',
            'type'          => 'ToggleControl',
            'default'       => false,
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'youtube'
                    )
                )
            )
        );
        
        $options['controls'] = array(
            'label'         => __( 'Player Controls', 'wpmightyblocks' ),
            'description'   => 'Check to show player controls.',
            'type'          => 'ToggleControl',
            'default'       => true,
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'youtube'
                    )
                )
            )
        );
        
        $options['title'] = array(
            'label'         => __( 'Title & Actions', 'wpmightyblocks' ),
            'description'   => 'Check to show title on video and other video actions.',
            'type'          => 'ToggleControl',
            'default'       => true,
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'youtube'
                    )
                )
            )
        );
        
        $options['mute'] = array(
            'label'         => __( 'Mute Video', 'wpmightyblocks' ),
            'description'   => 'Check to show mute video on load.',
            'type'          => 'ToggleControl',
            'default'       => false,
            'conditions'    => array(
                'show' => array(
                    array(
                        'field' => 'type',
                        'value' => 'youtube'
                    )
                )
            )
        );
    
		
		return $options;
    }
}
