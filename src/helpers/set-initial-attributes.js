function SetInitialAttributes( options ) {
	let attributes = {};

	Object.keys( options ).map( index => {
		const option = options[ index ];
		attributes[ index ] = { type: 'string', default: option['default'] };
	});

	return attributes;
}

export default SetInitialAttributes;