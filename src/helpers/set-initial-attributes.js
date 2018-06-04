function SetInitialAttributes( options ) {
	let attributes = {};

	Object.keys( options ).map( index => {
		const option = options[ index ];
		const type = 'string';

		if ( option['type'] === 'Section' ) {
			attributes = Object.assign( attributes, SetInitialAttributes( option['fields'] ) );
		} else {
			attributes[ index ] = { type, default: option['default'] };
		}
	});

	return attributes;
}

export default SetInitialAttributes;