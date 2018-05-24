/**
 * BLOCK: Accordion
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const { __ } = wp.i18n;

const {
	registerBlockType,
	RichText,
	InspectorControls,
	ColorPalette,
	BlockControls,
	PlainText
} = wp.blocks;

const {
	Toolbar,
	ToggleControl,
	PanelColor,
	RangeControl,
	SelectControl,
	IconButton,
	TextControl
} = wp.components;

const { Component } = wp.element;

/**
 * Register: a Gutenberg Block.
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

let attributes = {};
const options = mightyblocksVideo;

Object.keys( options ).map( index => {
	const option = options[ index ];

	if ( option['type'] === 'PlainText' || option['type'] === 'RichText' ) {
		return;
	}

	attributes[ index ] = { type: 'string', default: option['default'] };
});

registerBlockType( 'mightyblocks/block-video', {
	title: __( 'Video' ),
	icon: 'video-alt3',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'video' ),
		__( 'youtube' )
	],

	attributes,

	edit: function( { focus, attributes, className, setAttributes } ) {
		const inspectorControls = (
			<InspectorControls>
				<br />
				{
					Object.keys( options ).map( index => {
						const option = options[ index ];

						if ( option['type'] === 'PlainText' || option['type'] === 'RichText' ) {
							return;
						}
						
						if ( option['type'] === 'SelectControl' ) {
							return <SelectControl
								label={ option['label'] }
								description={ option['description'] }
								options={ option['options'] }
								value={ attributes[ index ] }
								onChange={ ( value ) => setAttributes( { [index]: value } ) }
							/>;
						} else if ( option['type'] === 'TextControl' ) {
							return <TextControl
								label={ option['label'] }
								description={ option['description'] }
								value={ attributes[ index ] }
								onChange={ ( value ) => setAttributes( { [index]: value } ) }
							/>;
						} else if ( option['type'] === 'ToggleControl' ) {
							return <ToggleControl
								label={ option['label'] }
								help={ option['description'] }
								checked={ attributes[ index ] }
								onChange={ ( value ) => setAttributes( { [index]: value } ) }
							/>;
						}
					})
				}
			</InspectorControls>
		);

        return [
			inspectorControls,
			<MightyBlocksVideo
				className={ className }
				attributes={ attributes }
			/>
        ];
	},

	save( { attributes, className } ) {
		return <MightyBlocksVideo
			className={ className }
			attributes={ attributes }
		/>;
	}
} );

class MightyBlocksVideo extends Component {
	constructor(props) {
		super(props);
	}

	getId( url ) {
		var ID = '';
		url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

		if ( url[2] !== undefined ) {
			ID = url[2].split(/[^0-9a-z_\-]/i);
			ID = ID[0];
		}
		else {
			ID = url;
		}
		
		return ID;
	}

	render() {
		const {
			className,
			attributes
		} = this.props;

		const videoId = this.getId( attributes['link'] );
		const urlEmbed = new URL(`https://www.youtube.com/embed/${ videoId }`);

		urlEmbed.searchParams.set( 'feature', 'oembed' );
		urlEmbed.searchParams.set( 'autoplay', ( attributes['autoplay'] ) ? 1 : 0 );
		urlEmbed.searchParams.set( 'rel', ( attributes['suggested'] ) ? 1 : 0 );
		urlEmbed.searchParams.set( 'controls', ( attributes['controls'] ) ? 1 : 0 );
		urlEmbed.searchParams.set( 'mute', ( attributes['mute'] ) ? 1 : 0 );
		urlEmbed.searchParams.set( 'wmode', 'opaque' );
		urlEmbed.searchParams.set( 'showinfo', ( attributes['title'] ) ? 1 : 0 );
		
		return <div className={ className }>
			<iframe src={ urlEmbed.href }></iframe>
		</div>;
	}
}
