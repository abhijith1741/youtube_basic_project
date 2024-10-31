import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import VideoDetails from "./components/VideoDetails";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <VideoContainer />,
			},
			{
				path: "watch",
				element: <VideoDetails />
			}
		],
	},
]);
function App() {
	return (
		<Provider store={store}>
			<Header />
			<RouterProvider router={appRouter} />
		</Provider>
	);
}

export default App;
