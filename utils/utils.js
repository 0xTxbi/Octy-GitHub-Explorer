import moment from 'moment'

export const convertToUTCFull = (time) => {
    return moment(time).format('MMMM, YYYY')
}
