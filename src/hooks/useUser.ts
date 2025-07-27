import { useAuth } from '@/contexts/auth-context';

const useUser = () => {
  const { user } = useAuth();
  return user;
};

export default useUser;
