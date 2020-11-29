import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector'
import WithSpinner from '../with-spinner/WithSpinner'
import CollectionOverview from './CollectionOverview'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)