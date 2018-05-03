<?php
if ( ! class_exists( 'Redux' ) ) {
    return;
}

// This is your option name where all the Redux data is stored.
$opt_name = 'mightyblocks';

/**
 * ---> SET ARGUMENTS
 * All the possible arguments for Redux.
 * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
 * */

$args = array(
    // TYPICAL -> Change these values as you need/desire
    'opt_name'             => $opt_name,
    // This is where your data is stored in the database and also becomes your global variable name.
    'display_name'         => 'Mighty Blocks',
    // Name that appears at the top of your panel
    'display_version'      => '1.0.0',
    // Version that appears at the top of your panel
    'menu_type'            => 'menu',
    //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
    'allow_sub_menu'       => true,
    // Show the sections below the admin menu item or not
    'menu_title'           => __( 'Mighty Blocks', 'mightyblocks' ),
    'page_title'           => __( 'Mighty Blocks', 'mightyblocks' ),
    // You will need to generate a Google API key to use this feature.
    // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
    'google_api_key'       => '',
    // Set it you want google fonts to update weekly. A google_api_key value is required.
    'google_update_weekly' => false,
    // Must be defined to add google fonts to the typography module
    'async_typography'     => true,
    // Use a asynchronous font on the front end or font string
    //'disable_google_fonts_link' => true,                    // Disable this in case you want to create your own google fonts loader
    'admin_bar'            => false,
    // Show the panel pages on the admin bar
    'admin_bar_icon'       => 'dashicons-portfolio',
    // Choose an icon for the admin bar menu
    'admin_bar_priority'   => 50,
    // Choose an priority for the admin bar menu
    'global_variable'      => '',
    // Set a different name for your global variable other than the opt_name
    'dev_mode'             => false,
    // Show the time the page took to load, etc
    'update_notice'        => false,
    // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
    'customizer'           => false,
    // Enable basic customizer support
    //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
    //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field

    // OPTIONAL -> Give you extra features
    'page_priority'        => null,
    // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
    'page_parent'          => 'themes.php',
    // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
    'page_permissions'     => 'manage_options',
    // Permissions needed to access the options panel.
    'menu_icon'            => '',
    // Specify a custom URL to an icon
    'last_tab'             => '',
    // Force your panel to always open to a specific tab (by id)
    'page_icon'            => 'icon-themes',
    // Icon displayed in the admin panel next to your menu_title
    'page_slug'            => '',
    // Page slug used to denote the panel, will be based off page title then menu title then opt_name if not provided
    'save_defaults'        => true,
    // On load save the defaults to DB before user clicks save or not
    'default_show'         => false,
    // If true, shows the default value next to each field that is not the default value.
    'default_mark'         => '',
    // What to print by the field's title if the value shown is default. Suggested: *
    'show_import_export'   => true,
    // Shows the Import/Export panel when not used as a field.

    // CAREFUL -> These options are for advanced use only
    'transient_time'       => 60 * MINUTE_IN_SECONDS,
    'output'               => false,
    // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
    'output_tag'           => false,
    // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
     'footer_credit'     => false,
    'database'             => '',
    'use_cdn'              => true,
    // If you prefer not to use the CDN for Select2, Ace Editor, and others, you may download the Redux Vendor Support plugin yourself and run locally or embed it in your code.
);

Redux::setArgs( $opt_name, $args );

/*
 * ---> END ARGUMENTS
 */

/*
 *
 * ---> START SECTIONS
 *
 */


// -> START Basic Fields
Redux::setSection( $opt_name, array(
    'title'            => __( 'Blocks', 'mightyblocks' ),
    'id'               => 'block',
    'desc'             => '',
    'icon'             => 'el',
) );

