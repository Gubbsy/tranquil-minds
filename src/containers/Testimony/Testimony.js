import React from 'react';
import TestimonyItem from '../../components/TestimonyItem/TestimonyItem';

const Testimony = () => {

    // Testimonys will be stored in a db, pulled and turned into testmony items.
    return(
        <div>
            <TestimonyItem />
            <TestimonyItem />
            <TestimonyItem />
            <TestimonyItem />
        </div>
    )
}

export default Testimony;