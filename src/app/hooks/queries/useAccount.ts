import { AccountService } from '@app/services/AccountService';
import { useQuery } from '@tanstack/react-query';

export function useAccount() {
  const { data } = useQuery({
    queryKey: ['account'],
    queryFn: async () => AccountService.getMe(),
    staleTime: Infinity,
  });

  return {
    account: data,
  };
}
