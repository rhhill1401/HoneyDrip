import styled from "styled-components";

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 200;
  overflow: hidden;
  white-space: nowrap;
  width: 100vw;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  float: left;
`;

export const Lia = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 26px;
  text-decoration: none;
  color: #7f8387;
`;
