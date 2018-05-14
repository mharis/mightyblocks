function wpMightyBlocksAccordionTemplate( className, items) {
    const renderItems = Object.keys(items).map((index) => {
        return `<li>
            <div class='wp-block-mightyblocks-block-accordion-head'>
                <span class="wp-block-mightyblocks-block-accordion-head-icon"></span>
            </div>
            <div class='wp-block-mightyblocks-block-accordion-content-wrapper'>
            </div>
        </li>`;
    });


    return `<div class=${ className }>
        <ul class='wp-block-mightyblocks-block-accordion-list'>
            ${ renderItems }
        </ul>
    </div>`;
}