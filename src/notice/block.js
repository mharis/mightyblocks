/**
 * BLOCK: mightyblocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
	RichText,
	InspectorControls,
	ColorPalette,
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	ToggleControl,
	PanelColor,
	RangeControl,
	SelectControl,
} = wp.components;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'mightyblocks/block-notice', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Notice' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'mightyblocks' ),
		__( 'notice' ),
		__( 'alert' )
	],

	attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
		type: {
			type: 'string',
			default: 'general'
		},
		fontSize: {
			type: 'string',
			default: '14'
		},
    },

	edit: function( { focus, attributes, className, setAttributes } ) {
		const {
			content,
			isSelected,
			type,
			fontSize
		} = attributes;

		function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }

		const inspectorControls = focus && (
			<InspectorControls>
				<br />
				<SelectControl
					label={ __( 'Preset Colors' ) }
					description={ __( 'Preset colors. This will reset the styling options below. ' ) }
					options={
						[
							{
								value: 'general',
								label: __( 'General' )
							},
							{
								value: 'error',
								label: __( 'Error/Alert' )
							},
							{
								value: 'success',
								label: __( 'Success' )
							},
							{
								value: 'notice',
								label: __( 'Notice' )
							},
						]
					}
					value={ type }
					onChange={ ( value ) => setAttributes( { type: value } ) }
				/>
				<RangeControl
					label={ __( 'Font Size' ) }
					value={ fontSize }
					onChange={ ( value ) => setAttributes( { fontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 1 }
				/>
			</InspectorControls>
		);

        return [
			inspectorControls,
			<div className={ className }>
	            <RichText
	                tagName="p"
	                onChange={ onChangeContent }
	                value={ content }
	                isSelected={ isSelected }
	            />
			</div>
        ];
	},

	save( { attributes, className } ) {
		const { content } = attributes;

		return (
			<div className={ className }>
				<p>{ content }</p>
			</div>
		)
	},
} );
