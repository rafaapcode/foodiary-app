import z from 'zod';

const schema = z.object({
  EXPO_PUBLIC_API_URL: z.string().min(1, 'API URL is required'),
});

const formattedRawEnvs = {
  EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL || undefined,
};

const parsedEnv = schema.parse(formattedRawEnvs);

export const env = {
  api: {
    url: parsedEnv.EXPO_PUBLIC_API_URL,
  },
};
