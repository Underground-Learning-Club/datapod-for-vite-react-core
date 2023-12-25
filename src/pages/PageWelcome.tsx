import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>App ID-Code: {appData.appIdCode}</p>
			<p>frontend port: {appData.frontendPort}</p>
			<p>backend port: {appData.backendPort}</p>
			<p>data files:</p>
			<ul className="list-disc ml-6">
				{appData.fileObjects.map(
					(fileObject, index) => {
						return <li key={index}>{fileObject.pathAndFileName}
							<textarea className="block mb-3">{fileObject.content}</textarea>
						</li>;
					}
				)}
			</ul>
		</>
	);
};
