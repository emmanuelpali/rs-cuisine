import masaPic from '../../../public/images/IMG_20230628_185502-land.png'

import { StaticImageData } from 'next/image';

interface MenuSub {
  quantity: string;
  price: string;
}

interface MenuItem {
  [key: string]: MenuSub;
}

interface MenuData {
  id: number;
  categoryName: string;
  thumbnail: StaticImageData;
  description: string;
  categoryItems: MenuItem;
}

const menulist: MenuData[] = [
    {
        id: 1,
        thumbnail: masaPic,
        description: "This is what people mean when they say awesome stuff. or write about the ingredients",
        categoryName: "Classic Masa",
        categoryItems: {
            twelve: {
                quantity: "Dozen",
            price: "$20"
            },
            regularPan: {
                quantity: "Regular Pan",
            price: "$40"
            },
            largePan: {
                quantity: "Large Pan",
            price: "$60"
            }
        }
    },
    {
        id: 2,
        thumbnail: masaPic,
        description: "This is what people mean when they say awesome stuff. or write about the ingredients",
        categoryName: "Meat Lover",
        categoryItems: {
            twelve: {
                quantity: "Dozen",
            price: "$30"
            },
            regularPan: {
                quantity: "Regular Pan",
            price: "$60"
            },
            largePan: {
                quantity: "Large Pan",
            price: "$120"
            }
        }
    },
    {
        id: 3,
        thumbnail: masaPic,
        description: "This is what people mean when they say awesome stuff. or write about the ingredients",
        categoryName: "Spicy Veggie Delight",
        categoryItems: {
            twelve: {
                quantity: "Dozen",
            price: "$25"
            },
            regularPan: {
                quantity: "Regular Pan",
            price: "$50"
            },
            largePan: {
                quantity: "Large Pan",
            price: "$100"
            }
        }
    },
    {
        id: 4,
        thumbnail: masaPic,
        description: "This is what people mean when they say awesome stuff. or write about the ingredients",
        categoryName: "Classic Masa & Peanut Soup",
        categoryItems: {
            twelve: {
                quantity: "Dozen",
            price: "$40"
            },
            regularPan: {
                quantity: "Regular Pan",
            price: "$70"
            },
            largePan: {
                quantity: "Large Pan",
            price: "$110"
            }
        }
    },
    {
        id: 5,
        thumbnail: masaPic,
        description: "This is what people mean when they say awesome stuff. or write about the ingredients",
        categoryName: "Peanut Soup",
        categoryItems: {
            small: {
                quantity: "Small Bowl (700ml)",
            price: "$30"
            },
            regular: {
                quantity: "Regular Bowl (1.5L)",
            price: "$50"
            },
            largePan: {
                quantity: "Large Pan (2.2L)",
            price: "$70"
            }
        }
    },
    
];

export default menulist