import type { Station } from "@simrail/types";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

type StationMarkerProps = {
	station: Station;
};

export const NonPlayableStationMarker = ({ station }: StationMarkerProps) => {
	const icon = L.icon({
		iconUrl: "/markers/icon-train-station.png",
		iconSize: [16, 16],
		popupAnchor: [0, -16],
	});

	let displayText = `${station.Name} [${station.Prefix}]`
	if (station.Prefix === "") {
		displayText = `${station.Name}`
	}

	return (
		<Marker
			key={station.id}
			icon={icon}
			position={[station.Latititude, station.Longitude]}
			zIndexOffset={30}
			eventHandlers={{
				mouseover: (event) => event.target.openPopup(),
				mouseout: (event) => event.target.closePopup(),
			}}
		>
			<Popup>
				{displayText}
				<br />
			</Popup>
		</Marker>
	);
};
