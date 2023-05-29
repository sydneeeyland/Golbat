import { useCacheInitialDataQuery } from '../Redux/Slice/application-slice';

const Cache = () => {
  useCacheInitialDataQuery();
};

export default function useValidateAuth() {
  const signedIn = false;

  if (signedIn) {
    Cache();
  }

  return { signedIn };
}
