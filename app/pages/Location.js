// "use client"
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet-universal';

// const Map = () => {
//   const [position, setPosition] = useState([0, 0]); // Default position (will be updated with the user's location)

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (geoLocation) => {
//         const { latitude, longitude } = geoLocation.coords;
//         setPosition([latitude, longitude]);
//       },
//       (error) => {
//         console.error('Error getting the user location:', error);
//       }
//     );
//   }, []);

//   return (
//     <div className="map-container">
//       <MapContainer
//         center={position}
//         zoom={12}
//         style={{ width: '100%', height: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; OpenStreetMap contributors'
//         />
//         <Marker position={position}>
//           <Popup>Your current location</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
