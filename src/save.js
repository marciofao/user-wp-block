import { useBlockProps } from '@wordpress/block-editor';



export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps }>
            <div class="uwb-block">
            <div class="uwb-title">
                Name
            </div>
            <div class="uwb-image image_of_person">
            
               
            </div>
            <div class="uwb-details">
               <div class="short_description"></div>
               <div class="position_in_the_company"></div>
               <div class="github"></div>
               <div class="linkedin"></div>
               <div class="xing"></div>
               <div class="facebook"></div>
   
            </div>
            
        </div>
        
        </div>
    )
}

