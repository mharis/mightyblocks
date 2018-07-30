/**
 * BLOCK: Content Box
 */

import ReactHtmlParser from 'react-html-parser';

import MightyBlocksInspectorControls from '../common/controls.js';
import SetInitialAttributes from '../helpers/set-initial-attributes';

import './style.scss';

const {
	__,
} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	RichText,
	MediaUpload,
} = wp.editor;

const {
	Component,
} = wp.element;

const {
	Toolbar,
} = wp.components;


const options = mightyblocksContentbox;
let attributes = SetInitialAttributes( options );

attributes['blockId'] = { type: 'string', default: '' };

class MightyBlocksContentboxIcon extends Component {
	render() {
		return (
			<svg width="20" height="20" aria-hidden="true" data-prefix="fal" data-icon="align-justify" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 76V52a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6zm6 134h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0 256h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0-128h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6z"></path></svg>
		);
	}
}

registerBlockType( 'mightyblocks/block-contentbox', {
	title: __( 'Content Box' ),
	icon: <MightyBlocksContentboxIcon />,
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'content box' ),
		__( 'image box' )
	],
	anchor: true,
	attributes,

	edit: ( { clientId, attributes, className, setAttributes } ) => {
		setAttributes( { blockId: clientId } );

		const inspectorControls = <MightyBlocksInspectorControls
			attributes={ attributes }
			options={ options }
			setAttributes={ setAttributes }
		/>;

        return [
			inspectorControls,
			<MightyBlocksContentBox
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				editing={ true }
			/>
        ];
	},

	save: ( { attributes } ) => {
		return <MightyBlocksContentBox
			attributes={ attributes }
			editing={ false }
		/>;
	}
} );

class MightyBlocksContentBox extends Component {
	constructor( props ) {
		super( props );		
	}

	render() {
		const {
			className,
			attributes,
			setAttributes,
			editing,
		} = this.props;

		const template = ReactHtmlParser( wpMightyBlocksContentBoxTemplate( className, attributes, editing ), {
			transform: node => {
				if ( node.type === 'tag' ) {
					if ( node.attribs['data-type'] === 'image' ) {
						if ( editing === true ) {
							return <MediaUpload
								onSelect={ ( media ) => setAttributes( { image: { url: media.url, id: media.id } } ) }
								type="image"
								value={ attributes['image']['id'] }
								render={ ( { open } ) => (
									<img
										src={ attributes['image']['url'] }
										alt={  __( 'Edit image' ) }
										onClick={ open }
									/>
								) }
							/>;
						} else {
							return <img src={ attributes['image']['url'] } alt="" />;
						}
					} else if ( node.attribs['data-type'] === 'title' ) {
						if ( editing === true ) {
							return <RichText
								tagName={ attributes['headingSize'] }
								className={ `${ className }-heading-container` }
								placeholder={ __( 'Heading' ) }
								value={ attributes['title'] }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return <RichText.Content
								tagName={ attributes['headingSize'].toLowerCase() }
								className={ `${ className }-heading-container` }
								value={ attributes['title'] }
							/>;
						}
					} else if ( node.attribs['data-type'] === 'content' ) {
						if ( editing === true ) {
							return <RichText
								tagName='div'
								multiline='p'
								className={ `${ className }-content-container` }
								placeholder={ __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mi id ligula tempor luctus. In hac habitasse platea dictumst. Suspendisse egestas quam vel dictum ullamcorper.' ) }
								value={ attributes['content'] }
								onChange={ ( value ) => setAttributes( { content: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return <RichText.Content
								tagName={ 'div' }
								className={ `${ className }-content-container` }
								value={ attributes['content'] }
							/>;
						}
					} else if ( node.attribs['data-type'] === 'button' && attributes['linkType'] === 'button' ) {
						if ( editing === true ) {
							return <RichText
								tagName='div'
								placeholder={ __( 'Click Here' ) }
								value={ attributes['button'] }
								onChange={ ( value ) => setAttributes( { button: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return <RichText.Content
								tagName={ 'div' }
								value={ attributes['button'] }
							/>;
						}
					}
				}
			}
		} );

		return template;
	}
}