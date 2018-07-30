/**
 * BLOCK: Video
 */

import ReactHtmlParser from 'react-html-parser';

import MightyBlocksInspectorControls from '../common/controls.js';
import SetInitialAttributes from '../helpers/set-initial-attributes';

import './style.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const { Component } = wp.element;

const options = mightyblocksVideo;

let attributes = SetInitialAttributes( options );

class MightyBlocksVideoIcon extends Component {
	render() {
		return (
			<svg width="20" height="20" aria-hidden="true" data-prefix="far" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 170.1v-58.3c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-58.3l109.7 68.3c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5V127.5C576 109 560.5 96 543.9 96zM368 200v198.9c-.6.4-1.8 1.1-3.8 1.1H51.8c-2 0-3.2-.6-3.8-1.1V113.1c.6-.4 1.8-1.1 3.8-1.1h312.4c2 0 3.2.6 3.8 1.1V200zm160 155.2l-112-69.8v-58.7l112-69.8v198.3z"></path></svg>
		);
	}
}

registerBlockType( 'mightyblocks/block-video', {
	title: __( 'Video' ),
	icon: <MightyBlocksVideoIcon />,
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'video' ),
		__( 'youtube' )
	],

	attributes,

	edit: function( { attributes, className, setAttributes } ) {
		const inspectorControls = <MightyBlocksInspectorControls
			attributes={ attributes }
			options={ options }
			setAttributes={ setAttributes }
		/>;

        return [
			inspectorControls,
			<MightyBlocksVideo
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				editing={ true }
			/>
        ];
	},

	save( { attributes } ) {
		return <MightyBlocksVideo
			attributes={ attributes }
			editing={ false }
		/>;
	}
} );

class MightyBlocksVideo extends Component {
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
}
