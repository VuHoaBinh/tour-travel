import { client } from './axios';

const getHotels = (): Promise<HotelsResponse> => client.get(`/hotels`);

const getHotelsID = (id: string): Promise<HotelDetailResponse[]> => client.get(`/hotels?id=${id}`);

const hotelsService = {
  getHotels,
  getHotelsID,
};

export default hotelsService;
