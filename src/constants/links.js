import React from "react"
import {FaHome, FaBriefcase, FaRegCalendarAlt, FaContao, FaMapMarkerAlt} from 'react-icons/fa'

export default [
    {
        path: '/',
        icon: <FaHome />,
        text: 'home'
    },
    {
        path: '/about',
        icon: <FaBriefcase />,
        text: 'about'
    },
    {
        path: '/events',
        icon: <FaMapMarkerAlt />,
        text: 'events'
    },
    {
        path: '/timeline',
        icon: <FaRegCalendarAlt />,
        text: 'timeline'
    },
    {
        path: '/contact',
        icon: <FaContao />,
        text: 'contact'
    },
]