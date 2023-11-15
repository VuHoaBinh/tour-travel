import { client } from './axios';

const getTours = (): Promise<ToursResponse> => client.get(`/tours`);

const getToursID = (params: ToursParams): Promise<ToursResponse> => client.get(`/tours?`, { params });

const getTour = ({ page, limit }: { page: number; limit: number }): Promise<ToursResponse> =>
  client.get(`/tours?_page=${page}&_limit=${limit}`);

const getAttractiveTours = (): Promise<AttractiveToursResponse> => client.get(`/attractive-tours`);

const toursService = {
  getTours,
  getAttractiveTours,
  getTour,
  getToursID,
};

export default toursService;
