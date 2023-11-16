import { useCallback, useState } from 'react';

type CommonSearch = {
  page?: number;
  size?: number;
  sortBy?: string;
  [key: string]: any;
};

const useSearch = (search?: CommonSearch) => {
  const [dataSearch, setDataSearch] = useState<any>({
    ...search,
  });

  const onSearchChange = useCallback((search: CommonSearch) => {
    setDataSearch((current: any) => ({
      ...current,
      ...search,
    }));
  }, []);

  return [dataSearch, onSearchChange];
};

export default useSearch;
