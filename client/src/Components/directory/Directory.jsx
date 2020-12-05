import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import { connect } from 'react-redux'
import './directory.styles.scss'
import { createStructuredSelector } from 'reselect'
import selectDirectory from '../../redux/directory/directorySelector'
function Directory({ sections }) {

    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...restProperty }) => (
                <MenuItem key={id}  {...restProperty} />
            ))}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectory
})


export default connect(mapStateToProps)(Directory)
