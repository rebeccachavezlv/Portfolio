import brfLogo from './images/blackraven-collage.jpg'
import crownLogo from './images/crown-clothing.jpg'
import cssLogo from './images/gradient-logo.jpg'
import ricksLogo from './images/rickslawn.jpg'
import roboLogo from './images/robofriends-logo.jpg'
import issLogo from './images/telescope-logo.jpg'

const PORTFOLIO_DATA = [
    {
        title: 'Crown Clothing',
        subtitle: 'React.js, Redux, Stripe API, Firebase',
        type: 'code',
        imageUrl: crownLogo,
        codeUrl: 'https://github.com/rebeccachavezlv/clothing-store',
        webUrl: 'https://rc-crown-live.herokuapp.com',
        id: 1
    },
    {
        title: 'RoboFriends',
        subtitle: 'React.js, RESTful API',
        type: 'code',
        imageUrl: roboLogo,
        codeUrl: 'https://github.com/rebeccachavezlv/robofriends/tree/master',
        webUrl: 'https://rebeccachavezlv.github.io/robofriends/',
        id: 2
    },
    {
        title: 'Black Raven Films',
        subtitle: 'WordPress, CSS',
        type: 'code',
        imageUrl: brfLogo,
        codeUrl: null,
        webUrl: 'https://www.blackravenfilms.com',
        id: 3
    },
    {
        title: 'ISS Finder',
        subtitle: 'JavaScript, RESTful API',
        type: 'code',
        imageUrl: issLogo,
        codeUrl: 'https://github.com/rebeccachavezlv/ISSFinder',
        webUrl: 'https://rebeccachavezlv.github.io/ISSFinder/',
        id: 4
    },
    {
        title: "Rick's Lawn and Landscaping",
        subtitle: 'WordPress, CSS',
        type: 'code',
        imageUrl: ricksLogo,
        codeUrl: null,
        webUrl: 'https://www.rickslawnandlandscaping-lv.com',
        id: 5
    },
    {
        title: 'CSS Gradient Generator',
        subtitle: 'HTML, CSS, JavaScript',
        type: 'code',
        imageUrl: cssLogo,
        codeUrl: 'https://github.com/rebeccachavezlv/cssbackgroundgenerator',
        webUrl: 'https://rebeccachavezlv.github.io/cssbackgroundgenerator/',
        id: 6
    }
]

export default PORTFOLIO_DATA