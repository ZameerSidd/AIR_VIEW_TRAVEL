
// const getAssetPath = (path: string) => {
//   const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AIR_VIEW_TRAVEL/';
//   return `${baseUrl}${path}`;
// };
const getAssetPath = (path: string) => {
  let baseUrl = 'https://airviewtravel.ae';
  if (window.location.hostname === 'localhost') {
    baseUrl = 'http://localhost:3000';
  }

  return `${baseUrl}${path}`;
};

// Carousel Hero Images
export const carouselImages = {
  travelInsurance: getAssetPath("/images/TravelInsurance.jpg"),//
  // holidayPackages: getAssetPath("/images/HolidayPackages.jpg"),// Old Image
  holidayPackages: getAssetPath("/images/Holiday-Package.jpg"),//
  // hotelBooking: getAssetPath("/images/HotelBooking.jpg"), // Old Image
  hotelBooking: getAssetPath("/images/Hotel-Booking.jpg"),
  // corporateTravel: getAssetPath("/images/CorporateTravel.jpg"),// Old Image
  corporateTravel: getAssetPath("/images/Corporate-Travel.jpg"),//

  // flightBooking: getAssetPath("/images/Flight-Tickets.jpeg"),// Old Image
  flightBooking: getAssetPath("/images/Flight-Booking.jpg"),//
  globalVisa: getAssetPath("/images/Global-Visa-Assistance.jpeg"),
  // uaeVisa: getAssetPath("/images/UAE-Tourist-Visa.jpeg"),// Old Image
  uaeVisa: getAssetPath("/images/UAE-Tourist-Visa.jpg"),//
  documentAttestation: getAssetPath("/images/Attestation-Services.jpeg"),
  // cityTours: getAssetPath("/images/City-tour.jpeg"),// Old Image
  cityTours: getAssetPath("/images/City-Tour.jpg"),//
  tripPlanning: getAssetPath("/images/trip-organization.jpeg"),
  visaExtension: getAssetPath("/images/Visa-Extension.jpeg"),
  // umrahPackages: getAssetPath("/images/Umrah-Packages.jpeg"),// Old Image
  umrahPackages: getAssetPath("/images/Umrah-Packages.jpg"),//
  logo: getAssetPath("/images/logo.png")
};