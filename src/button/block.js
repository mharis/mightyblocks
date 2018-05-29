/**
 * BLOCK: Accordion
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MightyBlocksInspectorControls from '../common/controls.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
	RichText,
	PlainText
} = wp.blocks;

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
const options = mightyblocksButton;

Object.keys( options ).map( index => {
	const option = options[ index ];

	if ( option['type'] === 'PlainText' || option['type'] === 'RichText' ) {
		return;
	}

	attributes[ index ] = { type: 'string', default: option['default'] };
});

registerBlockType( 'mightyblocks/block-button', {
	title: __( 'Button' ),
	icon: 'laptop',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'button' ),
	],

	attributes,

	edit: function( { focus, attributes, className, setAttributes } ) {
		const inspectorControls = <MightyBlocksInspectorControls
			attributes={ attributes }
			options={ options }
			setAttributes={ setAttributes }
		/>;
		
        return [
			inspectorControls
        ];
	},

	save( { attributes, className } ) {
	}
} );

/*class MightyBlocksVideo extends Component {
	constructor(props) {
		super(props);
	}

	getYoutubeId( url ) {
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

	getVimeoId( url ) {
		var match = /vimeo.*\/(\d+)/i.exec( url );
		if ( match ) {
			return match[1];
		}
	}

	render() {
		const {
			className,
			attributes
		} = this.props;

		let urlEmbed;
		if ( attributes['type'] === 'youtube' ) {
			const videoId = this.getYoutubeId( attributes['ytlink'] );
			urlEmbed = new URL(`https://www.youtube.com/embed/${ videoId }`);
	
			urlEmbed.searchParams.set( 'feature', 'oembed' );
			urlEmbed.searchParams.set( 'autoplay', ( attributes['autoplay'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'rel', ( attributes['suggested'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'controls', ( attributes['controls'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'mute', ( attributes['mute'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'wmode', 'opaque' );
			urlEmbed.searchParams.set( 'showinfo', ( attributes['title'] ) ? 1 : 0 );
		} else {
			const videoId = this.getVimeoId( attributes['vimeolink'] );
			urlEmbed = new URL(`https://player.vimeo.com/video/${ videoId }`);
	
			urlEmbed.searchParams.set( 'autoplay', ( attributes['autoplay'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'loop', ( attributes['loop'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'title', ( attributes['intro'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'byline', ( attributes['intro'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'portrait', ( attributes['intro'] ) ? 1 : 0 );
			urlEmbed.searchParams.set( 'color', attributes['controlsColor'].replace( '#', '' ) );
		}

		const template = ReactHtmlParser( wpMightyBlocksVideoTemplate( className, attributes, urlEmbed ) );

		return template;
	}
}*/