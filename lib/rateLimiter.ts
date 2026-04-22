import { RateLimiterMemory } from "rate-limiter-flexible";

export const RateLimiter = new RateLimiterMemory({
  points: 3, // 3 requests
  duration: 60, // per 60 seconds
});