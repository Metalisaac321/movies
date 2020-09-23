
export interface MenuItem {
    /** Id for key value in list rendering */
    menuItemId: number;

    /** Text show in the Sidebar */
    text: string;

    /** Link to certain route */
    route: string;
}

export interface MenuItemProps {
    text: string;
    route: string;
}