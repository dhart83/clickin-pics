import logo from '../assets/images/logo.png'

export const config = {
    assets: {
        brandLogo: {
            link: '/',
            img: logo,
            alt: 'Brand Logo'
        }
    },
    links: [
        {
            name: 'Home',
            route: '/'
        },
        {
            name: 'Packages',
            route: '/packages'
        },
        // {
        //     name: 'Addons',
        //     route: '/addons'
        // },
        {
            name: 'Gallery',
            route: '/gallery'
        },
        {
            name: 'About',
            route: '/about'
        },
        {
            name: 'Contact',
            route: '/contact'
        }
    ]
}
