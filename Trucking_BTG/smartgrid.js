const smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
const settings = {
	filename: '_sgrid',
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
		big: {
            width: '1920px',
        },
        w_1820: {
            width: '1820px',
        },
        w_1650: {
            width: '1650px',
        },
        w_1460: {
            width: '1460px',
        },
        xxl: {
            width: '1366px',
        },

        bigxxll: {
            width: '1250px',
        },

        xxll: {
            width: '1180px',
        },

        ftr: {
            width: '1125px',
        },

        xl: {
            width: '1024px',
        },
		
        lg: {
            width: '992px', /* -> @media (max-width: 1100px) */
        },
        mdbig: {
            width: '840px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '768px'
        },
        w_625: {
            width: '625px'
        },
        sm: {
            width: '576px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        w_556: {
            width: '556px',
        },
        w_439: {
            width: '439px',
        },
        table: {
            width: '400px'
        },
        w_332: {
            width: '332px',
        },
        w_327: {
            width: '327px',
        },
        xs: {
            width: '320px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 
smartgrid('./src/stylesheets/base', settings);