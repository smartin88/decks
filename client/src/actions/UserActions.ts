import { Dispatch } from 'redux';
import {
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
  UserDispatchTypes,
} from './UserActionTypes';
import * as ApiService from '../ApiService';
import { User } from '../Interfaces';

export const GetAllUsers = () => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  try {
    dispatch({ type: USER_LOADING });
    const res: any = await ApiService.getAllUser();
    dispatch({
      type: USER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: USER_FAIL });
  }
};

export const CreateUser = (options: User) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  try {
    dispatch({ type: USER_LOADING });
    ApiService.createNewUser(options);
  } catch (error) {
    dispatch({ type: USER_FAIL });
  }
};

export const GetUserByUUId = (UUId: string) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  try {
    dispatch({ type: USER_LOADING });
    const res: User = await ApiService.getUserByUUId(UUId);
    dispatch({
      type: USER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: USER_FAIL });
  }
};

export const GetUserById = (id: number) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  try {
    dispatch({ type: USER_LOADING });
    const res: User = await ApiService.getUserById(id);
    dispatch({
      type: USER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: USER_FAIL });
  }
};

export const DeleteUser = (id: number) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  try {
    dispatch({ type: USER_LOADING });
    ApiService.deleteUser(id);
  } catch (error) {
    dispatch({ type: USER_FAIL });
  }
};

export const UpdateUser = (id: number, options: Partial<User>) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  try {
    dispatch({ type: USER_LOADING });
    ApiService.updateUser(id, options);
  } catch (error) {
    dispatch({ type: USER_FAIL });
  }
};
