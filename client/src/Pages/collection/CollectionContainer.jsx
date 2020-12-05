import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../Components/with-spinner/WithSpinner'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector'
import Collection from './Collection'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)