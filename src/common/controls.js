const {
	BaseControl,
	ToggleControl,
	PanelColor,
	RangeControl,
	SelectControl,
	IconButton,
	TextControl,
	PanelBody,
	Button,
	ButtonGroup,
} = wp.components;

const {
	InspectorControls,
	ColorPalette,
} = wp.editor;

const { Component } = wp.element;

import DimensionsControl from './dimensions-control';
import IconControl from './icon-control';

class MightyBlocksInspectorControls extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
		const {
            attributes,
            options,
            setAttributes,
        } = this.props;
        
        const inspectorControls = (
			<InspectorControls>
				<br />
				{
					Object.keys( options ).map( index => {
						return this.renderField( options[ index ], index );
					})
				}
			</InspectorControls>
        );
        
        return inspectorControls;
	}
	
	renderField( option, index ) {
		const {
            attributes,
            setAttributes,
		} = this.props;
		
		let visible = true;

		if (
			option['type'] === 'PlainText' ||
			option['type'] === 'RichText' ||
			option['type'] === 'MediaUpload' ||
			option['type'] === 'AlignmentToolbar'
		) {
			visible = false;
		}

		if ( option['conditions'] ) {
			if ( option['conditions']['show'] ) {
				Object.keys( option['conditions']['show'] ).map( showConditionIndex => {
					const showCondition = option['conditions']['show'][ showConditionIndex ];

					if ( attributes[ showCondition['field'] ] !== showCondition['value'] ) {
						visible = false;
					}
				});
			}
		}

		if ( visible === false ) {
			return;
		}
		
		if ( option['type'] === 'SelectControl' ) {
			return <SelectControl
				label={ option['label'] }
				description={ option['description'] }
				options={ option['options'] }
				value={ attributes[ index ] }
				onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
			/>;
		} else if ( option['type'] === 'TextControl' ) {
			return <TextControl
				label={ option['label'] }
				help={ option['description'] }
				value={ attributes[ index ] }
				onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
			/>;
		} else if ( option['type'] === 'ToggleControl' ) {
			return <ToggleControl
				label={ option['label'] }
				help={ option['description'] }
				checked={ attributes[ index ] }
				onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
			/>;
		} else if ( option['type'] === 'PanelColor' ) {
			return <PanelColor
				title={ option['label'] }
				colorValue={ attributes[ index ] }
				initialOpen={ false }
			>
				<ColorPalette
					label={ option['label']  }
					value={ attributes[ index ] }
					onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
				/>
			</PanelColor>;
		} else if ( option['type'] === 'RangeControl' ) {
			return <RangeControl
				label={ option['label'] }
				help={ option['description'] }
				value={ attributes[ index ] }
				onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
				initialPosition={ option['initialPosition'] }
				min={ option['min'] }
				max={ option['max'] }
				step={ option['step'] }
			/>;
		} else if ( option['type'] === 'DimensionsControl' ) {
			return <DimensionsControl
				label={ option['label'] }
				help={ option['description'] }
				unit={ option['unit'] }
				min={ option['min'] }
				value={ attributes[ index ] }
				onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
			/>;
		} else if ( option['type'] === 'IconControl' ) {
			return <IconControl
				label={ option['label'] }
				help={ option['description'] }
				value={ attributes[ index ] }
				onChange={ ( value ) => setAttributes( { [ index ]: value } ) }
			/>;
		} else if ( option['type'] === 'ButtonGroup' ) {
			return <BaseControl
					label={ option['label'] }
				>
				<ButtonGroup aria-label={ option['label'] }>
					{
						Object.keys( option['options'] ).map( optIndex => {
							const opt = option['options'][ optIndex ];
							return <Button
								isLarge
								isPrimary={ attributes[ index ] === opt['value'] }
								onClick={ () => setAttributes( { [ index ]: opt['value'] } ) }
							>
								{ opt['label'] }
							</Button>
						})
					}
				</ButtonGroup>
			</BaseControl>;
		} else if ( option['type'] === 'Section' ) {
			return <PanelBody
				title={ option['title'] }
				initialOpen={ false }
			>
			{
				Object.keys( option['fields'] ).map( index => {
					return this.renderField( option['fields'][ index ], index );
				})
			}
			</PanelBody>;
		}
	}
}

export default MightyBlocksInspectorControls;