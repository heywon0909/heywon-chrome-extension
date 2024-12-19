import { createMemoryRouter } from "react-router";
import { Root } from "../page/root/Root";
import { Setting } from "../page/setting/Setting";
import { Layout } from "../page/layout/Layout";

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Root/>
            },
            {
                path: '/setting',
                element:<Setting/>
            }
        ]
    }
]

export const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/setting'],
    initialIndex:0
})