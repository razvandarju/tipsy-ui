import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';

export const menuData = [
    {
        'title': 'Home',
        'path': '/',
        'cName': 'nav-text',
        'icon': <AiIcons.AiFillHome />
    },
    {
        'title': 'Sport',
        'path': '/sport',
        'cName': 'nav-text',
        'icon': <BiIcons.BiTennisBall />
    },
    {
        'title': 'Financial',
        'path': '/financial',
        'cName': 'nav-text',
        'icon': <AiIcons.AiOutlineStock />
    },
    {
        'title': 'Stats',
        'path': '/stats',
        'cName': 'nav-text',
        'icon': <IoIcons.IoIosStats />
    }

];