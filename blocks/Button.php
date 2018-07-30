<?php
/**
 * Button Block Options
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Button {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}

	public function editor_assets() {
		$options = apply_filters(
            'mightyblocks_' . $this->get_name() . '_settings',
            $this->register_controls()
        );

        $template = mightyblocks_locate_template( $this->get_name() . '.js' );

		// Scripts.
		wp_enqueue_script(
            'mightyblocks-block-' . $this->get_name() . '-template-js',
            $template
		);

		wp_localize_script(
			'mightyblocks-block-' . $this->get_name() . '-template-js',
			'mightyblocks' . ucfirst( $this->get_name() ),
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
		return 'button';
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
		return __( 'Button', 'wpmightyblocks' );
	}

	/**
	 * Register button block controls.
	 *
	 * Adds different input fields to allow the user to 
     * change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function register_controls() {
        $options = array();
        
        $options['title'] = array(
            'label'         => __( 'title', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'RichText',
            'default'       => 'Click here',
            'placeholder'   => '',
        );

        $options['link'] = array(
            'label'         => __( 'Button Link', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
            'default'       => '#',
        );
        
        $options['newwindow'] = array(
            'label'         => __( 'Open link in new window', 'wpmightyblocks' ),
            'description'   => 'Check to open link in a new window.',
            'type'          => 'ToggleControl',
            'default'       => false
        );

        $options['nofollow'] = array(
            'label'         => __( 'Add Nofollow', 'wpmightyblocks' ),
            'description'   => 'Check to restrict search engines from following this link.',
            'type'          => 'ToggleControl',
            'default'       => false
        );

        $options['size'] = array(
            'label'         => __( 'Button Size', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'SelectControl',
            'default'       => 's',
            'options'       => array(
				array(
					'value' => 'xs',
					'label' => __( 'Extra Small', 'wpmightyblocks' )
                ),
				array(
					'value' => 's',
					'label' => __( 'Small', 'wpmightyblocks' )
				),
				array(
					'value' => 'm',
					'label' => __( 'Medium', 'wpmightyblocks' )
                ),
				array(
					'value' => 'l',
					'label' => __( 'Large', 'wpmightyblocks' )
                ),
				array(
					'value' => 'xl',
					'label' => __( 'Extra Large', 'wpmightyblocks' )
				),
            )
        );

        $options['fullwidth'] = array(
            'label'         => __( 'Full Width Button', 'wpmightyblocks' ),
            'description'   => 'Make button full width.',
            'type'          => 'ToggleControl',
            'default'       => false
        );

        $options['borderradius'] = array(
            'label'         => __( 'Border Radius', 'wpmightyblocks' ),
            'description'   => __( '(In Pixels)', 'wpmightyblocks' ),
            'type'          => 'DimensionsControl',
            'default'       => '3px 3px 3px 3px',
        );

        $options['normalStyle'] = array(
            'type'       => 'Section',
            'title'         => __( 'Normal Styles', 'wpmightyblocks' )
        );

        $options['normalStyle']['fields']['backgroundColor'] = array(
            'label'         => __( 'Background Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#54595f',
        );

        $options['normalStyle']['fields']['textColor'] = array(
            'label'         => __( 'Text Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#ffffff',
        );

        $options['hoverStyle'] = array(
            'type'      => 'Section',
            'title'     => __( 'Hover Styles', 'wpmightyblocks' )
        );


        $options['hoverStyle']['fields']['hoverBackgroundColor'] = array(
            'label'         => __( 'Hover Background Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#000000',
        );

        $options['hoverStyle']['fields']['hoverTextColor'] = array(
            'label'         => __( 'Hover Text Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#ffffff',
        );
    
		return $options;
    }
}
