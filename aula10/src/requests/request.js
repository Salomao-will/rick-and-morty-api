import { getApi } from "../services/api/api";

export const getCaracters = async (page) => {
  return (await getApi.get(`/character/'${page}`)).data
}