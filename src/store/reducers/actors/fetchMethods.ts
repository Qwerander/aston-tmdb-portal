import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActor, QueryType } from "./typesActors";
import { apiRequest } from "../../../api/instanceApi";

export const getActors = createAsyncThunk(
    'actors/fetchActors',
    async (data: QueryType) => {
      const { page } = data
      const res = await apiRequest.get(`/person/popular?&page=${page}`);
      const actors = res.data.results.map((actor: IActor) => ({
        gender: actor.gender,
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path
      }))
      const total_pages = res.data.total_pages
      return { page: data.page, actors, total_pages }
    }
  );
  
  export const getActorsSearch = createAsyncThunk(
    'actorss/fetchActorsSearch',
    async (data: QueryType) => {
      const { page, search } = data
      const res = await apiRequest.get(`/search/person?query=${search}&page=${page}`);
      const actors = res.data.results.map((actor: IActor) => ({
        gender: actor.gender,
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path
      }))
      const total_pages = res.data.total_pages
      return { page: data.page, actors, total_pages }
    }
  );