function compareAElementsWithParents() {
    const links = document.querySelectorAll('a');

    // Visual + font related properties to compare
    const relevantProps = [
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'letter-spacing',
        'line-height',
        'text-decoration',
        'text-transform',
        'color',
        'visibility',
        'display',
        'opacity',
        'background-color',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left'
    ];

    links.forEach((link, index) => {
        const parent = link.parentElement;
        if (!parent) return;

        const linkStyles = window.getComputedStyle(link);
        const parentStyles = window.getComputedStyle(parent);

        const differences = {};

        relevantProps.forEach(prop => {
            const linkValue = linkStyles.getPropertyValue(prop);
            const parentValue = parentStyles.getPropertyValue(prop);

            if (linkValue !== parentValue) {
                differences[prop] = {
                    link: linkValue,
                    parent: parentValue
                };
            }
        });

        if (Object.keys(differences).length > 0) {
            console.log(`Differences for <a> element #${index + 1}:`, link);
            console.table(differences);
        }
    });
}

// Run the function
compareAElementsWithParents();
