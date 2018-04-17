/**
 * BLOCK: Notice
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
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
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
	title: __( 'Notice' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'notice' ),
		__( 'alert' )
	],

	attributes: {
        content: {
            type: 'array',
            selector: '.wp-block-mightyblocks-notice-text',
            source: 'children',
        },
		type: {
			type: 'string',
			default: 'general'
		},
		backgroundColor: {
			type: 'string',
			default: mightyblocks['notice-bg-color']
		},
		borderColor: {
			type: 'string',
			default: mightyblocks['notice-border-color']
		},
		borderSize: {
			type: 'string',
			default: mightyblocks['notice-border-size']
		},
		fontColor: {
			type: 'string',
			default: mightyblocks['notice-font-color']
		},
		fontSize: {
			type: 'string',
			default: mightyblocks['notice-font-size']
		},
		dismissable: {
			type: 'boolean',
			default: true
		},
		alignment: {
			type: 'string',
		},
    },

	edit: function( { focus, attributes, className, setAttributes } ) {
		const {
			content,
			type,
			backgroundColor,
			borderColor,
			borderSize,
			fontColor,
			fontSize,
			dismissable,
			alignment
		} = attributes;

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
					onChange={
						( value ) => {
							if ( value === 'error' ) {
								setAttributes( { backgroundColor: '#EFCDCD' } )
								setAttributes( { borderColor: '#970008' } )
								setAttributes( { fontColor: '#970008' } )
							} else if ( value === 'success' ) {
								setAttributes( { backgroundColor: '#C7EBB5' } )
								setAttributes( { borderColor: '#125A12' } )
								setAttributes( { fontColor: '#125A12' } )
							} else if ( value === 'notice' )  {
								setAttributes( { backgroundColor: '#FFFBD2' } )
								setAttributes( { borderColor: '#d9b917' } )
								setAttributes( { fontColor: '#C4A700' } )
							} else {
								setAttributes( { backgroundColor: '#eeeeee' } )
								setAttributes( { borderColor: '#dddddd' } )
								setAttributes( { fontColor: '#222222' } )
							}

							setAttributes( { type: value } )
						}
					}
				/>

				<PanelColor
					title={ __( 'Background Color' ) }
					colorValue={ backgroundColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Background Color' ) }
						value={ backgroundColor }
						onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Border Color' ) }
					colorValue={ borderColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Border Color' ) }
						value={ borderColor }
						onChange={ ( value ) => setAttributes( { borderColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<RangeControl
					label={ __( 'Border Size' ) }
					value={ borderSize }
					onChange={ ( value ) => setAttributes( { borderSize: value } ) }
					min={ 1 }
					max={ 24 }
					step={ 1 }
				/>

				<PanelColor
					title={ __( 'Font Color' ) }
					colorValue={ fontColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Font Color' ) }
						value={ fontColor }
						onChange={ ( value ) => setAttributes( { fontColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<RangeControl
					label={ __( 'Font Size' ) }
					value={ fontSize }
					onChange={ ( value ) => setAttributes( { fontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 1 }
				/>

				<ToggleControl
					label={ __( 'Dismissable Notice?' ) }
					help={ ( checked ) => checked ? __( 'This notice is dismissable.' ) : __( 'This notice is NOT dismissable.' ) }
					checked={ dismissable }
					onChange={ ( value ) => setAttributes( { dismissable: value } ) }
				/>
			</InspectorControls>
		);

		const alignmentToolbar = focus && (
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ ( value ) => setAttributes( { alignment: value } ) }
				/>
			</BlockControls>
		);

        return [
			alignmentToolbar,
			inspectorControls,
			<div
				className={ className }
				style={ {
					backgroundColor,
					borderColor,
					borderWidth: borderSize + 'px'
				} }
			>
	            <RichText
					className='wp-block-mightyblocks-notice-text'
					tagName='div'
					multiline='p'
	                onChange={ ( value ) => setAttributes( { content: value } ) }
	                value={ content }
	                isSelected={ focus }
					placeholder={ __( 'Add notice text' ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
					keepPlaceholderOnFocus
					style={ {
						fontSize: fontSize + 'px',
						color: fontColor,
						textAlign: alignment,
					} }
	            />
			</div>
        ];
	},

	save( { attributes, className } ) {
		const {
			content,
			backgroundColor,
			borderColor,
			borderSize,
			fontColor,
			fontSize,
			dismissable,
			alignment
		} = attributes;

		return (
			<div
				className={ className }
				style={ {
					backgroundColor,
					borderColor,
					borderWidth: borderSize + 'px'
				} }
			>
				<div
					className='wp-block-mightyblocks-notice-text'
					style={ {
						fontSize: fontSize + 'px',
						color: fontColor,
						textAlign: alignment
					} }
				>
					{ content }
				</div>
			</div>
		)
	},
} );
