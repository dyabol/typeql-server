import { v4 } from 'uuid';
import { redisClient } from '../../redis';
import { CLIENT_URL } from '../../index';
import { forgotPasswordPrefix } from '../constants/redisPrefixes';
export const createChangePasswordUrl = async (userId: number) => {
  const token = v4();
  redisClient.set(forgotPasswordPrefix + token, userId, 'ex', 60 * 60 * 24); // 1 day expiration

  return `${CLIENT_URL}/user/change-password/${token}`;
};