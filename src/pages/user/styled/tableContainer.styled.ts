import styled from "styled-components";

export const UserTableContainer = styled.div`
  & .ant-table-thead > tr > th {
    background: #e6f7ff !important;
    color: #000000d9 !important;
  }

  & > .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  & .ant-table-tbody > .ant-table-row {
    cursor: pointer;
  }

  & .ant-table-tbody > .selected-row > td {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`;
