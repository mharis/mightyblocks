/**
 * BLOCK: Accordion
 */

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import MightyBlocksInspectorControls from '../common/controls.js';
import SetInitialAttributes from '../helpers/set-initial-attributes';

import './style.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	RichText,
} = wp.editor;

const { Component } = wp.element;

const options = mightyblocksIcon;
let attributes = SetInitialAttributes( options );

attributes['blockId'] = { type: 'string', default: '' };

class MightyBlocksIconIcon extends Component {
	render() {
		return (
			<svg width="20" height="20" aria-hidden="true" data-prefix="fal" data-icon="vector-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M486.4 128c14.14 0 25.6-11.46 25.6-25.6V25.6C512 11.46 500.54 0 486.4 0h-76.8C395.46 0 384 11.46 384 25.6V48H128V25.6C128 11.46 116.54 0 102.4 0H25.6C11.46 0 0 11.46 0 25.6v76.8C0 116.54 11.46 128 25.6 128H48v256H25.6C11.46 384 0 395.46 0 409.6v76.8C0 500.54 11.46 512 25.6 512h76.8c14.14 0 25.6-11.46 25.6-25.6V464h256v22.4c0 14.14 11.46 25.6 25.6 25.6h76.8c14.14 0 25.6-11.46 25.6-25.6v-76.8c0-14.14-11.46-25.6-25.6-25.6H464V128h22.4zM416 32h64v64h-64V32zM32 96V32h64v64H32zm64 384H32v-64h64v64zm384-64v64h-64v-64h64zm-48-32h-22.4c-14.14 0-25.6 11.46-25.6 25.6V432H128v-22.4c0-14.14-11.46-25.6-25.6-25.6H80V128h22.4c14.14 0 25.6-11.46 25.6-25.6V80h256v22.4c0 14.14 11.46 25.6 25.6 25.6H432v256z"></path></svg>
		);
	}
}

registerBlockType( 'mightyblocks/block-icon', {
	title: __( 'Icon' ),
	icon: <MightyBlocksIconIcon />,
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'icon' ),
		__( 'fontawesome' )
	],
	anchor: true,

	attributes,

	edit: function( { clientId, attributes, className, setAttributes } ) {
		setAttributes( { blockId: clientId } );

		const inspectorControls = <MightyBlocksInspectorControls
			attributes={ attributes }
			options={ options }
			setAttributes={ setAttributes }
		/>;

        return [
			inspectorControls,
			<MightyBlocksIcon
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				editing={ true }
			/>
        ];
	},

	save( { attributes } ) {
		return <MightyBlocksIcon
			attributes={ attributes }
			editing={ false }
		/>
	}
} );

class MightyBlocksIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			className,
			attributes,
			setAttributes,
			editing
		} = this.props;

		const template = ReactHtmlParser( wpMightyBlocksIconTemplate( className, attributes, editing ), {
			transform: node => {
				if ( node.type === 'tag' && node.name === 'div' ) {
					if ( node.attribs['data-type'] === 'title' ) {
						if ( editing === true ) {
							return <RichText
								tagName='span'
								placeholder={ __( 'Add text…' ) }
								value={ attributes['title'] }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return attributes['title'];
						}
					}
				}
			}
		} );

		return template;
	}
}