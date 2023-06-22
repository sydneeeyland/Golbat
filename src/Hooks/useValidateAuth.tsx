import { useCacheInitialDataQuery } from '../Redux/Slice/application-slice';

const Cache = () => {
  useCacheInitialDataQuery();
};

export default function useValidateAuth() {
  const signedIn = true;

  if (signedIn) {
    Cache();
  }

  return { signedIn };
}