Redux::setSection( $opt_name, array(
    'title'            => __( 'Notice', 'mightyblocks' ),
    'id'               => 'block-notice',
    'subsection'       => true,
    'fields'           => array(
        array(
            'id'       => 'notice-bg-color',
            'type'     => 'color',
            'title'    => __( 'Background Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the default background color for the notice block.', 'mightyblocks' ),
            'default'  => '#eeeeee',
        ),
        array(
            'id'       => 'notice-border-color',
            'type'     => 'color',
            'title'    => __( 'Border Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the border color for the notice block. (In Pixels)', 'mightyblocks' ),
            'default'  => '#dddddd',
        ),
        array(
            'id'       => 'notice-border-size',
            'type'     => 'slider',
            'title'    => __( 'Border Size', 'mightyblocks' ),
            'subtitle' => __( 'Set the border size for the notice block.', 'mightyblocks' ),
            'default'  => 1,
            'min'      => 1,
            'step'     => 1,
            'max'      => 24,
            'resolution'    => 1,
            'display_value' => 'text'
        ),
        array(
            'id'       => 'notice-font-color',
            'type'     => 'color',
            'title'    => __( 'Font Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the font color for the notice block. (In Pixels)', 'mightyblocks' ),
            'default'  => '#222222',
        ),
        array(
            'id'       => 'notice-font-size',
            'type'     => 'slider',
            'title'    => __( 'Font Size', 'mightyblocks' ),
            'subtitle' => __( 'Set the font size for the notice block.', 'mightyblocks' ),
            'default'  => 16,
            'min'      => 1,
            'step'     => 1,
            'max'      => 24,
            'resolution'    => 1,
            'display_value' => 'text'
        ),
    )
) );


Redux::setSection( $opt_name, array(
    'title'            => __( 'Testimonial', 'mightyblocks' ),
    'id'               => 'block-testimonial',
    'subsection'       => true,
    'fields'           => array(
        array(
            'id'       => 'testimonial-bg-color',
            'type'     => 'color',
            'title'    => __( 'Background Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the default background color for the testimonial block.', 'mightyblocks' ),
            'default'  => '#FFFFFF',
        ),
        array(
            'id'       => 'testimonial-border-color',
            'type'     => 'color',
            'title'    => __( 'Border Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the border color for the testimonial block. (In Pixels)', 'mightyblocks' ),
            'default'  => '#4A4A4A',
        ),
        array(
            'id'       => 'testimonial-border-size',
            'type'     => 'slider',
            'title'    => __( 'Border Size', 'mightyblocks' ),
            'subtitle' => __( 'Set the border size for the testimonial block.', 'mightyblocks' ),
            'default'  => 4,
            'min'      => 0,
            'step'     => 1,
            'max'      => 24,
            'resolution'    => 1,
            'display_value' => 'text'
        ),
        array(
            'id'       => 'testimonial-title-font-color',
            'type'     => 'color',
            'title'    => __( 'Title Font Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the font color for title of testimonial block.', 'mightyblocks' ),
            'default'  => '#000000',
        ),
        array(
            'id'       => 'testimonial-title-font-size',
            'type'     => 'slider',
            'title'    => __( 'Title Font Size', 'mightyblocks' ),
            'subtitle' => __( 'Set the font size for title of testimonial block.', 'mightyblocks' ),
            'default'  => 24,
            'min'      => 1,
            'step'     => 1,
            'max'      => 32,
            'resolution'    => 1,
            'display_value' => 'text'
        ),
        array(
            'id'       => 'testimonial-font-color',
            'type'     => 'color',
            'title'    => __( 'Testimonial Font Color', 'mightyblocks' ),
            'subtitle' => __( 'Set the font color for actual testimonial.', 'mightyblocks' ),
            'default'  => '#4F4F4F',
        ),
        array(
            'id'       => 'testimonial-font-size',
            'type'     => 'slider',
            'title'    => __( 'Testimonial Font Size', 'mightyblocks' ),
            'subtitle' => __( 'Set the font size for actual testimonial.', 'mightyblocks' ),
            'default'  => 16,
            'min'      => 1,
            'step'     => 1,
            'max'      => 32,
            'resolution'    => 1,
            'display_value' => 'text'
        ),
    )
) );
/*
 * <--- END SECTIONS
 */
