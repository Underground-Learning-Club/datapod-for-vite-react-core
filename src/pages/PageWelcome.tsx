import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>Welcome to this site.</p>
			<p>App ID-Code: {appData.appIdCode}</p>
		</>
	);
};
