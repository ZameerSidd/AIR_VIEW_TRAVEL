
const getAssetPath = (path: string) => {
  const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AIR_VIEW_TRAVEL/';
  return `${baseUrl}${path}`;
};
// Carousel Hero Images
export const carouselImages = {
  travelInsurance: getAssetPath("/images/TravelInsurance.jpg"),
  holidayPackages: getAssetPath("/images/HolidayPackages.jpg"),
  hotelBooking: getAssetPath("/images/HotelBooking.jpg"),
  corporateTravel: getAssetPath("/images/CorporateTravel.jpg"),

  flightBooking: getAssetPath("/images/Flight-Tickets.jpeg"),
  globalVisa: getAssetPath("/images/Global-Visa-Assistance.jpeg"),
  uaeVisa: getAssetPath("/images/UAE-Tourist-Visa.jpeg"),
  documentAttestation: getAssetPath("/images/Attestation-Services.jpeg"),
  cityTours: getAssetPath("/images/City-tour.jpeg"),
  tripPlanning: getAssetPath("/images/trip-organization.jpeg"),
  visaExtension: getAssetPath("/images/Visa-Extension.jpeg"),
  umrahPackages: getAssetPath("/images/Umrah-Packages.jpeg")
};