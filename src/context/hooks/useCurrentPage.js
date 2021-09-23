import { useContext, useEffect } from 'react';
import Context from '../Context';

export default function useCurrentPage(pageTitle) {
  const { setCurrentPage } = useContext(Context);

  useEffect(() => {
    setCurrentPage(pageTitle);
  }, [pageTitle, setCurrentPage]);
}
