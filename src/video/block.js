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

	getId: function( url ) {
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
	},

	edit: function( { focus, attributes, className, setAttributes } ) {
		const getId = function( url ) {
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
		};

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

		const videoId = getId( attributes['link'] );
		const urlEmbed = `https://www.youtube.com/embed/${ videoId }`;

        return [
			inspectorControls,
			<div className={ className }>
				<iframe src={ urlEmbed }></iframe>
			</div>
        ];
	},

	save( { attributes, className } ) {
		const {
			type,
			link
		} = attributes;

		const getId = function( url ) {
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
		};

		const videoId = getId( link );
		const urlEmbed = `https://www.youtube.com/embed/${ videoId }`;

		return (
			<div>
				<iframe src={ urlEmbed }></iframe>
			</div>
		);
	}
} );