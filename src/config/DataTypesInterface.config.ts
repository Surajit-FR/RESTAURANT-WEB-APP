// Menu dropdown_type
export type dropdown_type = {
    home: boolean;
    about: boolean;
    menu: boolean;
    menuList: boolean;
    menuGrid: boolean;
    more: boolean;
};
// CookieBarProps
export interface CookieBarProps {
    isCookieVisible: boolean;
    setIsCookieVisible: (isVisible: boolean) => void;
};
// VideoModalProps
export interface VideoModalProps {
    videoUrl: string;
    onClose: () => void;
};
// ProductModalProps
export interface ProductModalProps {
    page: string;
};
// MenuItem
export interface MenuItem {
    name: string;
    description: string;
    price: number;
    id: number;
};
// MenuCategory
export interface MenuCategory {
    id: string;
    category: string;
    categoryTitleImageSrc: string;
    items: MenuItem[];
};
// SectionContent
export interface SectionContent {
    title: string;
    description?: string;
    button?: {
        text: string;
        link: string;
    };
    image?: {
        src: string;
        alt: string;
    };
};
// SectionData
export interface SectionData {
    section: {
        content: {
            columns: {
                content: SectionContent;
            }[];
        };
    };
};
// Define a type for your route data
export type RouteData = {
    path: string;
    component: JSX.Element;
};
