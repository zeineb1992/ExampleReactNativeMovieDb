import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Icons = {
    Search: props => <FontAwesome {...props} name="search" />,
    Film: props => <FontAwesome {...props} name="film" />,
    Calendar: props => <FontAwesome {...props} name="calendar-times" />,
    Globe: props => <FontAwesome {...props} name="globe" />,
    Star: props => <FontAwesome {...props} name="star" />,
    Close: props => <FontAwesome {...props} name="times" />,
}

export default Icons
