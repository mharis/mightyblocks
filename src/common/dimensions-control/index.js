const {
    BaseControl,
} = wp.components;

const {
	withInstanceId,
} = wp.compose;

import './style.scss';

function DimensionsControl( { label, value, help, className, instanceId, onChange, ...props } ) {
	const id = `inspector-mb-dimension-control-${ instanceId }`;
	let splitValues = value.split(' ');

	if( ! splitValues[ 0 ] ) {
		splitValues[ 0 ] = 0;
	}

	if( ! splitValues[ 1 ] ) {
		splitValues[ 1 ] = 0;
	}

	if( ! splitValues[ 2 ] ) {
		splitValues[ 2 ] = 0;
	}

	if( ! splitValues[ 3 ] ) {
		splitValues[ 3 ] = 0;
	}

	const onChangeValue = ( event ) => {
		let value = event.target.value;

		if( ! value ) {
			value = 0
		};

		const slot = parseInt( event.target.getAttribute('data-dimension-slot') );
		splitValues[ slot ] = value;

		const returnValue = splitValues.join(' ');

		onChange( returnValue );
    }

	return (
		<BaseControl label={ label } id={ id } help={ help } className={ className }>
			<div className="components-mb-dimension-control__input">
				<input
					type="text"
					id={ `${id}-0` }
					data-dimension-slot="0"
					value={ splitValues[0] }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-0` }>Top</label>
			</div>
			<div className="components-mb-dimension-control__input">
				<input
					type="text"
					id={ `${id}-1` }
					data-dimension-slot="1"
					value={ splitValues[1] }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-1` }>Right</label>
			</div>
			<div className="components-mb-dimension-control__input">
				<input
					type="text"
					id={ `${id}-2` }
					data-dimension-slot="2"
					value={ splitValues[2] }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-2` }>Bottom</label>
			</div>
			<div className="components-mb-dimension-control__input components-mb-dimension-control__input--last">
				<input
					type="text"
					id={ `${id}-3` }
					data-dimension-slot="3"
					value={ splitValues[3] }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-3` }>Left</label>
			</div>
			<div className="components-mb-dimension-control__clear" />
		</BaseControl>
	);
}

export default withInstanceId( DimensionsControl );