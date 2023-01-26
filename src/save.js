import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import React, { Component } from "react";


export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps }>
            <DisplayUserDetails/>
        </div>
    )
}

class DisplayUserDetails extends Component {
    constructor( props , attributes) {
        super( props );
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount(attributes) {
        apiFetch( { 
            path: 'uwp/v1/users/?id=',
            method: 'POST',
            data: { id: attributes.userId },
        } )
            .then( ( res ) => {
                console.log( res );
            }
        );
    }

  /*   handleChange = (selectedOption) => {
        this.props.onChange(selectedOption.value, selectedOption.label); 
    } */

    render() {
         const { error, isLoaded, items } = this.state;
      //  const selectedOption = items.find(item => item.value === this.props.value);
    
        if ( error ) {
            return <div>Error: { error.message }</div>;
        } else if ( ! isLoaded ) {
            return <div>Loading...??</div>;
        } else {
            return (
            <div>
                {items.id}
            </div>
            );
        }
    }
}