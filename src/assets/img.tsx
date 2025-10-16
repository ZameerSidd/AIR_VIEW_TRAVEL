
const getAssetPath = (path: string) => {
  const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AIR_VIEW_TRAVEL/';
  return `${baseUrl}${path}`;
};
// Carousel Hero Images
export const carouselImages = {
  travelInsurance: getAssetPath("/images/TravelInsurance.jpg"),
  holidayPackages: getAssetPath("/images/HolidayPackages.jpg"),
  hotelBooking: getAssetPath("/images/HotelBooking.jpg"),
  corporateTravel: getAssetPath("/images/CorporateTravel.jpg")
};