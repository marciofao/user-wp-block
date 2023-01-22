import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';

registerBlocktype(metadata.name, {
	
     edit: function(){
        return "Edit";
     },
     save: function(){
        return "Save";
     }
})