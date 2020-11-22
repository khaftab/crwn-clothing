import { createSelector } from 'reselect'

const directorySelector = state => state.directory

const selectDirectory = createSelector(
    [directorySelector],
    directory => directory.sections
)

export default selectDirectory