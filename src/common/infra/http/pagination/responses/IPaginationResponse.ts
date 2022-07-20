interface IPaginationResponse<T> {
  records: T[];
  metadata: {
    offset: number;
    items: number;
    total: number;
  };
}

export default IPaginationResponse;
