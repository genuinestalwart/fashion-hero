import Rootlayout from "@/layouts/Rootlayout";
import AboutUsPage from "@/pages/about-us";
import ContactUsPage from "@/pages/contact-us";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import ProductPage from "@/pages/product";
import ShopPage from "@/pages/shop";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Rootlayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "about-us",
				element: <AboutUsPage />,
			},
			{
				path: "contact-us",
				element: <ContactUsPage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "shop",
				element: <ShopPage />,
			},
			{
				path: "shop/:id",
				element: <ProductPage />,
			},
		],
	},
]);
