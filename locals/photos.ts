import {fullsizePath, thumbPath} from "../scripts/config";


export const photos = [{
    href: 'pst.jpg',
    description: 'Training for trainers',
    place: 'Polska szkoła trenerów, Poznań'
}, {
    href: '2.jpg',
    description: 'Communication within distributed systems',
    place: 'Ericsson, Mexico City'
}, {
    href: 'wit.jpg',
    description: 'Typing game in RxJS',
    place: 'WiT, Kraków'
}, {
    href: '3.jpg',
    description: 'Data transfer protocols',
    place: 'Ericsson, New Delhi'
}, {
    href: 'meetjs.jpg',
    description: 'Angular dependency injection in details',
    place: 'Kraków, MeetJS'
}, {
    href: 'colombo.jpg',
    description: 'JavaScript mechanics - from prototypes to proxies',
    place: 'Pyxle, Colombo'
}
].map(photo => ({
    alt: photo.description,
    hrefBig: `${fullsizePath}/${photo.href}`,
    hrefSmall: `${thumbPath}/${photo.href}`,
    ...photo
}));